import React from "react";
import {View} from "react-native";
import Header from "../../modules/Header";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import store from "../../store/store";
import Layout from "../../components/Layout/Layout";

const Main = () => {
  return (
    <View>
      <Header title={"Ecommerce Store"} />
      <Layout>
        <Search />
        <Cards store={store} />
      </Layout>
    </View>
  );
};

export default Main;
