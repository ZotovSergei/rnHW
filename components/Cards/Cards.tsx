import React, {useEffect, useState} from "react";
import Card from "../Card";
import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";
import {Products} from "../../utils/typings";

const url = "https://demo.spreecommerce.org";
const apiProducts = "/api/v2/storefront/products";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`${url}${apiProducts}`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderItem: ListRenderItem<Products> = ({item}) => {
    const {
      id,
      // links: {self},
      attributes: {name, display_price, price},
    } = item;
    return (
      <Card
        id={id}
        image={
          "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png"
        }
        title={name}
        price={display_price}
        discountPrice={price}
        sale={price}
      />
    );
  };

  return (
    <View>
      {!isLoading ? (
        <FlatList<Products>
          columnWrapperStyle={styles.container}
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          ListHeaderComponent={() => <View style={{height: 20}} />}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
});
export default Cards;
