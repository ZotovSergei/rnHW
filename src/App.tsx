import React from 'react';
import ProductDetails from './screens/ProductDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartIcon from './public/icons/cart.svg';
import {CommonStyleHeader, Product} from './helpers/options';
import Favorite from './public/icons/favorite.svg';
import {StyleSheet, View} from 'react-native';
import {Screens} from './utils/constants';
import {ScreensType} from './utils/typings';
import Drawer from './navigation/Drawer';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import WishList from './screens/WishList';
import Orders from './screens/Orders';
import ModalScreen from './screens/ModalScreen';

const Stack = createNativeStackNavigator<ScreensType>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Screens.Root}
            component={Drawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Screens.Product}
            component={ProductDetails}
            options={{
              headerRight: () => (
                <View style={styles.icons}>
                  <Favorite />
                  <CartIcon />
                </View>
              ),
              ...Product,
            }}
          />
          <Stack.Screen
            name={Screens.Profile}
            component={Profile}
            options={{
              ...CommonStyleHeader,
            }}
          />
          <Stack.Screen
            name={Screens.Cart}
            component={Cart}
            options={{
              ...CommonStyleHeader,
            }}
          />
          <Stack.Screen
            name={Screens.WishList}
            component={WishList}
            options={{
              ...CommonStyleHeader,
            }}
          />
          <Stack.Screen
            name={Screens.Orders}
            component={Orders}
            options={{
              ...CommonStyleHeader,
            }}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            ...CommonStyleHeader,
          }}>
          <Stack.Screen name={Screens.ModalScreen} component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
});

export default App;
