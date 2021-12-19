import React, {FC} from "react";
import {StyleSheet, Text} from "react-native";

type Props = {
  text: string;
};

const Subtitle: FC<Props> = ({text}) => {
  return <Text style={styles.subtitle}>{text}</Text>;
};
const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Subtitle;
