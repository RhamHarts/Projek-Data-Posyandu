import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import {
  firestore,
  collection,
  getDocs,
} from "../../../../ConfigFirebase/firebase";
import { query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AccountInfoScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [noHP, setnoHP] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const fetchData = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        try {
          const usersRef = collection(firestore, "users");
          const q = query(usersRef, where("email", "==", userAuth.email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const currentUserData = doc.data();

              const { username } = currentUserData;
              setUsername(username);

              const { email } = currentUserData;
              setEmail(email);

              const { alamat } = currentUserData;
              setAlamat(alamat);

              const { noHP } = currentUserData;
              setnoHP(noHP);
            });
          } else {
            console.log("Data pengguna tidak ditemukan");
            setIsLoading(false);
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    });

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{ marginLeft: -125 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Informasi Akun
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, styles.labelWidth]}>Nama:</Text>
        <Text style={styles.value}>{username}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, styles.labelWidth]}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, styles.labelWidth]}>Alamat:</Text>
        <Text style={styles.value}>{alamat}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.label, styles.labelWidth]}>No.HP:</Text>
        <Text style={styles.value}>{noHP}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 24,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    width: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 0,
  },
  labelWidth: {
    width: 70,
  },
  value: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
});

export default AccountInfoScreen;
