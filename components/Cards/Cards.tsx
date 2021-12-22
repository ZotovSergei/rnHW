import React, {useEffect, useState} from "react";
import Card from "../Card";
import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";
import {Products} from "../../utils/typings";
import {getProducts} from "../../utils/fetchData";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Products[]>([]);

  const fetchMyAPI = async () => {
    const response = await getProducts();
    setData([...data, ...response]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const renderItem: ListRenderItem<Products> = ({item}) => {
    const {
      id,
      attributes: {name, display_price, price, image},
    } = item;
    return (
      <Card
        id={id}
        image={image}
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
          onEndReached={fetchMyAPI}
          onEndReachedThreshold={0.5}
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
