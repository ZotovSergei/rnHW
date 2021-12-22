import React from "react";
import Main from "./screens/Main";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductDetails from "./screens/ProductDetails";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
