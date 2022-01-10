import {NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {Colors} from "../utils/constants";

export const Main: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.PacificBlue,
  },
  title: "Ecommerce Store",
  headerTitleAlign: "center",
  headerTintColor: Colors.White,
};

export const Product: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.PacificBlue,
  },
  headerTitle: "",
  headerTintColor: Colors.White,
};
