import React, {FC} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Subtitle from "../../components/Subtitle";

type Props = {
  colors?: string[];
};

const SelectColor: FC<Props> = ({colors}) => {
  return (
    <View>
      <Subtitle text={"Select color"} />
      <View style={styles.colors}>
        {colors?.map((item, index) => {
          return (
            <TouchableOpacity key={`${index}_${item}`} style={styles.button}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colors: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    minWidth: 50,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 15,
    color: "#4A4A4A",
  },
});
export default SelectColor;
