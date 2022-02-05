import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FireWork from '../../components/FireWork';
import EmptyCart from '../../public/icons/emptyCart.svg';
import {Colors} from '../../utils/constants';

const CONTINUE = 'CONTINUE SHOPING';
const CartConfirmation = () => {
  const fireWorkElements = [5, 4, 10, 4, 8, 9, 7, 3, 10].map((item, index) => {
    return <FireWork key={`${index}_item`} playTime={item} />;
  });
  return (
    <View style={styles.container}>
      {fireWorkElements}
      <Text style={styles.title}>Order Confirmation</Text>
      <View>
        <EmptyCart />
      </View>
      <Text style={styles.subtitle}>
        Thank you for placing your order with us!
      </Text>
      <Text style={styles.description}>
        Please check your email for more details. For any questions and further
        information please contact our customer support.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Cart Confirmation')}>
        <Text style={styles.buttonText}>{CONTINUE}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    color: Colors.PacificBlue,
    lineHeight: 50,
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    width: 244,
    height: 100,
    marginTop: 80,
    marginBottom: 40,
  },
  subtitle: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    width: 330,
    height: 50,
    color: Colors.SuvaGrey,
    marginTop: 35,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    width: 249,
    height: 80,
    color: Colors.SuvaGrey,
    textAlign: 'center',
    marginBottom: 35,
  },
  button: {
    width: 311,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: Colors.PacificBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 16,
  },
});
export default CartConfirmation;
