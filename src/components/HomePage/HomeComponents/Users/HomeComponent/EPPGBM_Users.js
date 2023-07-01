import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../../../ConfigFirebase/firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const EPPGBM_Users = () => {
  const [searchText, setSearchText] = useState("");
  const [tableForm, setTableForm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [kkData, setKKData] = useState(null);

  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const eppgbmRef = collection(firestore, "EPPGBM");
      const q = query(eppgbmRef, where("nokk", "==", searchText));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();

        const tableFormData = data.TableForm; // Mengambil data TableForm dari dokumen
        setKKData(data);
        setTableForm(tableFormData); // Menyimpan data TableForm ke state
        setModalVisible(true);
      } else {
        setTableForm(null); // Mengatur state TableForm menjadi null jika data tidak ditemukan
        Alert.alert("Nomor KK tidak ditemukan");
      }
    } catch (error) {
      Alert.alert("Terjadi kesalahan saat mencari Nomor KK:", error);
    }
  };

  const formatDate = (date) => {
    if (date && date.toDate) {
      // Mengonversi objek date menjadi string dengan format yang diinginkan
      const formattedDate = date
        .toDate()
        .toLocaleDateString("id-ID", { dateStyle: "long" });
      return formattedDate;
    }
    return "";
  };

  const renderTableForm = () => {
    if (tableForm) {
      return (
        <View style={styles.modalItem}>
          <Text style={styles.modalItemTitle}>Data Tinggi dan Berat Badan</Text>
          {tableForm.map((item, index) => (
            <View key={index} style={styles.modalItem}>
              {item.bulan && <Text>Bulan: {item.bulan}</Text>}
              {item.tinggiBadan && (
                <Text>Tinggi Badan: {item.tinggiBadan}</Text>
              )}
              {item.beratBadan && <Text>Berat Badan: {item.beratBadan}</Text>}
            </View>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.title}>EPPGBM</Text>
      </View>

      <Text style={styles.searchTitle}>Cari Nomor KK</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Masukkan Nomor KK Anda"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Cari" onPress={handleSearch} />
      <ScrollView>
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
                <Text style={styles.modalItem}>
                  Nama Bayi: {kkData.namaBayi}
                </Text>
                <Text style={styles.modalItem}>
                  Tanggal Lahir: {formatDate(kkData.tanggalLahir)}
                </Text>
                <Text style={styles.modalItem}>
                  Jenis Kelamin: {kkData.jenisKelamin}
                </Text>
                <Text style={styles.modalItem}>
                  Berat Badan Lahir: {kkData.BeratBadanLahir}
                </Text>
                <Text style={styles.modalItem}>
                  Orang Tua: {kkData.orangTua}
                </Text>
                <Text style={styles.modalItem}>NIK Ayah: {kkData.nikAyah}</Text>
                {renderTableForm()}
              </View>
            )}
            <Button
              style={{ marginTop: 100 }}
              title="Tutup"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Modal>
      </ScrollView>
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
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    zIndex: 1,
    flexDirection: "row",
  },
  backButton: {
    marginLeft: -147,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  searchTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 250,
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
    padding: 30,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
    color: "#03a9f4",
  },
  modalContent: {
    borderWidth: 0.6,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  modalItem: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 0,
  },
  modalItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
});

export default EPPGBM_Users;
