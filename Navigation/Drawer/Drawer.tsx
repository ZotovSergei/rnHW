import React from "react";
import DrawerContent from "../DrawerContent";
import Home from "../../screens/Home";
import {View} from "react-native";
import Cart from "../../public/icons/cart.svg";
import {Main as MainOptions} from "../../helpers/options";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Screens} from "../../utils/constants";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName={Screens.Home}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen
        name={Screens.Home}
        component={Home}
        options={{
          headerRight: () => (
            <View
              style={{
                paddingRight: 20,
              }}>
              <Cart />
            </View>
          ),
          ...MainOptions,
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;