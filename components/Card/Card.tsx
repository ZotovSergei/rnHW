import React, {FC} from "react";

import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Prices from "../Prices";

type Props = {
  id: string;
  image: string;
  title: string;
  price: string;
  discountPrice: string;
  sale: string;
};

const Card: FC<Props> = ({id, image, title, price, discountPrice, sale}) => {
  return (
    <TouchableOpacity style={styles.container} key={id}>
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
    backgroundColor: "#E5E5E5",
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
    backgroundColor: "#FFF",
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
