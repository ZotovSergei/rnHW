import React, {FC, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import Prev from '../../public/icons/prev.svg';
import Next from '../../public/icons/next.svg';
import {Colors} from '../../utils/constants';

type Props = {
  image?: string,
};
const {width: windowWidth} = Dimensions.get('window');

const Carousel: FC<Props> = ({image}) => {
  const images = new Array(3).fill(image);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Prev />
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: true}
          )}
          scrollEventThrottle={1}>
          {images.map((imageEl, imageIndex) => {
            return (
              <View style={styles.imageContainer} key={imageIndex}>
                <ImageBackground
                  source={{uri: imageEl}}
                  style={styles.card}
                  resizeMode={'contain'}
                />
              </View>
            );
          })}
        </ScrollView>
        <Next />
      </View>
      <View style={styles.indicatorContainer}>
        {images.map((imageEl, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: [8, 8, 8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={imageIndex}
              style={[styles.normalDot, {width}]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth,
    height: 250,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 250,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 43,
    marginBottom: 30,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.Silver,
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Carousel;
