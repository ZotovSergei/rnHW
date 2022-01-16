import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/constants';

const subtitle =
  'Enter your email id and we will send you an amail to change the password';
const title = 'Ecomerce Store';
const submitText = 'SUBMIT';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Text"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{submitText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subtitle: {
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  subtitleText: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.Charcoal,
    textAlign: 'center',
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
    marginTop: 70,
    marginBottom: 105,
    width: 200,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ForgotPassword;
