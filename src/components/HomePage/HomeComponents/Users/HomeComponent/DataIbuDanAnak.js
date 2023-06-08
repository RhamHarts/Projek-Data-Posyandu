import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
// import DatePicker from "react-native-datepicker";

const DataIbuDanAnak = () => {
  const [namaIbu, setNamaIbu] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", top: 50 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {" "}
            Data Ibu Dan Anak
          </Text>
        </View>

        <View
          style={{ justifyContent: "center", alignItems: "center", top: 70 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 40 }}>
            {" "}
            Data Ibu
          </Text>
        </View>

        <View style={{ top: 70, marginLeft: 25 }}>
          <Text>Nama Ibu </Text>
        </View>

        <TextInput
          keyboardType="text"
          onChangeText={(text) => setNamaIbu(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 80,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Nama Ibu"
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
        <View
          style={{ justifyContent: "center", alignItems: "center", top: 70 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}> Data Anak</Text>
        </View>

        <View style={{ top: 70, marginLeft: 25 }}>
          <Text>Nama Anak </Text>
        </View>

        <TextInput
          keyboardType="text"
          onChangeText={(text) => setNamaBayi(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 80,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Nama Anak"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Tanggal Lahir </Text>
        </View>

        <TextInput
          keyboardType="Numeric"
          onChangeText={(Numeric) => setTanggalLahir(Numeric)}
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
          <Text>Berat Badan (KG) </Text>
        </View>

        <TextInput
          keyboardType="Numeric"
          onChangeText={(Numeric) => setBeratBadan(Numeric)}
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
          placeholder="Masukkan Berat Badan"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Tinggi Badan (CM)</Text>
        </View>

        <TextInput
          keyboardType="Numeric"
          onChangeText={(Numeric) => setTinggiBadan(Numeric)}
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
          placeholder="Masukkan Tinggi Badanr"
        />

        <View style={{ top: 20, marginLeft: 25 }}>
          <Text>Lingkar Kepala (CM) </Text>
        </View>

        <TextInput
          keyboardType="Numeric"
          onChangeText={(Numeric) => setLingkarKepala(Numeric)}
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
          placeholder="Masukkan Lingkar Kepala"
        />

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

export default DataIbuDanAnak;
