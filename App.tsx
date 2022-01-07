import React from "react";
import Home from "./screens/Main";
import ProductDetails from "./screens/ProductDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Menu from "./public/icons/menu.svg";
import Basket from "./public/icons/basket.svg";
import {Main as MainOptions, Product} from "./helpers/options";
import Favorite from "./public/icons/favorite.svg";
import {StyleSheet, View} from "react-native";
import {Colors, Screens} from "./utils/constants";
import {ScreensType} from "./utils/typings";
import DrawerContent from "./Navigation/DrawerContent";

const Stack = createNativeStackNavigator<ScreensType>();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <View
                style={{
                  paddingRight: 20,
                }}>
                <Basket />
              </View>
            ),
            ...MainOptions,
          }}
        />
      </Drawer.Navigator>
      {/*<Stack.Navigator initialRouteName={Screens.Home}>*/}
      {/*<Stack.Screen*/}
      {/*  name="Home"*/}
      {/*  component={Home}*/}
      {/*  options={{*/}
      {/*    headerRight: () => <Basket />,*/}
      {/*    headerLeft: () => <Menu />,*/}
      {/*    ...MainOptions,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*  <Stack.Screen*/}
      {/*    name={Screens.Product}*/}
      {/*    component={ProductDetails}*/}
      {/*    options={{*/}
      {/*      headerRight: () => (*/}
      {/*        <View style={styles.icons}>*/}
      {/*          <Favorite />*/}
      {/*          <Basket />*/}
      {/*        </View>*/}
      {/*      ),*/}
      {/*      ...Product,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
});

export default App;
