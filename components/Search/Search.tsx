import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

const Search = () => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.shadowItem}>
        <TextInput
          style={styles.searchInput}
          inlineImageLeft="search"
          inlineImagePadding={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    margin: 20,
    // TODO: replace on shadow
    borderWidth: 1,
    borderColor: "#8F8F8F",
    borderRadius: 4,
    paddingLeft: 20,
  },
  shadowContainer: {
    backgroundColor: "#E5E5E5",
    paddingBottom: 3,
  },
  shadowItem: {
    backgroundColor: "#FFF",
  },
});

export default Search;
