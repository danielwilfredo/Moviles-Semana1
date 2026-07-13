import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CardInfo from "../components/CardInfo";
import InputText from "../components/InputText";

const InfoScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [info, setInfo] = useState({ nombre: "", edad: "" });

  const handleEnviar = () => {
    setInfo({ nombre, edad });
    setEnviado(true);
  };

  return (
    <View style={styles.container}>
      <InputText
        label="Ingrese su nombre:"
        placeholder="Su nombre"
        value={nombre}
        labelStyle={styles.label}
        inputStyle={styles.input}
        onChangeText={(text) => {
          setNombre(text);
          setEnviado(false);
        }}
      />

      <InputText
        label="Ingrese su edad:"
        placeholder="Su edad"
        value={edad}
        labelStyle={styles.label}
        inputStyle={styles.input}
        onChangeText={(text) => {
          setEdad(text);
          setEnviado(false);
        }}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Lista")}
      >
        <Text style={styles.buttonText}>Ir a Pantalla 2</Text>
      </TouchableOpacity>

      {enviado && <CardInfo nombre={info.nombre} edad={info.edad} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: "#1d4ed8",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cardInfo: {
    marginTop: 8,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    marginBottom: 4,
  },
});

export default InfoScreen;
