import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, firestore } from "../../../ConfigFirebase/firebase";

export default function EPPBGM_Admin() {
  const navigation = useNavigation();
  const [dataKader, setDataKader] = useState([]);
  const [alamatPosyandu, setAlamatPosyandu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const usersRef = collection(firestore, "Admin");
          const q = query(usersRef, where("email", "==", currentUser.email));

          const querySnapshot = await getDocs(q);
          const userDoc = querySnapshot.docs[0];
          const alamatPosyandu = userDoc?.data()?.alamatPosyandu;

          const kaderRef = collection(firestore, "EPPGBM");
          const kaderQ = query(
            kaderRef,
            where("alamatPosyandu", "==", alamatPosyandu)
          );

          const kaderSnapshot = await getDocs(kaderQ);
          const kaderData = kaderSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDataKader(kaderData);
        }
      } catch (error) {
        console.log("Terjadi kesalahan saat mengambil data kader:", error);
      }
    };

    fetchData();
  }, []);

  const handleItemPress = (id) => {
    navigation.navigate("EPPGBM_Admin_Detail", { id });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#03a9f4",
          alignSelf: "stretch",
          borderBottomWidth: 0.5,
          borderBottomColor: "black",
          zIndex: 1,
          marginBottom: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TabHomeAdmin")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{ marginLeft: -147 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          EPPGBM
        </Text>
      </View>

      <ScrollView>
        {/* Render existing data kader or show message if data is empty */}
        {dataKader.length === 0 ? (
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={{ fontSize: 20 }}>Belum ada data tersedia.</Text>
          </View>
        ) : (
          dataKader.map((kader, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemPress(kader.id)} // Tambahkan onPress dan berikan fungsi handleDataKaderPress
              style={{ flex: 1 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  height: 100,
                  alignItems: "center",
                  marginVertical: 15,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  elevation: 2,
                  marginTop: 10,
                  bottom: 15,
                }}
              >
                <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                  <Icon name="user-circle" size={50} color="#000000" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text> Nama Anak : {kader.namaBayi}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginLeft: 3 }}>
                      Alamat : {kader.alamat}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}

        {/* Button to add new data kader */}
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#03a9f4",
            left: 300,
          }}
          onPress={() => navigation.navigate("EPPGBM_Admin1")}
        >
          <Icon name="plus-circle" size={50} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
