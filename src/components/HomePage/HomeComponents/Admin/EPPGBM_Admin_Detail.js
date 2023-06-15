import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "../../../ConfigFirebase/firebase";
import Icon from "react-native-vector-icons/FontAwesome5";

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
  const [nikAyah, setNikAyah] = useState("");
  const [alamat, setAlamat] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = doc(firestore, "EPPGBM", id);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const data = userSnapshot.data();
          setNokk(data.nokk);
          setNikAnak(data.nikAnak);
          setAnakke(data.anakke);
          setNamaBayi(data.namaBayi);
          setTanggalLahir(data.tanggalLahir.toDate());
          setJenisKelamin(data.jenisKelamin);
          setBeratBadanLahir(data.BeratBadanLahir);
          setNikAyah(data.nikAyah);
          setAlamat(data.alamat);
          // Set state dan setter lainnya sesuai dengan struktur data yang ingin ditampilkan
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, [id]);

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
        nikAyah,
        alamat,
        // Set data lainnya sesuai dengan struktur data yang ingin disimpan
      };
      await updateDoc(doc(firestore, "EPPGBM", id), newData);
      alert("Anda berhasil memperbarui data");
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      alert("Terjadi kesalahan saat menyimpan data");
    }
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
          onChangeText={(text) => setNokk(text)}
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
          onChangeText={(text) => setNikAnak(text)}
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
          keyboardType="Numeric"
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
          renderText={(text) => `${text} KG`}
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>NIK Ayah</Text>
        </View>

        <TextInput
          value={nikAyah}
          keyboardType="Numeric"
          onChangeText={(text) => setNikAyah(text)}
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
          onPress={() => navigation.navigate("TableForm")}
        >
          <Text style={{ color: "#03a9f4", textAlign: "center" }}>
            Input Data TB Dan BB
          </Text>
        </TouchableOpacity>

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
