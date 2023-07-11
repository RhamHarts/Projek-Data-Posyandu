import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SignInHeader from "./Components/SignInHeader";
import { auth } from "./../ConfigFirebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome5";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const firestore = getFirestore();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (role === "Admin") {
        const adminRef = collection(firestore, "Admin");
        const q = query(adminRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            console.log(
              "Anda login sebagai Admin dengan email:",
              doc.data().email
            );
          });
          navigation.replace("TabHomeAdmin");
        } else {
          console.log("Admin tidak terdaftar");
        }
      } else if (user.emailVerified) {
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            console.log(
              "Anda login sebagai Users dengan username:",
              doc.data().username
            );
          });
          navigation.replace("TabHome");
        } else {
          console.log("Users tidak terdaftar");
        }
      } else {
        Alert.alert(
          "Pengguna Tidak Terdaftar",
          "Silakan verifikasi alamat email Anda sebelum melakukan login.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    // Set role based on email input
    if (email.toLowerCase().includes("admin")) {
      setRole("Admin");
    } else {
      setRole("Users");
    }
  }, [email]);

  return (
    <View style={styles.container}>
      <View style={styles.imageTitle}>
        <Image
          source={require("../../images/3.png")}
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
        style={styles.textEmailInputBox}
        placeholder="Masukkan Email Anda"
      />
      <View style={styles.textPasswordInputBox}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textPasswordInputBox2}
          placeholder="Masukkan Password Anda"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={{ padding: 10, marginTop: 10 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? "eye-slash" : "eye"}
            color="grey"
            size={20}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ marginTop: 20, marginRight: 20 }}
        onPress={() => navigation.navigate("LupaPassword")}
      >
        <Text style={{ textAlign: "right", fontWeight: "bold" }}>
          Lupa Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk</Text>
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6fd" },
  imageTitle: { justifyContent: "center", alignItems: "center", top: 100 },
  textEmailInputBox: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    color: "grey",
    padding: 15,
    borderColor: "grey",
  },
  textPasswordInputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    paddingRight: 5,
    borderColor: "grey",
  },
  textPasswordInputBox2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    borderRadius: 9,
    paddingLeft: 0,
    color: "grey",
    padding: 15,
    borderColor: "grey",
  },
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
export default SignIn;
