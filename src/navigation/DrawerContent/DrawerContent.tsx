import React from 'react';
import {SectionList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Screens} from '../../utils/constants';
import Separator from '../../components/Separator';
import MyProfile from '../../public/icons/myProfile.svg';
import MyCart from '../../public/icons/myCart.svg';
import MyWishList from '../../public/icons/myWishList.svg';
import MyOrder from '../../public/icons/myCart.svg';
import Email from '../../public/icons/email.svg';
import Call from '../../public/icons/call.svg';
import Share from '../../public/icons/share.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const myAccountSection = {
  title: 'My Account',
  data: [
    {icon: <MyProfile />, text: 'My Profile', screen: Screens.Profile},
    {icon: <MyWishList />, text: 'My Wish List', screen: Screens.WishList},
    {icon: <MyCart />, text: 'My Cart', screen: Screens.Cart},
    {icon: <MyOrder />, text: 'My Orders', screen: Screens.Orders},
  ],
};

const supportSection = {
  title: 'Support',
  data: [
    {icon: <Email />, text: 'Email', screen: Screens.Profile},
    {icon: <Call />, text: 'Call', screen: Screens.Profile},
  ],
};

const shareSection = {
  title: null,
  data: [{icon: <Share />, text: 'Share', screen: Screens.Profile}],
};

const DrawerContent = () => {
  const navigation = useNavigation();
  const accessToken = useSelector((state) => state.authReducer.access_token);
  return (
    <>
      <Text style={styles.title}>Ecommerce Store</Text>
      <SectionList
        sections={[myAccountSection, supportSection, shareSection]}
        renderItem={({item: {icon, screen, text}}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate(screen, {
                accessToken,
              })
            }>
            {icon}
            <Text style={styles.item}>{text}</Text>
          </TouchableOpacity>
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
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 50,
    color: Colors.PacificBlue,
    paddingLeft: 20,
    marginBottom: 73,
  },
  subtitle: {
    fontWeight: '700',
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
    flexDirection: 'row',
    marginLeft: 24,
  },
});
export default DrawerContent;
