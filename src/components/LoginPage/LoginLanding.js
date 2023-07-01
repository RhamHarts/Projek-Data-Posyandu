import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "./Components/Header";
import Title from "./Components/Title";
import LoginRegisterButton from "./Components/LoginRegisterButton";

const LoginLanding = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // const checkLoginStatus = async () => {
  //   try {
  //     const loggedIn = await AsyncStorage.getItem("loggedIn");

  //     if (loggedIn) {
  //       // Pengguna sudah login sebelumnya, arahkan ke halaman beranda yang sesuai
  //       // Ganti dengan navigasi yang sesuai di aplikasi Anda
  //       navigation.replace("TabHomeAdmin");
  //     }
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <Header />
        <Title />
        <LoginRegisterButton />
      </View>
    </ScrollView>
  );
};

export default LoginLanding;
