import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, firestore } from "../../../ConfigFirebase/firebase";
import ExcelJS from "exceljs";
import { fromByteArray } from "base64-js";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function EPPBGM_Admin() {
  const navigation = useNavigation();
  const [dataKader, setDataKader] = useState([]);

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

          const kaderRef = collection(firestore, "EPPGBM");
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

  const handleItemPress = (id) => {
    navigation.navigate("EPPGBM_Admin_Detail", { id });
  };

  const convertToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data EPPGBM");

    const monthHeaders = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const columnHeaders = [
      { header: "Nomor KK", key: "nokk", width: 20 },
      { header: "NIK Anak", key: "nikAnak", width: 20 },
      { header: "Anak Ke", key: "anakke", width: 10 },
      { header: "Nama Bayi", key: "namaBayi", width: 20 },
      { header: "Tanggal Lahir", key: "tanggalLahir", width: 20 },
      { header: "Jenis Kelamin", key: "jenisKelamin", width: 15 },
      { header: "Berat Badan Lahir", key: "BeratBadanLahir", width: 20 },
      { header: "Orang Tua", key: "orangTua", width: 20 },
      { header: "NIK Ayah", key: "nikAyah", width: 20 },
      { header: "Alamat", key: "alamat", width: 30 },
    ];

    dataKader.forEach((item) => {
      worksheet.addRow({
        nokk: item.nokk,
        nikAnak: item.nikAnak,
        anakke: item.anakke,
        namaBayi: item.namaBayi,
        tanggalLahir: item.tanggalLahir,
        jenisKelamin: item.jenisKelamin,
        BeratBadanLahir: item.BeratBadanLahir,
        orangTua: item.orangTua,
        nikAyah: item.nikAyah,
        alamat: item.alamat,
      });
    });

    const dataByMonth = {};

    // Group the data by month
    dataKader.forEach((item) => {
      const tableFormData = item.TableForm; // Access the entire TableForm array

      tableFormData.forEach((formData) => {
        const month = formData.bulan;
        const tinggiBadan = formData.tinggiBadan;
        const beratBadan = formData.beratBadan;

        if (tinggiBadan !== undefined && beratBadan !== undefined) {
          if (!dataByMonth[month]) {
            dataByMonth[month] = { tinggiBadan: [], beratBadan: [] };
          }

          dataByMonth[month].tinggiBadan.push(tinggiBadan);
          dataByMonth[month].beratBadan.push(beratBadan);
        }
      });
    });

    // Add column headers
    worksheet.columns = columnHeaders;

    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };

    // Merge and set header values
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

    // Merge other header cells as needed
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

    dataKader.forEach((item) => {
      const row = worksheet.addRow({});
      worksheet.getCell(`A${row.number}`).value = item.nokk;
      worksheet.getCell(`B${row.number}`).value = item.nikAnak;
      worksheet.getCell(`C${row.number}`).value = item.anakke;
      worksheet.getCell(`D${row.number}`).value = item.namaBayi;

      // Ubah timestamp menjadi objek Date dan format tanggal lahir
      const dateOfBirth = item.tanggalLahir.toDate();
      const formattedDateOfBirth = dateOfBirth.toLocaleDateString("id-ID"); // Gunakan format tanggal sesuai keinginan (dalam contoh ini, menggunakan format bahasa Indonesia)
      worksheet.getCell(`E${row.number}`).value = formattedDateOfBirth;

      worksheet.getCell(`F${row.number}`).value = item.jenisKelamin;
      worksheet.getCell(`G${row.number}`).value = item.BeratBadanLahir;
      worksheet.getCell(`H${row.number}`).value = item.orangTua;
      worksheet.getCell(`I${row.number}`).value = item.nikAyah;
      worksheet.getCell(`J${row.number}`).value = item.alamat;
    });

    let columnOffset = columnHeaders.length;

    // Add headers and data for each month
    for (let i = 0; i < monthHeaders.length; i++) {
      const month = monthHeaders[i];
      const monthData = dataByMonth[month] || {
        tinggiBadan: [],
        beratBadan: [],
      };

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
      for (let i = 0; i < monthData.tinggiBadan.length; i++) {
        const row = i + 3; // Start from row 3

        worksheet.getCell(row, columnOffset + 1).value =
          monthData.tinggiBadan[i];
        worksheet.getCell(row, columnOffset + 2).value =
          monthData.beratBadan[i];
      }

      columnOffset += 2; // Increment column offset for the next month
    }

    // Generate the Excel file
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
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("TabHomeAdmin")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{ marginLeft: -147 }}
          />
        </TouchableOpacity>
        <Text style={styles.textTitle}>EPPGBM</Text>
      </View>

      <ScrollView>
        {/* Render existing data kader or show message if data is empty */}
        {dataKader.length === 0 ? (
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={{ fontSize: 20 }}>Belum ada data tersedia.</Text>
          </View>
        ) : (
          dataKader.map((kader, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemPress(kader.id)} // Tambahkan onPress dan berikan fungsi handleDataKaderPress
              style={{ flex: 1 }}
            >
              <View style={styles.dataContainer}>
                <View style={styles.dataContainer2}>
                  <Icon name="user-circle" size={50} color="#000000" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text> Nama Anak : {kader.namaBayi}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginLeft: 3 }}>
                      Alamat : {kader.alamat}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}

        <TouchableOpacity
          style={styles.tambahData}
          onPress={() => navigation.navigate("EPPGBM_Admin1")}
        >
          <Icon name="plus-circle" size={50} color="white" />
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.convertToExcel} onPress={convertToExcel}>
        <Text style={styles.TextConvertToExcel}>Convert to Excel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    zIndex: 1,
    marginBottom: 20,
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  dataContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    bottom: 15,
  },
  tambahData: {
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03a9f4",
    left: 300,
  },
  convertToExcel: {
    width: "100%",
    height: 50,
    backgroundColor: "#03a9f4",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  dataContainer2: { margin: 10, padding: 10, marginRight: 10 },
  TextConvertToExcel: { color: "white", fontSize: 20, fontWeight: "bold" },
});
