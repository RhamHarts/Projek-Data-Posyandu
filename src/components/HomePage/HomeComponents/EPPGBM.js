import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Flatlist,
  ScrollView,
} from "react-native";
// import DatePicker from "react-native-datepicker";
import { RadioButton } from "react-native-paper"; // import dari 'react-native-elements' diganti menjadi 'react-native-paper'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const EPPGBM = () => {
  const navigation = useNavigation();
  const [nokk, setNokk] = useState("");
  const [nikAnak, setNikAnak] = useState("");
  const [anakke, setAnakke] = useState("");
  const [namaBayi, setNamaBayi] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [BBL, setBBL] = useState("");
  const [orangTua, setOrangTua] = useState("");
  const [nikAyah, setNikAyah] = useState("");
  const [alamat, setAlamat] = useState("");

  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [bulan, setBulan] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const newData = {
      tinggiBadan: tinggiBadan,
      beratBadan: beratBadan,
      bulan: bulan,
    };
    setData([...data, newData]);
    setTinggiBadan("");
    setBeratBadan("");
    setBulan("");
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Form EPPGBM
          </Text>
        </View>

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text> No KK </Text>
        </View>

        <TextInput
          keyboardType="Numeric"
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
          keyboardType="Numeric"
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

        <TextInput
          keyboardType="Numeric"
          onChangeText={(text) => setTanggalLahir(text)}
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
          placeholder="Masukkan Tanggal Lahir"
        />

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
          keyboardType="Numeric"
          onChangeText={(text) => setBBL(text)}
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
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>NIK Ayah</Text>
        </View>

        <TextInput
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
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Masukkan Data
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EPPGBM;
