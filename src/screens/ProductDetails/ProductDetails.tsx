import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from '../../modules/Carousel';
import store from '../../store/store';
import Prices from '../../components/Prices';
import Layout from '../../components/Layout';
import Separator from '../../components/Separator';
import SelectColor from '../../modules/SelectColor';
import Subtitle from '../../components/Subtitle';
import {useRoute} from '@react-navigation/native';
import {ProductScreenRouteProp} from '../../utils/typings';
import {Colors} from '../../utils/constants';

const mockData = store[0];

const ProductDetails = () => {
  const {colors, description} = mockData;
  const route = useRoute<ProductScreenRouteProp>();
  const {discountPrice, price, sale, image, title} = route.params ?? {};
  return (
    <View>
      <ScrollView>
        <Layout>
          <Carousel image={image} />
          <Prices
            discountPrice={discountPrice}
            price={price}
            sale={sale}
            title={title}
          />
          <Separator />
          <SelectColor colors={colors} />
          <Separator />
          <View>
            <Subtitle text={'Description'} />
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.buttonAddToCard}>
              <Text style={styles.textAddToCard}>
                {'Add to Cart'.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </Layout>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    lineHeight: 20,
  },
  buttonAddToCard: {
    backgroundColor: Colors.PacificBlue,
    width: '100%',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textAddToCard: {
    color: Colors.White,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 16,
    letterSpacing: 1.25,
  },
});

export default ProductDetails;
