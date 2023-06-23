import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome5";

import SignInHeader from "./Components/SignInHeader";
import { auth, firestore } from "./../ConfigFirebase/firebase";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");
  const [noHP, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");
  const [alamatPosyandu, setAlamatPosyandu] = useState("");
  const [filteredAlamatPosyanduOptions, setFilteredAlamatPosyanduOptions] =
    useState([]);
  const [showAlamatPosyanduOptions, setShowAlamatPosyanduOptions] =
    useState(false);
  const [selectedAlamatPosyandu, setSelectedAlamatPosyandu] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const navigation = useNavigation();

  const alamatPosyanduOptions = ["Ciapus", "Dramaga"];
  const handleSignUp = async () => {
    try {
      if (password !== ulangiPassword) {
        alert("Ulangi password tidak sesuai dengan password");
        return;
      }

      // Create the user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alert("Anda berhasil daftar");

      // Kirim email verifikasi
      await sendEmailVerification(user);

      // Mengambil UID pengguna
      const uid = user.uid;

      // Simpan data pengguna ke koleksi "users" di Firestore
      const userData = {
        email,
        noHP,
        alamat,
        username,
        role: "users", // Tambahkan properti "role" dengan nilai "user"
        user_id: uid,
        alamatPosyandu: selectedAlamatPosyandu, // Gunakan nilai yang dipilih
      };

      await addDoc(collection(firestore, "users"), userData);
      navigation.navigate("SignIn");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNoHPChange = (text) => {
    // Menghapus spasi dan karakter non-angka dari input nomor handphone
    const cleanedText = text.replace(/\D/g, "");

    // Pastikan angka "08" di awal nomor handphone
    let updatedNoHP = cleanedText;
    if (!updatedNoHP.startsWith("08")) {
      updatedNoHP = "08" + updatedNoHP;
    }
    setNoHP(updatedNoHP);
  };

  const handleSelectAlamatPosyandu = (option) => {
    setSelectedAlamatPosyandu(option);
    setAlamatPosyandu(option);
    setShowAlamatPosyanduOptions(false);
  };

  const renderAlamatPosyanduOptionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectAlamatPosyandu(item)}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
      >
        {selectedAlamatPosyandu === item && (
          <Icon
            name="check"
            color="green"
            size={20}
            style={{ marginRight: 10 }}
          />
        )}
        <Text style={{ paddingVertical: 10 }}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd", marginTop: -100 }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", top: 100 }}
        >
          <Image
            source={require("../../images/3.png")}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </View>
        <SignInHeader
          title="Registrasi"
          description="Silakan Masukkan Data Diri Anda"
        />

        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
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
          placeholder="Masukkan Username Anda"
        />

        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
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
          placeholder="Masukkan Email Anda"
        />
        <View
          style={{
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
          }}
        >
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
              borderRadius: 9,
              paddingLeft: 0,
              color: "grey",
              padding: 15,
              borderColor: "grey",
            }}
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
        <View
          style={{
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
          }}
        >
          <TextInput
            value={ulangiPassword}
            onChangeText={(text) => setUlangiPassword(text)}
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
              borderRadius: 9,
              paddingLeft: 0,
              color: "grey",
              padding: 15,
              borderColor: "grey",
            }}
            placeholder="Masukkan Ulang Password Anda"
            secureTextEntry={!showPassword1}
          />
          <TouchableOpacity
            style={{ padding: 10, marginTop: 10 }}
            onPress={() => setShowPassword1(!showPassword1)}
          >
            <Icon
              name={showPassword1 ? "eye-slash" : "eye"}
              color="grey"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TextInput
          value={noHP}
          keyboardType="numeric"
          onChangeText={handleNoHPChange} // Menggunakan fungsi handleNoHPChange
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
          placeholder="Masukkan Nomor Handphone Anda"
        />
        <TextInput
          value={alamat}
          onChangeText={(text) => setAlamat(text)}
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
          placeholder="Masukkan Alamat Anda"
        />

        <TextInput
          value={alamatPosyandu}
          onChangeText={(text) => setAlamatPosyandu(text)}
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
          placeholder="Masukkan Alamat Posyandu Anda"
          onFocus={() => setShowAlamatPosyanduOptions(true)}
        />

        <View style={{ maxHeight: 200, marginTop: 5 }}>
          {showAlamatPosyanduOptions && (
            <FlatList
              data={alamatPosyanduOptions}
              renderItem={renderAlamatPosyanduOptionItem}
              keyExtractor={(item) => item}
            />
          )}
        </View>

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
          onPress={handleSignUp}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Registrasi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20, marginRight: 20, marginBottom: 20 }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Sudah Punya Akun?{" "}
            <Text style={{ color: "#03a9f4" }}>Login Disini</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
