import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ScreensNavigationProp} from "../../utils/typings";
import {Screens} from "../../utils/constants";

const Cart = () => {
  const navigation = useNavigation<ScreensNavigationProp>();
  return (
    <View>
      <Text>Cart</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Screens.ModalScreen, {
            title: "Selector color",
            type: "error",
            subtitle: "Please select your color to add this item in your cart",
          })
        }>
        <Text>Error</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Screens.ModalScreen, {
            title: "Product added to your cart",
            type: "success",
          })
        }>
        <Text>Success</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Screens.ModalScreen, {
            title: "Login To Continue",
            type: "warning",
            subtitle: "Please login to add product in your cart",
          })
        }>
        <Text>Warning</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
