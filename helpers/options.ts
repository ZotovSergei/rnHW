import {NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {Colors} from "../utils/constants";
import {DrawerNavigationOptions} from "@react-navigation/drawer";

export const Main: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.PacificBlue,
  },
  title: "Ecommerce Store",
  headerTitleAlign: "center",
  headerTintColor: Colors.White,
  drawerLabel: "Home",
};

export const Product: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.PacificBlue,
  },
  headerTitle: "",
  headerTintColor: Colors.White,
};
