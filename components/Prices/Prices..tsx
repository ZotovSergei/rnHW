import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";

type Props = {
  discountPrice?: number;
  price?: number;
  sale?: number;
  title?: string;
};

const Prices: FC<Props> = ({discountPrice, price, sale, title}) => {
  return (
    <>
      <Text style={[styles.title]}>{title}</Text>
      <View style={styles.sales}>
        <Text style={[styles.discountPrice, styles.commonText]}>
          ${discountPrice}
        </Text>
        <Text style={[styles.price, styles.commonText]}>${price}</Text>
        {sale && (
          <Text style={[styles.sale, styles.commonText]}>{sale}% Off</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  commonText: {
    fontWeight: "700",
    fontSize: 15,
    marginRight: 10,
  },
  discountPrice: {
    color: "#000",
  },
  price: {
    color: "#8F8F8F",
    textDecorationLine: "line-through",
  },
  sale: {
    color: "#00A8F3",
  },
  sales: {
    marginTop: 10,
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
  },
});
export default Prices;
