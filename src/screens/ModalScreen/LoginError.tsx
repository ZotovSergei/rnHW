import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Screens} from '../../utils/constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreensNavigationProp, ScreensRouteProp} from '../../utils/typings';
import ModalWarningIcon from '../../public/icons/modal_warning.svg';
import {getToken} from '../../store/asyncActions/auth';
import {useDispatch} from 'react-redux';

const TRY_AGAIN = 'TRY AGAIN';
const CLOSE = 'CLOSE';

const LoginError = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<ScreensNavigationProp<Screens.Login & Screens.SignUp>>();
  const route = useRoute<ScreensRouteProp<Screens.ModalLoginError>>();
  const {title, credentials} = route.params ?? {};
  const goToHome = () => {
    navigation.navigate(Screens.Root);
  };

  const handleSignIn = async () => {
    await dispatch(
      getToken({
        password: credentials?.password,
        username: credentials?.username,
        transitionToHome: goToHome,
      })
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <ModalWarningIcon />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn()}>
            <Text style={styles.buttonText}>{TRY_AGAIN}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>{CLOSE}</Text>
          </TouchableOpacity>
        </View>
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
  titleWrapper: {
    width: 220,
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
    textAlign: 'center',
  },
  wrapperButton: {
    width: 270,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LoginError;
