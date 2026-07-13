import React from "react";
import { Text, View } from "react-native";
import { stylesCard } from "../styles/styles";

const CardInfo = ({ name, age }) => {
  return (
    <View style={stylesCard.card}>
      <Text style={stylesCard.title}>Información</Text>
      <Text style={stylesCard.text}>Nombre: {name}</Text>
      <Text style={stylesCard.text}>Edad: {age}</Text>
    </View>
  );
};

export default CardInfo;
