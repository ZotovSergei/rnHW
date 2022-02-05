import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Screens} from '../../utils/constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreensNavigationProp, ScreensRouteProp} from '../../utils/typings';
import ModalErrorIcon from '../../public/icons/modal_error.svg';
import ModalWarningIcon from '../../public/icons/modal_warning.svg';
import ModalSuccessIcon from '../../public/icons/modal_success.svg';

const LOGIN = 'Login';
const SIGN_UP = 'Sign Up';

const ModalScreen = () => {
  const navigation =
    useNavigation<ScreensNavigationProp<Screens.Login & Screens.SignUp>>();
  const route = useRoute<ScreensRouteProp<Screens.ModalScreen>>();
  const {title, type, subtitle} = route.params ?? {};
  const [Image, setImage] = useState<JSX.Element>(<ModalErrorIcon />);

  useEffect(() => {
    if (type === 'warning') {
      setImage(<ModalWarningIcon />);
    } else if (type === 'success') {
      setImage(<ModalSuccessIcon />);
    }
  }, [type]);

  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        {Image}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleWrapper}>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        {type === 'warning' ? (
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(Screens.Login)}>
              <Text style={styles.buttonText}>{LOGIN}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(Screens.SignUp)}>
              <Text style={styles.buttonText}>{SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Whisper,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitleWrapper: {
    width: 190,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalView: {
    maxHeight: 275,
    minHeight: 225,
    minWidth: 325,
    backgroundColor: Colors.White,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: Colors.PacificBlue,
    width: 125,
    height: 40,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.White,
    fontSize: 15,
    lineHeight: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  wrapperButton: {
    width: 270,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default ModalScreen;
