import React from "react";
import {View} from "react-native";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <View>
      <Search />
      <Layout>
        <Cards />
      </Layout>
    </View>
  );
};

export default Home;
