import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../../../ConfigFirebase/firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const EPPGBM_Users = () => {
  const [searchText, setSearchText] = useState("");
  const [kkData, setKKData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const eppgbmRef = collection(firestore, "EPPGBM");
      const q = query(eppgbmRef, where("nokk", "==", searchText));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setKKData(data);
        setModalVisible(true);
      } else {
        setKKData(null);
        console.log("Nomor KK tidak ditemukan");
      }
    } catch (error) {
      console.log("Terjadi kesalahan saat mencari Nomor KK:", error);
    }
  };

  const handleNokkChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, "");
    setNokk(numericText);
  };
  return (
    <View style={styles.container}>
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
          bottom: 290,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
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

      <Text style={styles.title}>Cari Nomor KK</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleNokkChange}
        maxLength={15}
        placeholder="Masukkan Nomor KK Anda"
        value={searchText}
      />
      <Button title="Cari" onPress={handleSearch} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Informasi Data EPPGBM</Text>
          {kkData && (
            <View style={styles.modalContent}>
              <Text style={styles.modalItem}>No KK: {kkData.nokk}</Text>
              <Text style={styles.modalItem}>NIK Anak: {kkData.nikAnak}</Text>
              <Text style={styles.modalItem}>Anak Ke: {kkData.anakke}</Text>
              <Text style={styles.modalItem}>Nama Bayi: {kkData.namaBayi}</Text>
              <Text style={styles.modalItem}>
                Tanggal Lahir: {kkData.TanggalLahir}
              </Text>
              <Text style={styles.modalItem}>
                Jenis Kelamin: {kkData.jenisKelamin}
              </Text>
              <Text style={styles.modalItem}>
                Berat Badan Lahir: {kkData.BeratBadanLahir}
              </Text>
              <Text style={styles.modalItem}>Orang Tua: {kkData.orangTua}</Text>
              <Text style={styles.modalItem}>NIK Ayah: {kkData.nikAyah}</Text>
            </View>
          )}
          <Button title="Tutup" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#03a9f4",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 0.6,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#03a9f4",
  },
  modalContent: {
    width: "100%",
    borderWidth: 0.6,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
  modalItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default EPPGBM_Users;
