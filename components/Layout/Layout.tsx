import React, {FC, PropsWithChildren, ReactNode} from "react";
import {Dimensions, StyleSheet, View} from "react-native";

const Layout: FC<PropsWithChildren<ReactNode>> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    height: height + 158,
    overflow: "hidden",
  },
});
export default Layout;
