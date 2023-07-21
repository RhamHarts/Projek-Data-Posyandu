import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { auth, firestore } from "../../../ConfigFirebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Home = () => {
  const navigation = useNavigation();

  const [username, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const usersRef = collection(firestore, "users");
          const q = query(
            usersRef,
            where("email", "==", currentUser.email) // Menggunakan email sebagai kriteria pencarian
          );

          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const username = doc.data().username;
              setUserName(username);
            });
          } else {
            console.log("Data pengguna tidak ditemukan");
          }
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 70,
          alignItems: "center",
          marginVertical: 15,
          backgroundColor: "#FFFFFF",
          elevation: 1,
          marginTop: 0,
        }}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            marginRight: 30,
          }}
        >
          Home
        </Text>
      </View>
      {/* Content */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Halo, {username}</Text>
        <Text style={styles.subtitleText}>
          Apa yang bisa kami bantu hari ini?
        </Text>
      </View>

      {/* Menu */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("TumbuhKembangAnak")}
        >
          <Image
            source={require("../../../../images/bayi.png")}
            style={{
              width: 130,
              height: 130,
              marginTop: 0,
            }}
          />
          <Text style={{ fontSize: 14, bottom: 10 }}>Tumbuh Kembang Anak</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("DeteksiStunting")}
        >
          <Image
            source={require("../../../../images/stunting.png")}
            style={{
              width: 130,
              height: 130,
              marginTop: 0,
            }}
          />
          <Text style={{ fontSize: 16, bottom: 10 }}>Deteksi Gizi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("DataKaderUsers")}
        >
          <Image
            source={require("../../../../images/dokter.png")}
            style={{
              width: 200,
              height: 200,
              marginTop: 120,
            }}
          />
          <Text style={{ fontSize: 16, bottom: 105 }}>Data Kader</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("KebutuhanAnak")}
        >
          <Image
            source={require("../../../../images/gizi-anak.png")}
            style={{
              width: 200,
              height: 200,
              marginTop: 10,
            }}
          />
          <Text style={{ fontSize: 16, bottom: 50 }}>Kebutuhan Anak</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("EPPGBM_Users")}
        >
          <Image
            source={require("../../../../images/eppgbm.png")}
            style={{
              width: 150,
              height: 150,
              marginTop: 10,
            }}
          />
          <Text style={{ fontSize: 16, bottom: 25 }}>Pendataan Balita</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 0,
    padding: 10,
  },
  greetingContainer: {
    marginBottom: 16,
  },
  greetingText: {
    marginBottom: 3,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 16,
    color: "gray",
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuItem: {
    width: "48%",
    height: 135,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    elevation: 4,
  },
});

export default Home;
