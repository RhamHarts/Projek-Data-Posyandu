import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SignInHeader from "../components/LoginPage/SignInHeader";
import { auth } from "../components/ConfigFirebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace("HomePage");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
      <View
        style={{ justifyContent: "center", alignItems: "center", top: 100 }}
      >
        <Image
          source={require("../images/3.png")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
      <SignInHeader title="Masuk" description="Masuk ke aplikasi Amonisasi" />

      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: "#FFFFFF",
          marginTop: 20,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
          color: "grey",
          padding: 15,
          borderColor: "grey",
        }}
        placeholder="Masukkan Email Anda"
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
        placeholder="Masukkan Password Anda"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{ marginTop: 20, marginRight: 20 }}
        onPress={() => navigation.navigate("LupaPassword")}
      >
        <Text style={{ textAlign: "right", fontWeight: "bold" }}>
          Lupa Password?
        </Text>
      </TouchableOpacity>

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
        onPress={handleLogin}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
          Masuk
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20, marginRight: 20 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Belum Daftar? <Text style={{ color: "#03a9f4" }}>Daftar Disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
