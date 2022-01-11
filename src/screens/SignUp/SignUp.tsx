import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {Colors} from '../../utils/constants';

const linkText = 'Already have account? Sign In';
const title = 'Ecomerce Store';
const signUpText = 'SIGN UP';
const url = 'https://localhost:80';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={setFullName}
        value={fullName}
        placeholder="Text"
      />
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
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Text"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{signUpText}</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        {linkText}
      </Text>
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
    borderradius: 4,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 16,
  },
  title: {
    fontSize: 40,
    lineHeight: 50,
    color: Colors.PacificBlue,
    textAlign: 'center',
    marginBottom: 63,
    width: 200,
    fontWeight: 'bold',
  },
});
export default SignUp;
