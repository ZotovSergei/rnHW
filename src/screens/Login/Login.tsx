import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Colors, Screens} from '../../utils/constants';
import NextArrow from '../../public/icons/nextArrow.svg';
import {getToken} from '../../store/asycnActions/auth';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScreensNavigationProp} from '../../utils/typings';

const linkText = 'New here? Sign Up';
const forgetPasswordText = 'Forgot Password?';
const title = 'Ecomerce Store';
const signInText = 'SIGN IN';
const skipLoginText = 'SKIP LOGIN';
const url = 'https://localhost:80';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreensNavigationProp<Screens.Root>>();
  // TODO: Need to add type for state
  const goToHome = () => {
    navigation.navigate(Screens.Root);
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Text"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Text"
          secureTextEntry={true}
        />
        <Text style={styles.passwordLink} onPress={() => Linking.openURL(url)}>
          {forgetPasswordText}
        </Text>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => dispatch({type: 'NONE',payload: 'NONE'})}>
          onPress={() => {
            dispatch(getToken(password, email, goToHome));
          }}>
          <Text style={styles.buttonText}>{signInText}</Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress={() => Linking.openURL(url)}>
          {linkText}
        </Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonSignUp]}
          onPress={goToHome}>
          <Text style={styles.buttonText}>{skipLoginText}</Text>
          <NextArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.DeepSkyBlue,
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    width: 335,
    borderRadius: 4,
    marginBottom: 20,
    borderColor: Colors.SuvaGrey,
    paddingLeft: 10,
  },
  button: {
    width: 335,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: Colors.PacificBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 16,
    marginRight: 14,
  },
  title: {
    fontSize: 40,
    lineHeight: 50,
    color: Colors.PacificBlue,
    textAlign: 'center',
    marginBottom: 63,
    marginTop: 70,
    width: 200,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  passwordLink: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.DeepSkyBlue,
    alignSelf: 'flex-start',
    marginBottom: 35,
  },
  buttonSignUp: {
    marginTop: 92,
    backgroundColor: Colors.SuvaGrey,
    flexDirection: 'row',
  },
});
export default Login;
