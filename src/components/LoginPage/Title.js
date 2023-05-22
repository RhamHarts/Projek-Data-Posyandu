import React from "react";
import { View, Text } from "react-native";
const Title = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#373248",
          textAlign: "center",
        }}
      >
        Amonis
      </Text>
      <Text style={{ textAlign: "center" }}>
        Aplikasi Monitoring Data Imunisasi
      </Text>
    </View>
  );
};

export default Title;
