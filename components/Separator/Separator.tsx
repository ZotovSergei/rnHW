import React from "react";
import {StyleSheet, View} from "react-native";
import {Colors} from "../../utils/constants";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomColor: Colors.SuvaGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Separator;
