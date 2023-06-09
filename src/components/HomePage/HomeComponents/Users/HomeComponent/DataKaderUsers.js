import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { firestore, auth } from "../../../../ConfigFirebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function DataKaderUser() {
  const navigation = useNavigation();
  const [kaderData, setKaderData] = useState([]);
  const [userAlamatPosyandu, setUserAlamatPosyandu] = useState("");

  useEffect(() => {
    const fetchKaderData = async () => {
      try {
        const dataKaderRef = collection(firestore, "DataKader");
        const snapshot = await getDocs(dataKaderRef);
        const kaderList = snapshot.docs.map((doc) => doc.data());
        setKaderData(kaderList);
      } catch (error) {
        console.log("Error fetching kader data: ", error);
      }
    };

    fetchKaderData();
  }, []);

  useEffect(() => {
    const fetchUserAlamatPosyandu = async () => {
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
              const alamatPosyandu = doc.data().alamatPosyandu;
              setUserAlamatPosyandu(alamatPosyandu);
            });
          } else {
            console.log("Data pengguna tidak ditemukan");
          }
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchUserAlamatPosyandu();
  }, []);

  // Filter data Kader dengan alamatPosyandu yang sesuai dengan userAlamatPosyandu
  const filteredData = kaderData.filter(
    (kader) => kader.alamatPosyandu === userAlamatPosyandu
  );

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          padding: 10,
          backgroundColor: "#03a9f4",
          alignSelf: "stretch",
          borderBottomWidth: 1,
          borderBottomColor: "black",
          zIndex: 1,
          marginBottom: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{ marginLeft: -135 }}
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
          Data Kader
        </Text>
      </View>

      {filteredData.length > 0 ? (
        filteredData.map((kader, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              width: "100%",
              height: 100,
              alignItems: "center",
              marginVertical: 15,
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
              elevation: 6,
              bottom: 40,
            }}
          >
            <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
              <Icon name="user-circle" size={50} color="#000000" />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", left: 5 }}>
                {kader.NamaKader}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Text style={{}}>{kader.PosisiKader}</Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text>Data kader tidak ditemukan</Text>
      )}
    </View>
  );
}
