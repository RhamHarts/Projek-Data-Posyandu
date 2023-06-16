import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const DeteksiStunting = () => {
  const navigation = useNavigation();
  const [umur, setUmur] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");

  const handleDeteksiStunting = () => {
    if (
      umur === "" ||
      jenisKelamin === "" ||
      tinggiBadan === "" ||
      beratBadan === ""
    ) {
      Alert.alert("Error", "Silahkan isi data yang sesuai");
      return;
    }
    // Konversi input menjadi tipe data numerik
    const age = parseInt(umur);
    const height = parseInt(tinggiBadan);
    const weight = parseInt(beratBadan);

    if (age >= 0 && age <= 12 && jenisKelamin === "Laki-Laki") {
      const medianTB1 = 49.4;
      const sdTB1 = 3.4;
      const zScoreTB1 = (height - medianTB1) / sdTB1;

      const medianBB1 = 3.4;
      const sdBB1 = 0.6;
      const zScoreBB1 = (weight - medianBB1) / sdBB1;

      if (zScoreTB1 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak Anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB1 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak Anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB1 + 3 * sdTB1 && zScoreBB1 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB1 + 3 * sdBB1 && zScoreTB1 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB1 >= -1 && zScoreBB1 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB1 >= -2 && zScoreTB1 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 13 && age <= 24 && jenisKelamin === "Laki-Laki") {
      const medianTB2 = 82.1;
      const sdTB2 = 4.6;
      const zScoreTB2 = (height - medianTB2) / sdTB2;

      const medianBB2 = 10.1;
      const sdBB2 = 1.1;
      const zScoreBB2 = (weight - medianBB2) / sdBB2;

      if (zScoreTB2 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB2 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB2 + 3 * sdTB2 && zScoreBB2 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB2 + 3 * sdBB2 && zScoreTB2 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB2 >= -2 && zScoreBB2 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB2 >= -2 && zScoreTB2 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 25 && age <= 36 && jenisKelamin === "Laki-Laki") {
      const medianTB3 = 85;
      const sdTB3 = 4.9;
      const zScoreTB3 = (height - medianTB3) / sdTB3;

      const medianBB3 = 11.6;
      const sdBB3 = 1.4;
      const zScoreBB3 = (weight - medianBB3) / sdBB3;

      if (zScoreTB3 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB3 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB3 + 3 * sdTB3 && zScoreBB3 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB3 + 3 * sdBB3 && zScoreTB3 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB3 >= -2 && zScoreBB3 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB3 >= -2 && zScoreTB3 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 37 && age <= 48 && jenisKelamin === "Laki-Laki") {
      const medianTB4 = 89.2;
      const sdTB4 = 5.4;
      const zScoreTB4 = (height - medianTB4) / sdTB4;

      const medianBB4 = 12.9;
      const sdBB4 = 1.8;
      const zScoreBB4 = (weight - medianBB4) / sdBB4;

      if (zScoreTB4 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB4 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB4 + 3 * sdTB4 && zScoreBB4 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB4 + 3 * sdBB4 && zScoreTB4 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB4 >= -2 && zScoreBB4 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB4 >= -2 && zScoreTB4 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 49 && age <= 60 && jenisKelamin === "Laki-Laki") {
      const medianTB5 = 89.2;
      const sdTB5 = 5.4;
      const zScoreTB5 = (height - medianTB5) / sdTB5;

      const medianBB5 = 12.9;
      const sdBB5 = 1.8;
      const zScoreBB5 = (weight - medianBB5) / sdBB5;

      if (zScoreTB5 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB5 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB5 + 3 * sdTB5 && zScoreBB5 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB5 + 3 * sdBB5 && zScoreTB5 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB5 >= -2 && zScoreBB5 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB5 >= -2 && zScoreTB5 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 0 && age <= 12 && jenisKelamin === "Perempuan") {
      const medianTB6 = 61.4;
      const sdTB6 = 3.7;
      const zScoreTB6 = (height - medianTB6) / sdTB6;

      const medianBB6 = 5.5;
      const sdBB6 = 0.9;
      const zScoreBB6 = (weight - medianBB6) / sdBB6;

      if (zScoreTB6 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB6 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB6 + 3 * sdTB6 && zScoreBB6 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB6 + 3 * sdBB6 && zScoreTB6 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB6 >= -2 && zScoreBB6 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB6 >= -2 && zScoreTB6 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 13 && age <= 24 && jenisKelamin === "Perempuan") {
      const medianTB7 = 81.7;
      const sdTB7 = 4.3;
      const zScoreTB7 = (height - medianTB7) / sdTB7;

      const medianBB7 = 9.1;
      const sdBB7 = 1.1;
      const zScoreBB7 = (weight - medianBB7) / sdBB7;

      if (zScoreTB7 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB7 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB7 + 3 * sdTB7 && zScoreBB7 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB7 + 3 * sdBB7 && zScoreTB7 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB7 >= -2 && zScoreBB7 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB7 >= -2 && zScoreTB7 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 25 && age <= 36 && jenisKelamin === "Perempuan") {
      const medianTB8 = 90.7;
      const sdTB8 = 5.2;
      const zScoreTB8 = (height - medianTB8) / sdTB8;

      const medianBB8 = 14.1;
      const sdBB8 = 1.7;
      const zScoreBB8 = (weight - medianBB8) / sdBB8;

      if (zScoreTB8 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB8 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB8 + 3 * sdTB8 && zScoreBB8 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB8 + 3 * sdBB8 && zScoreTB8 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB8 >= -2 && zScoreBB8 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB8 >= -2 && zScoreTB8 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 37 && age <= 48 && jenisKelamin === "Perempuan") {
      const medianTB9 = 95.5;
      const sdTB9 = 5.1;
      const zScoreTB9 = (height - medianTB9) / sdTB9;

      const medianBB9 = 15.3;
      const sdBB9 = 2.1;
      const zScoreBB9 = (weight - medianBB9) / sdBB9;

      if (zScoreTB9 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB9 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB9 + 3 * sdTB9 && zScoreBB9 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB9 + 3 * sdBB9 && zScoreTB9 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB9 >= -2 && zScoreBB9 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB9 >= -2 && zScoreTB9 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else if (age >= 49 && age <= 60 && jenisKelamin === "Perempuan") {
      const medianTB10 = 102.8;
      const sdTB10 = 5.7;
      const zScoreTB10 = (height - medianTB10) / sdTB10;

      const medianBB10 = 17.2;
      const sdBB10 = 2.4;
      const zScoreBB10 = (weight - medianBB10) / sdBB10;

      if (zScoreTB10 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB10 < -1) {
        Alert.alert("Hasil Deteksi", "Anak Anda mengalami stunting.");
        Alert.alert(
          "Hasil Deteksi",
          "Berat anak anda terlalu rendah secara rata-rata anak pada umumnya."
        );
      } else if (height > medianTB10 + 3 * sdTB10 && zScoreBB10 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Tinggi badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (weight > medianBB10 + 3 * sdBB10 && zScoreTB10 >= -1) {
        Alert.alert(
          "Hasil Deteksi",
          "Berat badan anak Anda terlalu tinggi secara rata-rata anak pada umumnya."
        );
      } else if (zScoreBB10 >= -2 && zScoreBB10 <= 1) {
        Alert.alert("Hasil Deteksi", "Berat Badan Anak Anda Normal.");
      } else if (zScoreTB10 >= -2 && zScoreTB10 <= 3) {
        Alert.alert("Hasil Deteksi", "Tinggi Badan Anak Anda Normal.");
      } else {
        Alert.alert("Hasil Deteksi", "Anak Anda tidak mengalami stunting.");
      }
    } else {
      Alert.alert(
        "Error",
        "Data yang dimasukkan tidak valid untuk deteksi stunting."
      );
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            padding: 10,
            backgroundColor: "#03a9f4",
            alignSelf: "stretch",
            borderBottomWidth: 0.5,
            borderBottomColor: "black",
            zIndex: 1,
            marginBottom: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
            <Icon
              name="arrow-left"
              size={25}
              color="white"
              style={{ marginLeft: -115 }}
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
            Deteksi Stunting
          </Text>
        </View>

        <View style={{ marginTop: 10, marginLeft: 25 }}>
          <Text>Umur (Bulan)</Text>
        </View>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setUmur(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Umur"
        />

        <View style={{ marginTop: 10, marginLeft: 25 }}>
          <Text>Jenis Kelamin</Text>
        </View>

        <View style={{ marginTop: 20 }}>
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  marginRight: 50,
                }}
              >
                <Text>Perempuan</Text>
                <RadioButton value="Perempuan" />
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View style={{ marginTop: 10, marginLeft: 25 }}>
          <Text>Tinggi Badan (CM)</Text>
        </View>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setTinggiBadan(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Tinggi Badan"
        />

        <View style={{ marginTop: 20, marginLeft: 25 }}>
          <Text>Berat Badan (KG)</Text>
        </View>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setBeratBadan(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            borderRadius: 9,
            elevation: 2,
            paddingLeft: 10,
            color: "grey",
            padding: 15,
            borderColor: "grey",
          }}
          placeholder="Masukkan Berat Badan"
        />

        <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: "#03a9f4",
            paddingVertical: 15,
            marginHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
            elevation: 2,
          }}
          onPress={handleDeteksiStunting}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Masukkan Data
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DeteksiStunting;
