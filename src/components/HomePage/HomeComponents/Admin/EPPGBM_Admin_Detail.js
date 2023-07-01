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
import ExcelJS from "exceljs";
import { fromByteArray } from "base64-js";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

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
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = doc(firestore, "EPPGBM", id);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const data = userSnapshot.data();
          const datamap = data.TableForm;

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

  const handleAddData = () => {
    const newData = {
      tinggiBadan: "",
      beratBadan: "",
      bulan: "",
    };
    setData([...data, newData]);
  };

  const openExcelFile = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data EPPGBM");

    const columnHeaders = [
      { header: "Nomor KK", key: "nokk", width: 20 },
      { header: "NIK Anak", key: "nikAnak", width: 20 },
      { header: "Anak Ke", key: "anakke", width: 10 },
      { header: "Nama Bayi", key: "namaBayi", width: 20 },
      { header: "Tanggal Lahir", key: "tanggalLahir", width: 20 },
      { header: "Jenis Kelamin", key: "jenisKelamin", width: 15 },
      { header: "Berat Badan Lahir", key: "BeratBadanLahir", width: 15 },
      { header: "Orang Tua", key: "orangTua", width: 20 },
      { header: "NIK Ayah", key: "nikAyah", width: 20 },
      { header: "Alamat", key: "alamat", width: 30 },
    ];

    worksheet.addRow({
      nokk: nokk,
      nikAnak: nikAnak,
      anakke: anakke,
      namaBayi: namaBayi,
      tanggalLahir: tanggalLahir,
      jenisKelamin: jenisKelamin,
      BeratBadanLahir: BeratBadanLahir,
      orangTua: orangTua,
      nikAyah: nikAyah,
      alamat: alamat,
    });

    const dataByMonth = {};

    // Group the data by month
    data.forEach((item) => {
      if (dataByMonth[item.bulan]) {
        dataByMonth[item.bulan].push(item);
      } else {
        dataByMonth[item.bulan] = [item];
      }
    });

    // Add column headers
    worksheet.columns = columnHeaders;

    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };

    worksheet.mergeCells("A1:A2");
    worksheet.mergeCells("B1:B2");
    worksheet.mergeCells("C1:C2");
    worksheet.mergeCells("D1:D2");
    worksheet.mergeCells("E1:E2");
    worksheet.mergeCells("F1:F2");
    worksheet.mergeCells("G1:G2");
    worksheet.mergeCells("H1:H2");
    worksheet.mergeCells("I1:I2");
    worksheet.mergeCells("J1:J2");

    // Set the header values
    worksheet.getCell("A1").value = "Nomor KK";
    worksheet.getCell("B1").value = "NIK Anak";
    worksheet.getCell("C1").value = "Anak Ke";
    worksheet.getCell("D1").value = "Nama Bayi";
    worksheet.getCell("E1").value = "Tanggal Lahir";
    worksheet.getCell("F1").value = "Jenis Kelamin";
    worksheet.getCell("G1").value = "Berat Badan Lahir";
    worksheet.getCell("H1").value = "Orang Tua";
    worksheet.getCell("I1").value = "NIK Ayah";
    worksheet.getCell("J1").value = "Alamat";

    worksheet.getCell("A3").value = nokk;
    worksheet.getCell("B3").value = nikAnak;
    worksheet.getCell("C3").value = anakke;
    worksheet.getCell("D3").value = namaBayi;
    worksheet.getCell("E3").value = tanggalLahir;
    worksheet.getCell("F3").value = jenisKelamin;
    worksheet.getCell("G3").value = BeratBadanLahir;
    worksheet.getCell("H3").value = orangTua;
    worksheet.getCell("I3").value = nikAyah;
    worksheet.getCell("J3").value = alamat;

    let columnOffset = columnHeaders.length;

    // Add headers and data for each month
    for (const month in dataByMonth) {
      const monthData = dataByMonth[month];

      // Add header row for the month
      worksheet.mergeCells(1, columnOffset + 1, 1, columnOffset + 2);
      worksheet.getCell(1, columnOffset + 1).value = month;
      worksheet.getCell(1, columnOffset + 1).alignment = {
        horizontal: "center",
      };

      // Add sub-headers for Tinggi Badan and Berat Badan
      worksheet.getCell(2, columnOffset + 1).value = "Tinggi Badan";
      worksheet.getCell(2, columnOffset + 2).value = "Berat Badan";

      // Add data rows for Tinggi Badan and Berat Badan
      for (let i = 0; i < monthData.length; i++) {
        const row = i + 3; // Start from row 3

        worksheet.getCell(row, columnOffset + 1).value =
          monthData[i].tinggiBadan;
        worksheet.getCell(row, columnOffset + 2).value =
          monthData[i].beratBadan;
      }

      columnOffset += 2; // Increment column offset for the next month
    }

    try {
      const excelBuffer = await workbook.xlsx.writeBuffer();
      const base64String = fromByteArray(new Uint8Array(excelBuffer));

      const localFilePath = FileSystem.cacheDirectory + "Data EPPGBM.xlsx";

      await FileSystem.writeAsStringAsync(localFilePath, base64String, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await Sharing.shareAsync(localFilePath);

      console.log("File Excel berhasil dibuka");
    } catch (error) {
      console.log("Gagal membuat atau membuka file Excel:", error);
    }
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
          keyboardType="numeric"
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
          keyboardType="default"
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
          keyboardType="default"
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
          keyboardType="default"
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
                onPress={handleAddData}
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

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "green",
            paddingVertical: 15,
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
            elevation: 2,
            marginBottom: 20,
          }}
          onPress={openExcelFile}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Convert to Excel
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EPPGBM_Admin_Detail;
