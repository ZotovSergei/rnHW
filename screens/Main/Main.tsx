import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../../modules/Header";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout/Layout";

const Main = () => {
  return (
    <SafeAreaView>
      <>
        <Header title={"Ecommerce Store"} />
        <Layout>
          <Search />
          <Cards />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default Main;
