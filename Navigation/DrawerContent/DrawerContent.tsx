import React from "react";
import {SectionList, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../utils/constants";
import Separator from "../../components/Separator";
import MyProfile from "../../public/icons/myProfile.svg";
import MyCart from "../../public/icons/myCart.svg";
import MyWishList from "../../public/icons/myWishList.svg";
import MyOrder from "../../public/icons/myCart.svg";
import Email from "../../public/icons/email.svg";
import Call from "../../public/icons/call.svg";
import Share from "../../public/icons/share.svg";

const myAccountSection = {
  title: "My Account",
  data: [
    {icon: <MyProfile />, text: "My Profile"},
    {icon: <MyWishList />, text: "My Wish List"},
    {icon: <MyCart />, text: "My Cart"},
    {icon: <MyOrder />, text: "My Orders"},
  ],
};

const supportSection = {
  title: "Support",
  data: [
    {icon: <Email />, text: "Email"},
    {icon: <Call />, text: "Call"},
  ],
};

const shareSection = {
  title: "",
  data: [{icon: <Share />, text: "Share"}],
};

const DrawerContent = () => {
  return (
    <>
      <Text style={styles.title}>Ecommerce Store</Text>
      <SectionList
        sections={[myAccountSection, supportSection, shareSection]}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            {item.icon}
            <Text style={styles.item}>{item.text}</Text>
          </View>
        )}
        renderSectionHeader={({section}) =>
          section.title ? (
            <Text style={styles.subtitle}>{section.title}</Text>
          ) : null
        }
        renderSectionFooter={() => <Separator />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 50,
    color: Colors.PacificBlue,
    paddingLeft: 20,
    marginBottom: 73,
  },
  subtitle: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 25,
    color: Colors.SuvaGrey,
    paddingLeft: 20,
    marginBottom: 30,
  },
  item: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.Charcoal,
    marginLeft: 24,
    marginBottom: 25,
  },
  itemContainer: {
    flexDirection: "row",
    marginLeft: 24,
  },
});
export default DrawerContent;
