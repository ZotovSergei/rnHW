import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import {Colors} from '../../utils/constants';

type Props = {
  label: string,
  placeholder?: string,
  value: string,
};

type CustopmProps = Props & TextInputProps;

const CustomInput: FC<CustopmProps> = ({
  label,
  placeholder,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const offsetTop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(offsetTop, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, offsetTop, value]);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelStyle: TextStyle = {
    position: 'absolute',
    left: 10,
    top: offsetTop.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -10],
    }),
    fontSize: offsetTop.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 12],
    }),
    paddingHorizontal: 4,
    backgroundColor: Colors.WhiteSmoke2,
    zIndex: 2,
  };

  return (
    <View>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder ?? ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 40,
    width: 335,
    borderRadius: 4,
    marginBottom: 20,
    borderColor: Colors.SuvaGrey,
    paddingLeft: 10,
  },
});
export default CustomInput;
