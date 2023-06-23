import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "../../../ConfigFirebase/firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";

const EPPGBM_Admin_Detail = ({ route }) => {
  const navigation = useNavigation();
  const currentUser = auth.currentUser;
  const { id } = route.params;

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
  const [data, setData] = useState([]);
  const [datamap, setDatamap] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = doc(firestore, "EPPGBM", id);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const data = userSnapshot.data();
          const datamap = data.TableForm;
          console.log(datamap); // Menampilkan data di console.log
          setNokk(data.nokk);
          setNikAnak(data.nikAnak);
          setAnakke(data.anakke);
          setNamaBayi(data.namaBayi);
          setTanggalLahir(data.tanggalLahir.toDate());
          setJenisKelamin(data.jenisKelamin);
          setBeratBadanLahir(data.BeratBadanLahir);
          setOrangTua(data.orangTua);
          setNikAyah(data.nikAyah);
          setAlamat(data.alamat);

          setData(datamap); // Mengupdate state data dengan datamap
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const initialData = Array.from({ length: 12 }, () => ({
      tinggiBadan: "",
      beratBadan: "",
      bulan: "",
    }));
    setData(initialData);
  }, []);

  const handleSubmit = async () => {
    try {
      // Simpan data yang diubah
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
        TableForm: datamap.map((item) => ({
          tinggiBadan: item.tinggiBadan,
          beratBadan: item.beratBadan,
          bulan: item.bulan,
        })),
      };
      await updateDoc(doc(firestore, "EPPGBM", id), newData);
      alert("Anda berhasil memperbarui data");
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      alert("Terjadi kesalahan saat menyimpan data");
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
      tinggiBadan: "",
      beratBadan: "",
      bulan: "",
    };
    setData(updatedData);
  };
  
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(firestore, "EPPGBM", id));
      alert("Data berhasil dihapus");
      navigation.goBack();
    } catch (error) {
      console.error("Gagal menghapus data:", error);
      alert("Terjadi kesalahan saat menghapus data");
    }
  };

  const showDeleteConfirmation = () => {
    Alert.alert("Konfirmasi", "Apakah Anda yakin ingin menghapus data ini?", [
      {
        text: "Batal",
        style: "cancel",
      },
      {
        text: "Hapus",
        style: "destructive",
        onPress: handleDelete,
      },
    ]);
  };

  const onChangeTanggalLahir = (event, selectedDate) => {
    const currentDate = selectedDate || tanggalLahir;
    setShowDatePicker(false);
    setTanggalLahir(currentDate);
  };

  const handleNokkChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, "");
    setNokk(numericText);
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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 0,
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
          <TouchableOpacity onPress={() => navigation.navigate("EPPGBM_Admin")}>
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

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text> No KK </Text>
        </View>

        <TextInput
          value={nokk}
          keyboardType="numeric"
          onChangeText={handleNokkChange}
          maxLength={15}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan No KK"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text> NIK Anak </Text>
        </View>

        <TextInput
          value={nikAnak}
          keyboardType="numeric"
          onChangeText={handleNikAnakChange}
          maxLength={16}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan NIK Anak"
        />
        <View style={{ top: 20, marginLeft: 25 }}>
          <Text> Anak Ke </Text>
        </View>

        <TextInput
          value={anakke}
          keyboardType="Numeric"
          onChangeText={(text) => setAnakke(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Data"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Nama Bayi </Text>
        </View>

        <TextInput
          value={namaBayi}
          keyboardType="text"
          onChangeText={(text) => setNamaBayi(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Nama Bayi"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Tanggal Lahir </Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
            justifyContent: "center",
          }}
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

        <View style={{ top: 20, marginLeft: 25 }}>
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

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Berat Badan Lahir </Text>
        </View>

        <TextInput
          value={BeratBadanLahir}
          keyboardType="numeric"
          onChangeText={(text) => setBeratBadanLahir(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Berat Badan Lahir"
          placeholderTextColor="grey"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Orang Tua </Text>
        </View>

        <TextInput
          value={orangTua}
          keyboardType="text"
          onChangeText={(text) => setOrangTua(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Nama Orang Tua"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>NIK Ayah</Text>
        </View>

        <TextInput
          value={nikAyah}
          keyboardType="numeric"
          onChangeText={handleNikAyahChange}
          maxLength={16}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan NIK Ayah"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Alamat </Text>
        </View>

        <TextInput
          value={alamat}
          keyboardType="text"
          onChangeText={(text) => setAlamat(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 30,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
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

        <TouchableOpacity
          style={{
            marginTop: 40,
            marginBottom: 10,
            backgroundColor: "#03a9f4",
            paddingVertical: 15,
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
            elevation: 2,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Masukkan Data
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#ff0000",
            paddingVertical: 15,
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
            elevation: 2,
            marginBottom: 20,
          }}
          onPress={showDeleteConfirmation}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Hapus Data
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EPPGBM_Admin_Detail;
