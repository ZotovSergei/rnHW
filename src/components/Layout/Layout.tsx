import React, {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Colors} from '../../utils/constants';

const {height} = Dimensions.get('window');

const Layout: FC = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.White,
    height: height + 158,
    overflow: 'hidden',
  },
});
export default Layout;
