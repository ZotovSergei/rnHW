import React, {useEffect, useState} from 'react';
import Card from '../Card';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';

import {Products} from '../../utils/typings';
import {getProducts} from '../../utils/fetchData';

const Cards = () => {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState<Products[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchMyAPI = async (reload: boolean = false) => {
    const response = await getProducts(reload);
    setData([...data, ...response]);
    setLoading(false);
  };

  const onRefresh = React.useCallback(() => {
    setData([]);
    setRefreshing(true);
    fetchMyAPI(true).then(() => setRefreshing(false));
    //TODO: FIXED IT
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMyAPI();
    //TODO: FIXED IT
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <FlatList
          columnWrapperStyle={styles.container}
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorElement} />
          )}
          ListHeaderComponent={() => <View style={styles.separatorElement} />}
          onEndReached={() => fetchMyAPI()}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  separatorElement: {
    height: 20,
  },
});
export default Cards;
