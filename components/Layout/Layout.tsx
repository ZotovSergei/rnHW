import React, {FC, PropsWithChildren, ReactNode} from "react";
import {StyleSheet, View} from "react-native";

const Layout: FC<PropsWithChildren<ReactNode>> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
});
export default Layout;
