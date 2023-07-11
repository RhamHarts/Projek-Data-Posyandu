import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  StyleSheet,
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
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("TabHomeAdmin")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={styles.arrowBack}
          />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Data Kader</Text>
      </View>

      <ScrollView>
        {dataKader.length === 0 ? (
          <View style={styles.dataKosong}>
            <Text style={styles.textDataKosong}>
              Belum ada data kader tersedia.
            </Text>
          </View>
        ) : (
          dataKader.map((kader) => (
            <View key={kader.id} style={styles.kaderContainer}>
              <View style={styles.kaderContainer2}>
                <Icon name="user-circle" size={50} color="#000000" />
              </View>
              <View style={styles.namaKader}>
                <Text style={styles.textNamaKader}>{kader.NamaKader}</Text>
                <View style={styles.posisiKader}>
                  <Text style={styles.textposisiKader}>
                    {kader.PosisiKader}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleDeleteDataKader(kader.id)}
                style={styles.deleteDataKader}
              >
                <Icon name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))
        )}

        <TouchableOpacity style={styles.plusCircle} onPress={handleModalOpen}>
          <Icon name="plus-circle" size={50} color="white" />
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <View style={styles.tampilanModal}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon
                name="arrow-left"
                size={25}
                color="white"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
            <Text style={styles.titleModal}>Tambah Data Kader</Text>
          </View>

          <View style={{ margin: 20 }}>
            <TextInput
              placeholder="Nama Kader"
              value={newKaderName}
              onChangeText={(value) => setNewKaderName(value)}
              style={styles.inputBox}
            />

            <TextInput
              placeholder="Posisi Kader"
              value={newKaderPosition}
              onChangeText={(value) => setNewKaderPosition(value)}
              style={styles.inputBox}
            />

            <TouchableOpacity
              style={styles.buttonTambahDataKader}
              onPress={handleTambahDataKader}
            >
              <Text style={styles.textbuttonTambahDataKader}>Tambah</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
    zIndex: 1,
    marginBottom: 10,
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  kaderContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 6,
    bottom: 20,
  },
  arrowBack: { marginLeft: -135 },
  dataKosong: { alignItems: "center", marginTop: 50 },
  textDataKosong: { fontSize: 20 },
  kaderContainer2: { margin: 10, padding: 10, marginRight: 10 },
  namaKader: { flex: 1 },
  textNamaKader: { fontWeight: "bold", left: 5 },
  posisiKader: { flexDirection: "row", alignItems: "center" },
  textposisiKader: { marginLeft: 5 },
  deleteDataKader: {
    marginHorizontal: 10,
    padding: 5,
  },
  plusCircle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03a9f4",
    left: 300,
  },
  tampilanModal: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#03a9f4",
    elevation: 2,
    marginTop: 10,
  },
  titleModal: {
    marginRight: 110,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    marginBottom: 20,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  buttonTambahDataKader: {
    width: "100%",
    height: 50,
    backgroundColor: "#03a9f4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textbuttonTambahDataKader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DataKaderAdmin;
