import { useState } from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Register = () => {
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");

  return (
    <View style={{ marginTop: 250 }}>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#373248",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Ubah Password{" "}
        </Text>
      </View>

      <TextInput
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: "#FFFFFF",
          marginTop: 10,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
          color: "grey",
          padding: 15,
          borderColor: "grey",
        }}
        placeholder="Masukkan Password Lama"
        secureTextEntry={true}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: "#FFFFFF",
          marginTop: 10,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
          color: "grey",
          padding: 15,
          borderColor: "grey",
        }}
        placeholder="Masukkan Password Baru"
        secureTextEntry={true}
      />
      <TextInput
        value={ulangiPassword}
        onChangeText={(text) => setUlangiPassword(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: "#FFFFFF",
          marginTop: 10,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
          color: "grey",
          padding: 15,
          borderColor: "grey",
        }}
        placeholder="Masukkan Ulang Password Baru Anda"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: "#03a9f4",
          paddingVertical: 15,
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 9,
          elevation: 2,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
          Ubah Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
