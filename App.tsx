import React from 'react';
import {
    View,
} from 'react-native';
import Header from "./modules/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";

const App = () => {
    return (
        <View>
            <Header/>
            <Search/>
            <Cards/>
        </View>
    );
};

export default App;
