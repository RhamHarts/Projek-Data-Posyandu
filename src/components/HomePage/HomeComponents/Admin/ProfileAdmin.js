import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  firestore,
  collection,
  getDocs,
  doc,
} from "../../../ConfigFirebase/firebase";
import { query, where, deleteDoc } from "firebase/firestore";

export default function ProfileAdmin() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        try {
          const usersRef = collection(firestore, "Admin");
          const q = query(usersRef, where("email", "==", userAuth.email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const currentUserData = doc.data();

              const { email } = currentUserData;
              setEmail(email);
              setIsLoading(false);
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

    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();

    try {
      const userDocRef = doc(firestore, "users", auth.currentUser.uid);

      // Hapus data pengguna yang sudah login sebelumnya
      await deleteDoc(userDocRef);

      // Logout pengguna
      await signOut(auth);
      navigation.replace("LoginLanding");
    } catch (error) {
      console.log("Error signing out:", error);
      alert(error.message);
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}> Profile </Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
          <Icon name="user-circle" size={50} color="#000000" />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", left: 5 }}>{email}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("PusatBantuan")}>
        <View style={styles.profileContentContainer}>
          <View style={styles.profileContent}>
            <Icon name="question-circle" size={20} color="#499ff5" />
          </View>
          <View>
            <Text style={styles.textProfileContent}>Pusat Bantuan</Text>
          </View>
          <View style={styles.iconProfileContent}>
            <Icon1 name="navigate-next" size={20} color="#499ff5" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TentangAplikasi")}>
        <View style={styles.profileContentContainer}>
          <View style={styles.profileContent}>
            <Icon name="info-circle" size={20} color="#499ff5" />
          </View>
          <View>
            <Text style={styles.textProfileContent}>Tentang Aplikasi</Text>
          </View>
          <View style={styles.iconProfileContent}>
            <Icon1 name="navigate-next" size={20} color="#499ff5" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    width: "100%",
    height: 70,
    marginVertical: 15,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    marginTop: 40,
  },
  titleText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 300,
  },
  profileContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 2,
    bottom: 40,
  },
  signOut: {
    marginTop: 100,
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    elevation: 2,
  },
  signOutText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
  profileContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    top: 40,
    paddingHorizontal: 10,
  },
  profileContent: { margin: 10, padding: 5, marginRight: 5 },
  textProfileContent: { fontWeight: "bold", color: "#499ff5", left: 10 },
  iconProfileContent: { flex: 1, alignItems: "flex-end" },
});
