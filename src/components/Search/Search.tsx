import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../utils/constants';

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
    borderColor: Colors.SuvaGrey,
    borderRadius: 4,
    paddingLeft: 20,
  },
  shadowContainer: {
    backgroundColor: Colors.Whisper,
    paddingBottom: 3,
  },
  shadowItem: {
    backgroundColor: Colors.White,
  },
});

export default Search;
