import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { auth, firestore, getDoc, doc } from "../../ConfigFirebase/firebase"; // Menggunakan 'getDoc' dari Firebase

const AccountInfoScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(firestore, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef); // Menggunakan 'getDoc' untuk mendapatkan dokumen
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUser(userData);
        }
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{ marginLeft: -115 }}
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
      {user ? (
        <>
          <View style={styles.infoContainer}>
            <Text style={[styles.label, styles.labelWidth]}>Nama:</Text>
            <Text style={styles.value}>{user.username}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.label, styles.labelWidth]}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.label, styles.labelWidth]}>Alamat:</Text>
            <Text style={styles.value}>{user.alamat}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.label, styles.labelWidth]}>No.HP:</Text>
            <Text style={styles.value}>{user.noHP}</Text>
          </View>
        </>
      ) : (
        <Text>Tidak ada data pengguna.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
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
  },
  labelWidth: {
    width: 70,
  },
  value: {
    flex: 1,
    fontSize: 16,
    marginLeft: 20,
  },
});

export default AccountInfoScreen;
