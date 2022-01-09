import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Screens} from "./constants";

export type Product = {
  id: string;
  image: string;
  title: string;
  price: string;
  discountPrice: string;
  sale: string;
};

export type ScreensType = {
  Home: undefined;
  Product: Product;
  Search: undefined;
};

export type Links = {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
};
export type Attributes = {
  name: string;
  description: string;
  price: string;
  currency: string;
  display_price: string;
  image: string;
};

export type Products = {
  id: string;
  type: string;
  attributes: Attributes;
  links: Links;
};
export type ProductScreenNavigationProp = NativeStackScreenProps<
  ScreensType,
  Screens.Product
>["navigation"];
export type ProductScreenRouteProp = NativeStackScreenProps<
  ScreensType,
  Screens.Product
>["route"];
