import React, {FC} from "react";

import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Prices from "../Prices";
import {useNavigation} from "@react-navigation/native";
import {Colors, Screens} from "../../utils/constants";
import {Product, ProductScreenNavigationProp} from "../../utils/typings";

const Card: FC<Product> = ({id, image, title, price, discountPrice, sale}) => {
  const navigation = useNavigation<ProductScreenNavigationProp>();
  const handleGoToProduct = () =>
    navigation.navigate(Screens.Product, {
      title,
      id,
      image,
      price,
      discountPrice,
      sale,
    });
  return (
    <TouchableOpacity
      style={styles.container}
      key={id}
      onPress={handleGoToProduct}>
      <View style={styles.item}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
          resizeMode="contain"
        />
        <Prices
          discountPrice={discountPrice}
          price={price}
          sale={sale}
          title={title}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "47%",
    borderRadius: 5,
    backgroundColor: Colors.Whisper,
    // TODO: Change to shadow
    paddingBottom: 4,
    paddingLeft: 1,
    paddingRight: 1,
  },
  // TODO: Change to shadow
  item: {
    borderRadius: 5,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.White,
  },
  tinyLogo: {
    marginTop: 5,
    width: 100,
    height: 110,
    flex: 1,
    alignSelf: "center",
  },
});
export default Card;
