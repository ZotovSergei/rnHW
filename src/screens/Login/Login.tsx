import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  Animated,
  Easing,
} from 'react-native';
import {Colors, Screens} from '../../utils/constants';
import NextArrow from '../../public/icons/nextArrow.svg';
import {getToken} from '../../store/asyncActions/auth';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScreensNavigationProp} from '../../utils/typings';
import CustomInput from '../../components/CustonInput';
import FireWork from '../../components/FireWork';

const linkText = 'New here? Sign Up';
const forgetPasswordText = 'Forgot Password?';
const title = 'Ecommerce Store';
const signInText = 'SIGN IN';
const skipLoginText = 'SKIP LOGIN';
const url = 'https://localhost:80';
const loginError = 'Login failed!';
const fadeAnim = new Animated.Value(0);

const size = fadeAnim.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 40],
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreensNavigationProp<Screens.Root>>();

  const goToHome = () => {
    navigation.navigate(Screens.Root);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };
  const handleSignIn = async () => {
    // TODO: Need to add type for state
    const authToken = await dispatch(
      getToken({
        password: password,
        username: email,
      })
    );

    if (authToken.error || authToken.error === null) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.cubic,
          useNativeDriver: false,
        }).start();
      });
    }
    if (authToken.access_token) {
      goToHome();
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <FireWork />
        <CustomInput
          label={'Email Address'}
          value={email}
          onChangeText={handleEmail}
          placeholder={'Text'}
        />
        <CustomInput
          label={'Password'}
          value={password}
          onChangeText={handlePassword}
          placeholder="Text"
          secureTextEntry={true}
        />
        <Text style={styles.passwordLink} onPress={() => Linking.openURL(url)}>
          {forgetPasswordText}
        </Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn()}>
            <Text style={styles.buttonText}>{signInText}</Text>
          </TouchableOpacity>

          <Animated.View style={[{opacity: fadeAnim}, styles.errorContainer]}>
            <Text>{loginError}</Text>
          </Animated.View>
        </View>
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
  errorContainer: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: Colors.Whisper,
    bottom: 0,
    borderRadius: 20,
    width: 140,
    padding: 4,
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
    width: 220,
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
