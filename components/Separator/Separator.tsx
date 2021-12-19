import React from "react";
import {StyleSheet, View} from "react-native";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomColor: "#8F8F8F",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Separator;
