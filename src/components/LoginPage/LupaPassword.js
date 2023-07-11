import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { auth } from "./../ConfigFirebase/firebase";

import SignInHeader from "./Components/SignInHeader";

const LupaPassword = () => {
  const [email, setEmail] = useState("");
  const [resetPasswordError, setResetPasswordError] = useState("");
  const navigation = useNavigation();

  const handleResetPassword = () => {
    setResetPasswordError(""); // Menghapus pesan error sebelumnya

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        // Reset password email terkirim berhasil
        console.log("Email reset password terkirim.");
        Alert.alert("Password berhasil direset");
      })
      .catch((error) => {
        // Terjadi kesalahan saat mengirim email reset password
        console.error(
          "Terjadi kesalahan saat mengirim email reset password:",
          error
        );
        setResetPasswordError(
          "Terjadi kesalahan saat mengirim email reset password. Mohon coba lagi."
        );
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleImage}>
        <Image
          source={require("../../images/3.png")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
      <SignInHeader
        title="Lupa Password"
        description={
          "Masukkan email Anda untuk mendapatkan\ntutorial cara reset password"
        }
      />

      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        style={styles.textInputBox}
        placeholder="Masukkan Email Anda"
      />

      {resetPasswordError ? (
        <Text style={styles.errorText}>{resetPasswordError}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword} // Panggil fungsi handleResetPassword saat tombol ditekan
      >
        <Text style={styles.buttonText}>Lupa Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20, marginRight: 20 }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Sudah Daftar? <Text style={{ color: "#03a9f4" }}>Login Disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6fd" },
  titleImage: { justifyContent: "center", alignItems: "center", top: 50 },
  textInputBox: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    color: "grey",
    padding: 15,
    borderColor: "grey",
  },
  errorText: { color: "red", textAlign: "center", marginTop: 10 },
  button: {
    marginTop: 40,
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    elevation: 2,
  },
  buttonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
});
export default LupaPassword;
