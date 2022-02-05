import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import {getRandomColor} from '../../utils/methods';

const height = Dimensions.get('window').height / 2;
const width = Dimensions.get('window').width / 2;

type Props = {
  playTime: number,
};

const FireWork: FC<Props> = ({playTime}) => {
  const animate = useRef(new Animated.Value(0)).current;
  const [parts, setParts] = useState<JSX.Element[]>([]);

  const angle = 3.1415 / 6;
  const x = Math.random() * width + 10;
  const y = Math.random() * height + 10;

  const elements = new Array(12).fill(0).map((element, index) => {
    const xCoordinate = 75 * Math.sin(index * angle);
    const yCoordinate = 75 * Math.cos(index * angle);
    const partStyle: ViewStyle = {
      opacity: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
      transform: [
        {
          translateY: animate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, yCoordinate],
          }),
        },
        {
          translateX: animate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, xCoordinate],
          }),
        },
      ],
    };

    return (
      <Animated.View key={index} style={[partStyle, styles.fireWorkElement]} />
    );
  });

  useEffect(() => {
    setParts(elements);
    Animated.loop(
      Animated.timing(animate, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: playTime ?? 4}
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View
        style={{
          top: y,
          left: x,
        }}>
        {parts}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fireWorkElement: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: getRandomColor(),
    zIndex: 40,
  },
});
export default FireWork;
