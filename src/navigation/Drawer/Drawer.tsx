import React from 'react';
import DrawerContent from '../DrawerContent';
import Home from '../../screens/Home';
import {StyleSheet, View} from 'react-native';
import Cart from '../../public/icons/cart.svg';
import {Main as MainOptions} from '../../helpers/options';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screens} from '../../utils/constants';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName={Screens.Home}
      //TODO: FIXED IT - add type
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen
        name={Screens.Home}
        component={Home}
        options={{
          headerRight: () => (
            <View style={styles.cart}>
              <Cart />
            </View>
          ),
          ...MainOptions,
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  cart: {
    paddingRight: 20,
  },
});
export default Drawer;
