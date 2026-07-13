import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlatlistScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segunda pantalla</Text>
      <Text style={styles.description}>
        Esta pantalla demuestra la navegación entre dos vistas.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={styles.buttonText}>Volver a Pantalla 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default FlatlistScreen;
