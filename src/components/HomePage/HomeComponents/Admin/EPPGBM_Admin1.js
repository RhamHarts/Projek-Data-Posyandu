import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { firestore, auth } from "../../../ConfigFirebase/firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
import { format } from "date-fns";
import { id } from "date-fns/locale"; // Impor bahasa Indonesia dari paket date-fns

const EPPGBM_Admin1 = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState(null);
  const [nokk, setNokk] = useState("");
  const [nikAnak, setNikAnak] = useState("");
  const [anakke, setAnakke] = useState("");
  const [namaBayi, setNamaBayi] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState(new Date());
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [BeratBadanLahir, setBeratBadanLahir] = useState("");
  const [orangTua, setOrangTua] = useState("");
  const [nikAyah, setNikAyah] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [bulan, setBulan] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const initialData = Array.from({ length: 12 }, (_, index) => ({
      tinggiBadan: "",
      beratBadan: "",
      bulan: format(new Date(new Date().getFullYear(), index), "LLLL", {
        locale: id,
      }), // Format bulan dalam bahasa Indonesia
    }));
    setData(initialData);
  }, []);

  const handleSubmit = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const usersRef = collection(firestore, "Admin");
        const q = query(usersRef, where("email", "==", currentUser.email));

        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        const alamatPosyandu = userDoc?.data()?.alamatPosyandu;

        const newData = {
          nokk,
          nikAnak,
          anakke,
          namaBayi,
          tanggalLahir,
          jenisKelamin,
          BeratBadanLahir,
          orangTua,
          nikAyah,
          alamat,
          alamatPosyandu: alamatPosyandu,
          userId: currentUser?.uid,
          TableForm: data.map((item) => ({
            tinggiBadan: item.tinggiBadan,
            beratBadan: item.beratBadan,
            bulan: item.bulan,
          })),
        };

        if (userData) {
          // Jika data pengguna sudah ada, maka update data yang ada
          await setDoc(doc(firestore, "EPPGBM", userData.id), newData);
        } else {
          // Jika data pengguna belum ada, maka tambahkan data baru
          await addDoc(collection(firestore, "EPPGBM"), newData);
        }

        navigation.navigate("EPPGBM_Admin");
      }
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

  const handleDeleteRow = (index) => {
    const updatedData = [...data];
    updatedData[index] = {
      ...updatedData[index],
      tinggiBadan: "",
      beratBadan: "",
    };
    setData(updatedData);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleNokkChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, "");
    // Restrict the input to a maximum of 15 digits
    const truncatedText = numericText.slice(0, 15);
    setNokk(truncatedText);
  };

  const handleNikAnakChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, "");
    // Restrict the input to a maximum of 16 digits
    const truncatedText = numericText.slice(0, 16);
    setNikAnak(truncatedText);
  };

  const handleNikAyahChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, "");
    // Restrict the input to a maximum of 16 digits
    const truncatedText = numericText.slice(0, 16);
    setNikAyah(truncatedText);
  };

  const onChangeTanggalLahir = (event, selectedDate) => {
    const currentDate = selectedDate || tanggalLahir;
    setShowDatePicker(false);
    setTanggalLahir(currentDate);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate("EPPGBM_Admin")}>
            <Icon
              name="arrow-left"
              size={25}
              color="white"
              style={{ marginLeft: -147 }}
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>EPPGBM</Text>
        </View>

        <View style={styles.inputBox}>
          <Text> No KK </Text>
        </View>

        <TextInput
          value={nokk}
          keyboardType="numeric"
          onChangeText={handleNokkChange}
          maxLength={15}
          style={styles.textInputBox}
          placeholder="Masukkan No KK"
        />

        <View style={styles.inputBox}>
          <Text> NIK Anak </Text>
        </View>

        <TextInput
          value={nikAnak}
          keyboardType="numeric"
          onChangeText={handleNikAnakChange}
          maxLength={16}
          style={styles.textInputBox}
          placeholder="Masukkan NIK Anak"
        />

        <View style={styles.inputBox}>
          <Text> Anak Ke </Text>
        </View>

        <TextInput
          value={anakke}
          keyboardType="numeric"
          onChangeText={(text) => setAnakke(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Data"
        />

        <View style={styles.inputBox}>
          <Text>Nama Bayi </Text>
        </View>

        <TextInput
          value={namaBayi}
          keyboardType="default"
          onChangeText={(text) => setNamaBayi(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Nama Bayi"
        />

        <View style={styles.inputBox}>
          <Text>Tanggal Lahir </Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.textInputBox}
        >
          <Text>{tanggalLahir.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={tanggalLahir}
            mode="date"
            display="default"
            onChange={onChangeTanggalLahir}
          />
        )}

        <View style={styles.inputBox}>
          <Text>Jenis Kelamin </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <RadioButton.Group
            onValueChange={(newValue) => setJenisKelamin(newValue)}
            value={jenisKelamin}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  left: 25,
                }}
              >
                <Text>Laki-Laki</Text>
                <RadioButton value="Laki-Laki" />
              </View>
              <Text>Perempuan</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  marginRight: 50,
                }}
              >
                <RadioButton value="Perempuan" />
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.inputBox}>
          <Text>Berat Badan Lahir </Text>
        </View>

        <TextInput
          value={BeratBadanLahir}
          keyboardType="numeric"
          onChangeText={(text) => setBeratBadanLahir(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Berat Badan Lahir"
          placeholderTextColor="grey"
          renderText={(text) => `${text} KG`}
        />

        <View style={styles.inputBox}>
          <Text>Orang Tua </Text>
        </View>

        <TextInput
          value={orangTua}
          keyboardType="default"
          onChangeText={(text) => setOrangTua(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Nama Orang Tua"
        />

        <View style={styles.inputBox}>
          <Text>NIK Ayah</Text>
        </View>

        <TextInput
          value={nikAyah}
          keyboardType="numeric"
          onChangeText={handleNikAyahChange}
          maxLength={16}
          style={styles.textInputBox}
          placeholder="Masukkan NIK Ayah"
        />

        <View style={styles.inputBox}>
          <Text>Alamat </Text>
        </View>

        <TextInput
          value={alamat}
          keyboardType="default"
          onChangeText={(text) => setAlamat(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Alamat"
        />

        <TouchableOpacity
          style={{ marginTop: 20, marginRight: 20 }}
          onPress={handleOpenModal}
        >
          <Text style={{ color: "#03a9f4", textAlign: "center" }}>
            Input Data TB Dan BB
          </Text>
        </TouchableOpacity>

        <Modal visible={isModalVisible} animationType="slide">
          <View style={{ flex: 1, padding: 10 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 0,
                padding: 10,
                backgroundColor: "#03a9f4",
                alignSelf: "stretch",
                borderBottomWidth: 0.5,
                borderBottomColor: "black",
                zIndex: 1,
                marginBottom: 5,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onPress={handleCloseModal}>
                <Icon
                  name="arrow-left"
                  size={25}
                  color="white"
                  style={{ marginLeft: -50 }}
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
                Data Tinggi Dan Berat Badan
              </Text>
            </View>

            <ScrollView>
              <View style={{ marginBottom: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#f1f1f1",
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRightWidth: 1,
                      borderRightColor: "#ccc",
                    }}
                  >
                    Tinggi Badan
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRightWidth: 1,
                      borderRightColor: "#ccc",
                    }}
                  >
                    Berat Badan
                  </Text>
                  <Text
                    style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}
                  >
                    Bulan
                  </Text>
                  <Text style={{ width: 40, textAlign: "center" }}></Text>
                </View>
                {data.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      paddingVertical: 10,
                      paddingHorizontal: 5,
                      borderBottomWidth: 1,
                      borderBottomColor: "#ccc",
                      alignItems: "center",
                    }}
                  >
                    <TextInput
                      style={{
                        flex: 1,
                        textAlign: "center",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        marginRight: 0,
                      }}
                      keyboardType="numeric"
                      value={item.tinggiBadan} // Perbarui properti value untuk kolom Tinggi Badan
                      onChangeText={(value) =>
                        handleInputChange(index, "tinggiBadan", value)
                      }
                    />
                    <TextInput
                      style={{
                        flex: 1,
                        textAlign: "center",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        marginRight: 10,
                      }}
                      keyboardType="numeric"
                      value={item.beratBadan} // Perbarui properti value untuk kolom Berat Badan
                      onChangeText={(value) =>
                        handleInputChange(index, "beratBadan", value)
                      }
                    />
                    <TextInput
                      style={{ flex: 1, textAlign: "center", marginRight: 5 }}
                      value={item.bulan} // Perbarui properti value untuk kolom Bulan
                      onChangeText={(value) =>
                        handleInputChange(index, "bulan", value)
                      }
                    />
                    {item.tinggiBadan || item.beratBadan || item.bulan ? (
                      <TouchableOpacity
                        onPress={() => handleDeleteRow(index)}
                        style={{ marginLeft: 10 }}
                      >
                        <AntDesign name="closecircle" size={20} color="red" />
                      </TouchableOpacity>
                    ) : (
                      <View style={{ width: 20, marginLeft: 10 }} />
                    )}
                  </View>
                ))}
              </View>

              <TouchableOpacity
                // onPress={handleAddData}
                style={{
                  backgroundColor: "#3498db",
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  borderRadius: 4,
                  marginLeft: 10,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Tambah Data
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.submitText}>Masukkan Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6fd" },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    zIndex: 1,
    marginBottom: 5,
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  inputBox: { top: 20, marginLeft: 25 },
  textInputBox: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    color: "grey",
    padding: 15,
    borderColor: "grey",
  },
  submit: {
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    elevation: 2,
  },
  submitText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
});

export default EPPGBM_Admin1;
