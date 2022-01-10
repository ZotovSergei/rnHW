import React, {FC} from "react";
import {Text, View, StyleSheet} from "react-native";
import Menu from "../../public/icons/menu.svg";
import Basket from "../../public/icons/basket.svg";
import BackArrow from "../../public/icons/backArrow.svg";
import Favorite from "../../public/icons/favorite.svg";
import {Colors} from "../../utils/constants";

type Props = {
  title?: string;
  hasBackButton?: boolean;
  hasFavoriteButton?: boolean;
};

const Header: FC<Props> = ({hasBackButton, title, hasFavoriteButton}) => {
  return (
    <View style={styles.header}>
      {hasBackButton ? <BackArrow /> : <Menu />}
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.productActions}>
        {hasFavoriteButton && <Favorite />}
        <Basket />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.PacificBlue,
    width: "100%",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // padding: 10,
  },
  title: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: "500",
  },
  productActions: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
});

export default Header;
