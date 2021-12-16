import React, {FC} from 'react';
import {Store} from "../../store/store";
import {Image, StyleSheet, Text, View} from "react-native";


const Card: FC<Store> = ({id, image, title, price, discountPrice, sale}) => {

    return (
        <View style={styles.container} key={id}>
            <View style={styles.item}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: image,
                    }}
                    resizeMode='contain'
                />
                <Text style={[styles.title]}>{title}</Text>
                <View style={styles.sales}>
                    <Text style={[styles.discountPrice, styles.commonText]}>${discountPrice}</Text>
                    <Text style={[styles.price, styles.commonText]}>${price}</Text>
                    {sale &&
                    <Text style={[styles.sale, styles.commonText]}>{sale}% Off</Text>
                    }
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '47%',
        borderRadius: 5,
        backgroundColor: '#E5E5E5',
        // TODO: Change to shadow
        paddingBottom: 4,
        paddingLeft: 1,
        paddingRight: 1,

    },
    // TODO: Change to shadow
    item: {
        borderRadius: 5,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    tinyLogo: {
        marginTop: 5,
        width: 100,
        height: 110,
        flex: 1,
        alignSelf: "center"
    },
    title: {
        fontSize: 15,
        lineHeight: 20,
        paddingLeft: 5
    },
    commonText: {
        fontWeight: '700',
        fontSize: 15,
        marginRight: 10
    },
    discountPrice: {
        color: '#000'
    },
    price: {
        color: '#8F8F8F'
    },
    sale: {
        color: '#00A8F3'
    },
    sales: {
        marginTop: 10,
        paddingLeft: 5,
        flexDirection: "row",
        flex: 1,
    }
})
export default Card;