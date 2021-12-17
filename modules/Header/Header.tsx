import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Menu from "../../public/icons/menu.svg";
import Basket from "../../public/icons/basket.svg";


const Header = () => {
    return (
        <View style={styles.header}>
            <Menu/>
            <Text style={styles.title}>Ecommerce Store</Text>
            <Basket/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#008ACE',
        height: 55,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: "500"
    }
});

export default Header;
