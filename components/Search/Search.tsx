import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";


const Search = () => {
    return (
        <View>
            <TextInput
                style={styles.searchInput}
                inlineImageLeft='search'
                inlineImagePadding={20}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        margin: 20,
        // TODO: replace on shadow
        borderWidth: 1,
        borderColor: '#8F8F8F',
        borderRadius: 4,
        padding: 10,
    },
})

export default Search;