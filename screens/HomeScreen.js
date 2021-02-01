import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TargetPicker from "../components/TargetPicker";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#14274e",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 36,
          }}
        >
          Point & Translate
        </Text>
        <View>
          <Text>Please select your target language:</Text>
          <TargetPicker initialValue="es" style={{ width: "50%" }} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Camera")}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: "#14274e",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Tap For Camera
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
