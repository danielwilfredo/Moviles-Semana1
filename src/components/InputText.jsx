import React from "react";
import { Text, View, TextInput } from "react-native";

const InputText = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  containerStyle,
  labelStyle,
  inputStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputText;
