import React, {FC, useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreensType} from '../../utils/typings';
import {Colors, Screens} from '../../utils/constants';
import Avatar from '../../public/icons/avatar.svg';
import EmptyCart from '../../public/icons/emptyCart.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const titleLogin = 'Login First!';
const subtitleLogin = 'Login first to view your cart';
const titleCartEmpty = 'Your Card is empty!';
const subtitleCartEmpty = 'Add product in your cart now';
const linkText = 'New here? Sign Up';

const Cart: FC<NativeStackScreenProps<ScreensType, Screens.Cart>> = ({
  navigation,
  route,
}) => {
  const {accessToken} = route.params ?? {};
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Cart',
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {!accessToken ? (
          <>
            <View style={styles.avatarWrapper}>
              <Avatar />
            </View>
            <Text style={styles.title}>{titleLogin}</Text>
            <Text style={styles.subtitle}>{subtitleLogin}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(Screens.Login)}>
              <Text style={styles.buttonText}>LOGIN NOW</Text>
            </TouchableOpacity>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate(Screens.SignUp)}>
              {linkText}
            </Text>
          </>
        ) : (
          <>
            <View style={styles.avatarWrapper}>
              <EmptyCart />
            </View>
            <Text style={styles.title}>{titleCartEmpty}</Text>
            <Text style={styles.subtitle}>{subtitleCartEmpty}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('SHOP NOW')}>
              <Text style={styles.buttonText}>SHOW NOW</Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Screens.ModalScreen, {
              title: 'Selector color',
              type: 'error',
              subtitle:
                'Please select your color to add this item in your cart',
            })
          }>
          <Text>Error</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Screens.ModalScreen, {
              title: 'Product added to your cart',
              type: 'success',
            })
          }>
          <Text>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Screens.ModalScreen, {
              title: 'Login To Continue',
              type: 'warning',
              subtitle: 'Please login to add product in your cart',
            })
          }>
          <Text>Warning</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    marginBottom: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {},
  title: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: Colors.SuvaGrey,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.SuvaGrey,
    marginBottom: 35,
  },
  button: {
    width: 335,
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
  link: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.DeepSkyBlue,
  },
});

export default Cart;
