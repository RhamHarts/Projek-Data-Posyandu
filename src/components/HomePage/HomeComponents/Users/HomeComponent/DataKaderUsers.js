import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { firestore } from "../../../../ConfigFirebase/firebase";

export default function DataKaderUser() {
  const navigation = useNavigation();
  const [kaderData, setKaderData] = useState([]);

  useEffect(() => {
    const fetchKaderData = async () => {
      try {
        const snapshot = await firestore().collection("DataKader").get();
        const kaderList = snapshot.docs.map((doc) => doc.data());
        setKaderData(kaderList);
      } catch (error) {
        console.log("Error fetching kader data: ", error);
      }
    };

    fetchKaderData();
  }, []);

  // Filter data Kader dengan alamatPosyandu Dramaga
  const filteredData = kaderData.filter(
    (kader) => kader.alamatPosyandu === "Dramaga"
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

      {filteredData.map((kader, index) => (
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
            <Text style={{ fontWeight: "bold", left: 5 }}>{kader.nama}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", margin: 5 }}
            >
              <Text style={{}}>{kader.posisi}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
