import React, {FC} from "react";

import {Image, StyleSheet, View} from "react-native";
import Prices from "../Prices";

type Props = {
  id: string;
  image?: string;
  title?: string;
  price?: number;
  discountPrice?: number;
  sale?: number;
};

const Card: FC<Props> = ({id, image, title, price, discountPrice, sale}) => {
  return (
    <View style={styles.container} key={id}>
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
    </View>
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
