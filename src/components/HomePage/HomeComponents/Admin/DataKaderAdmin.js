import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { auth, firestore } from "../../../ConfigFirebase/firebase";

const DataKaderAdmin = () => {
  const [dataKader, setDataKader] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newKaderName, setNewKaderName] = useState("");
  const [newKaderPosition, setNewKaderPosition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "DataKader"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDataKader(data);
      } catch (error) {
        console.log("Terjadi kesalahan saat mengambil data kader:", error);
      }
    };
    fetchData();
  }, []);

  const handleTambahDataKader = async () => {
    if (!newKaderName || !newKaderPosition) {
      Alert.alert("Error", "Silahkan isi data terlebih dahulu");
      return;
    }

    const currentUser = auth.currentUser;
    if (currentUser) {
      const usersRef = collection(firestore, "Admin");
      const q = query(
        usersRef,
        where("email", "==", currentUser.email) // Menggunakan email sebagai kriteria pencarian
      );

      try {
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        const alamatPosyandu = userDoc?.data()?.AlamatPosyandu;
        const email = userDoc?.data()?.email;

        const newDataKader = {
          name: newKaderName,
          position: newKaderPosition,
          AlamatPosyandu: alamatPosyandu,
          email: email,
        };

        await addDoc(collection(firestore, "DataKader"), newDataKader);

        // Mengupdate state dataKader setelah data berhasil disimpan
        setDataKader([...dataKader, newDataKader]);

        setIsModalVisible(false);
        clearInputFields();
        console.log("Data kader berhasil disimpan ke Firestore!");
      } catch (error) {
        console.log("Terjadi kesalahan saat menyimpan data kader:", error);
      }
    }
  };

  const clearInputFields = () => {
    setNewKaderName("");
    setNewKaderPosition("");
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          padding: 10,
          backgroundColor: "#03a9f4",
          alignSelf: "stretch",
          borderBottomWidth: 1,
          borderBottomColor: "black",
        }}
      >
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

      <ScrollView>
        {/* Render existing data kader or show message if data is empty */}
        {dataKader.length === 0 ? (
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={{ fontSize: 20 }}>Belum ada data kader tersedia.</Text>
          </View>
        ) : (
          dataKader.map((kader) => (
            <View
              key={kader.id}
              style={{
                flexDirection: "row",
                width: "100%",
                height: 100,
                alignItems: "center",
                marginVertical: 15,
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                elevation: 6,
                bottom: 20,
              }}
            >
              <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                <Icon name="user-circle" size={50} color="#000000" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", left: 5 }}>
                  {kader.name}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginLeft: 5 }}>{kader.position}</Text>
                </View>
              </View>
            </View>
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
          onPress={handleModalOpen}
        >
          <Icon name="plus-circle" size={50} color="white" />
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for adding new data kader */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: 70,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              elevation: 2,
              marginTop: 40,
            }}
          >
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon
                name="arrow-left"
                size={25}
                color="#000000"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
            <Text style={{ marginRight: 50, fontSize: 17, fontWeight: "bold" }}>
              Tambah Data Kader
            </Text>
          </View>

          <View style={{ margin: 20 }}>
            <TextInput
              placeholder="Nama Kader"
              value={newKaderName}
              onChangeText={(value) => setNewKaderName(value)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                marginBottom: 10,
                paddingLeft: 10,
              }}
            />

            <TextInput
              placeholder="Posisi Kader"
              value={newKaderPosition}
              onChangeText={(value) => setNewKaderPosition(value)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                marginBottom: 10,
                paddingLeft: 10,
              }}
            />

            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "black",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleTambahDataKader}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                Tambah
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DataKaderAdmin;
