import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../modules/Header";
import Carousel from "../../modules/Carousel";
import store from "../../store/store";
import Prices from "../../components/Prices";
import Layout from "../../components/Layout/Layout";
import Separator from "../../components/Separator";
import SelectColor from "../../modules/SelectColor";
import Subtitle from "../../components/Subtitle";

const mockData = store[0];

const ProductDetails = () => {
  const {discountPrice, price, sale, image, title, colors, description} =
    mockData;
  return (
    <View>
      <Header hasBackButton hasFavoriteButton />
      <ScrollView>
        <Layout>
          <Carousel image={image} />
          <Prices
            discountPrice={discountPrice}
            price={price}
            sale={sale}
            title={title}
          />
          <Separator />
          <SelectColor colors={colors} />
          <Separator />
          <View>
            <Subtitle text={"Description"} />
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.buttonAddToCard}>
              <Text style={styles.textAddToCard}>
                {"Add to Cart".toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </Layout>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    lineHeight: 20,
  },
  buttonAddToCard: {
    backgroundColor: "#008ACE",
    width: "100%",
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  textAddToCard: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 16,
    letterSpacing: 1.25,
  },
});

export default ProductDetails;
