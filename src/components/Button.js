import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {COLOR_PRINCIPAL_1} from '../utils/colors';
export default function Button({
  colorButton = COLOR_PRINCIPAL_1,
  colorText = '#fff',
  text,
  onPress,
  style,
  isLoading,
  disabled = false,
}) {
  function onPressHandler() {
    onPress();
  }

  return (
    <TouchableWithoutFeedback onPress={onPressHandler} disabled={disabled}>
      <View
        style={{
          ...styles.container,
          backgroundColor: disabled ? '#ccc' : colorButton,
          ...style,
        }}>
        {isLoading ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <Text style={{...styles.text, color: colorText}}>{text}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '65%',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
  },
});
