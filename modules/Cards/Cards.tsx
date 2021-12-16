import React from 'react';
import Card from "../Card";
import store, {Store} from "../../store/store";
import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";


const Cards = () => {
    const renderItem: ListRenderItem<Store> = ({item}) => {
        const {id,image,title,price,discountPrice,sale} = item;
        return <Card
            id={id}
            image={image}
            title={title}
            price={price}
            discountPrice={discountPrice}
            sale={sale}
        />
    }
    return (
        <View>
            <FlatList<Store>
                columnWrapperStyle={styles.container}
                numColumns={2}
                data={store}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=><View style={{height: 20}}/>}
                ListHeaderComponent={()=><View style={{height: 20}}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: "space-between",
        flex: 1,
    }
})
export default Cards;