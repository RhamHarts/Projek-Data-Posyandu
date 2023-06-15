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
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, firestore } from "../../../ConfigFirebase/firebase";
import { useNavigation } from "@react-navigation/native";

const DataKaderAdmin = () => {
  const navigation = useNavigation();
  const [dataKader, setDataKader] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newKaderName, setNewKaderName] = useState("");
  const [newKaderPosition, setNewKaderPosition] = useState("");

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

          const kaderRef = collection(firestore, "DataKader");
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

  const handleTambahDataKader = async () => {
    if (!newKaderName || !newKaderPosition) {
      Alert.alert("Error", "Silahkan isi data terlebih dahulu");
      return;
    }

    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const usersRef = collection(firestore, "Admin");
        const q = query(usersRef, where("email", "==", currentUser.email));

        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        const alamatPosyandu = userDoc?.data()?.alamatPosyandu;
        const email = userDoc?.data()?.email;

        const newDataKader = {
          NamaKader: newKaderName,
          PosisiKader: newKaderPosition,
          alamatPosyandu: alamatPosyandu,
          email: email,
        };

        await addDoc(collection(firestore, "DataKader"), newDataKader);

        setDataKader([...dataKader, newDataKader]);

        setIsModalVisible(false);
        clearInputFields();
        console.log("Data kader berhasil disimpan ke Firestore!");
      }
    } catch (error) {
      console.log("Terjadi kesalahan saat menyimpan data kader:", error);
    }
  };

  const handleDeleteDataKader = async (id) => {
    try {
      await deleteDoc(doc(firestore, "DataKader", id));

      const updatedDataKader = dataKader.filter((kader) => kader.id !== id);
      setDataKader(updatedDataKader);

      console.log("Data kader berhasil dihapus dari Firestore!");
    } catch (error) {
      console.log("Terjadi kesalahan saat menghapus data kader:", error);
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
        <TouchableOpacity onPress={() => navigation.navigate("TabHomeAdmin")}>
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

      <ScrollView>
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
                  {kader.NamaKader}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginLeft: 5 }}>{kader.PosisiKader}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleDeleteDataKader(kader.id)}
                style={{
                  marginHorizontal: 10,
                  padding: 5,
                }}
              >
                <Icon name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))
        )}

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
