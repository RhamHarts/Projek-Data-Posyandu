import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const HasilDeteksiStunting = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tinggiBadan, beratBadan, umur, jenisKelamin } = route.params;

  const handleBackButton = () => {
    navigation.goBack();
  };

  const deteksiStunting = () => {
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

      const tinggiBadanStatus1 =
        zScoreTB1 >= -2 && zScoreTB1 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus1 =
        zScoreBB1 >= -1 && zScoreBB1 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan1 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB1}) / ${sdTB1} = ${zScoreTB1.toFixed(
        2
      )}`;
      const rumusBeratBadan1 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB1}) / ${sdBB1} = ${zScoreBB1.toFixed(
        2
      )}`;

      return {
        tinggiBadanStatus: tinggiBadanStatus1,
        beratBadanStatus: beratBadanStatus1,
        rumusTinggiBadan: rumusTinggiBadan1,
        rumusBeratBadan: rumusBeratBadan1,
      };
    } else if (age >= 13 && age <= 24 && jenisKelamin === "Laki-Laki") {
      const medianTB2 = 82.1;
      const sdTB2 = 4.6;
      const zScoreTB2 = (height - medianTB2) / sdTB2;

      const medianBB2 = 10.1;
      const sdBB2 = 1.1;
      const zScoreBB2 = (weight - medianBB2) / sdBB2;

      const tinggiBadanStatus2 =
        zScoreTB2 >= -2 && zScoreTB2 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus2 =
        zScoreBB2 >= -2 && zScoreBB2 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan2 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB2}) / ${sdTB2} = ${zScoreTB2.toFixed(
        2
      )}`;
      const rumusBeratBadan2 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB2}) / ${sdBB2} = ${zScoreBB2.toFixed(
        2
      )}`;

      return {
        tinggiBadanStatus: tinggiBadanStatus2,
        beratBadanStatus: beratBadanStatus2,
        rumusTinggiBadan: rumusTinggiBadan2,
        rumusBeratBadan: rumusBeratBadan2,
      };
    } else if (age >= 25 && age <= 36 && jenisKelamin === "Laki-Laki") {
      const medianTB3 = 85;
      const sdTB3 = 4.9;
      const zScoreTB3 = (height - medianTB3) / sdTB3;

      const medianBB3 = 11.6;
      const sdBB3 = 1.4;
      const zScoreBB3 = (weight - medianBB3) / sdBB3;

      const tinggiBadanStatus3 =
        zScoreTB3 >= -2 && zScoreTB3 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus3 =
        zScoreBB3 >= -2 && zScoreBB3 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan3 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB3}) / ${sdTB3} = ${zScoreTB3.toFixed(
        2
      )}`;
      const rumusBeratBadan3 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB3}) / ${sdBB3} = ${zScoreBB3.toFixed(
        2
      )}`;

      return {
        tinggiBadanStatus: tinggiBadanStatus3,
        beratBadanStatus: beratBadanStatus3,
        rumusTinggiBadan: rumusTinggiBadan3,
        rumusBeratBadan: rumusBeratBadan3,
      };
    } else if (age >= 37 && age <= 48 && jenisKelamin === "Laki-Laki") {
      const medianTB4 = 89.2;
      const sdTB4 = 5.4;
      const zScoreTB4 = (height - medianTB4) / sdTB4;

      const medianBB4 = 12.9;
      const sdBB4 = 1.8;
      const zScoreBB4 = (weight - medianBB4) / sdBB4;

      const tinggiBadanStatus4 =
        zScoreTB4 >= -2 && zScoreTB4 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus4 =
        zScoreBB4 >= -2 && zScoreBB4 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan4 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB4}) / ${sdTB4} = ${zScoreTB4.toFixed(
        2
      )}`;
      const rumusBeratBadan4 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB4}) / ${sdBB4} = ${zScoreBB4.toFixed(
        2
      )}`;

      return {
        tinggiBadanStatus: tinggiBadanStatus4,
        beratBadanStatus: beratBadanStatus4,
        rumusTinggiBadan: rumusTinggiBadan4,
        rumusBeratBadan: rumusBeratBadan4,
      };
    } else if (age >= 49 && age <= 60 && jenisKelamin === "Laki-Laki") {
      const medianTB5 = 89.2;
      const sdTB5 = 5.4;
      const zScoreTB5 = (height - medianTB5) / sdTB5;

      const medianBB5 = 12.9;
      const sdBB5 = 1.8;
      const zScoreBB5 = (weight - medianBB5) / sdBB5;

      const tinggiBadanStatus5 =
        zScoreTB5 >= -2 && zScoreTB5 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus5 =
        zScoreBB5 >= -2 && zScoreBB5 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan5 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB5}) / ${sdTB5} = ${zScoreTB5.toFixed(
        2
      )}`;
      const rumusBeratBadan5 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB5}) / ${sdBB5} = ${zScoreBB5.toFixed(
        2
      )}`;

      return {
        tinggiBadanStatus: tinggiBadanStatus5,
        beratBadanStatus: beratBadanStatus5,
        rumusTinggiBadan: rumusTinggiBadan5,
        rumusBeratBadan: rumusBeratBadan5,
      };
    } else if (age >= 0 && age <= 12 && jenisKelamin === "Perempuan") {
      const medianTB6 = 61.4;
      const sdTB6 = 3.7;
      const zScoreTB6 = (height - medianTB6) / sdTB6;

      const medianBB6 = 5.5;
      const sdBB6 = 0.9;
      const zScoreBB6 = (weight - medianBB6) / sdBB6;

      const tinggiBadanStatus6 =
        zScoreTB6 >= -2 && zScoreTB6 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus6 =
        zScoreBB6 >= -2 && zScoreBB6 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan6 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB6}) / ${sdTB6} = ${zScoreTB6.toFixed(
        2
      )}`;
      const rumusBeratBadan6 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB6}) / ${sdBB6} = ${zScoreBB6.toFixed(
        2
      )}`;
      return {
        tinggiBadanStatus: tinggiBadanStatus6,
        beratBadanStatus: beratBadanStatus6,
        rumusTinggiBadan: rumusTinggiBadan6,
        rumusBeratBadan: rumusBeratBadan6,
      };
    } else if (age >= 13 && age <= 24 && jenisKelamin === "Perempuan") {
      const medianTB7 = 81.7;
      const sdTB7 = 4.3;
      const zScoreTB7 = (height - medianTB7) / sdTB7;

      const medianBB7 = 9.1;
      const sdBB7 = 1.1;
      const zScoreBB7 = (weight - medianBB7) / sdBB7;

      const tinggiBadanStatus7 =
        zScoreTB7 >= -2 && zScoreTB7 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus7 =
        zScoreBB7 >= -2 && zScoreBB7 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan7 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB7}) / ${sdTB7} = ${zScoreTB7.toFixed(
        2
      )}`;
      const rumusBeratBadan7 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB7}) / ${sdBB7} = ${zScoreBB7.toFixed(
        2
      )}`;
      return {
        tinggiBadanStatus: tinggiBadanStatus7,
        beratBadanStatus: beratBadanStatus7,
        rumusTinggiBadan: rumusTinggiBadan7,
        rumusBeratBadan: rumusBeratBadan7,
      };
    } else if (age >= 25 && age <= 36 && jenisKelamin === "Perempuan") {
      const medianTB8 = 90.7;
      const sdTB8 = 5.2;
      const zScoreTB8 = (height - medianTB8) / sdTB8;

      const medianBB8 = 14.1;
      const sdBB8 = 1.7;
      const zScoreBB8 = (weight - medianBB8) / sdBB8;

      const tinggiBadanStatus8 =
        zScoreTB8 >= -2 && zScoreTB8 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus8 =
        zScoreBB8 >= -2 && zScoreBB8 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan8 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB8}) / ${sdTB8} = ${zScoreTB8.toFixed(
        2
      )}`;
      const rumusBeratBadan8 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB8}) / ${sdBB8} = ${zScoreBB8.toFixed(
        2
      )}`;
      return {
        tinggiBadanStatus: tinggiBadanStatus8,
        beratBadanStatus: beratBadanStatus8,
        rumusTinggiBadan: rumusTinggiBadan8,
        rumusBeratBadan: rumusBeratBadan8,
      };
    } else if (age >= 37 && age <= 48 && jenisKelamin === "Perempuan") {
      const medianTB9 = 95.5;
      const sdTB9 = 5.1;
      const zScoreTB9 = (height - medianTB9) / sdTB9;

      const medianBB9 = 15.3;
      const sdBB9 = 2.1;
      const zScoreBB9 = (weight - medianBB9) / sdBB9;

      const tinggiBadanStatus9 =
        zScoreTB9 >= -2 && zScoreTB9 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus9 =
        zScoreBB9 >= -2 && zScoreBB9 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan9 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB9}) / ${sdTB9} = ${zScoreTB9.toFixed(
        2
      )}`;
      const rumusBeratBadan9 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB9}) / ${sdBB9} = ${zScoreBB9.toFixed(
        2
      )}`;
      return {
        tinggiBadanStatus: tinggiBadanStatus9,
        beratBadanStatus: beratBadanStatus9,
        rumusTinggiBadan: rumusTinggiBadan9,
        rumusBeratBadan: rumusBeratBadan9,
      };
    } else if (age >= 49 && age <= 60 && jenisKelamin === "Perempuan") {
      const medianTB10 = 102.8;
      const sdTB10 = 5.7;
      const zScoreTB10 = (height - medianTB10) / sdTB10;

      const medianBB10 = 17.2;
      const sdBB10 = 2.4;
      const zScoreBB10 = (weight - medianBB10) / sdBB10;

      const tinggiBadanStatus10 =
        zScoreTB10 >= -2 && zScoreTB10 <= 3 ? "Normal" : "Tidak Normal";
      const beratBadanStatus10 =
        zScoreBB10 >= -2 && zScoreBB10 <= 1 ? "Normal" : "Tidak Normal";

      const rumusTinggiBadan10 = `(Tinggi Badan - Median) / Standar Deviasi = (${height} - ${medianTB10}) / ${sdTB10} = ${zScoreTB10.toFixed(
        2
      )}`;
      const rumusBeratBadan10 = `(Berat Badan - Median) / Standar Deviasi = (${weight} - ${medianBB10}) / ${sdBB10} = ${zScoreBB10.toFixed(
        2
      )}`;
      return {
        tinggiBadanStatus: tinggiBadanStatus10,
        beratBadanStatus: beratBadanStatus10,
        rumusTinggiBadan: rumusTinggiBadan10,
        rumusBeratBadan: rumusBeratBadan10,
      };
    }
    return null;
  };

  const hasilDeteksi = deteksiStunting();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Icon
          name="arrow-left"
          size={25}
          color="white"
          style={{ marginLeft: -75 }}
          onPress={handleBackButton}
        />
        <Text style={styles.titleText}>Hasil Deteksi Stunting</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultTextTitle}>Hasil Kalkulator Nilai Gizi</Text>
        <Text style={styles.resultText}>Umur: {umur} Bulan</Text>
        <Text style={styles.resultText}>Jenis Kelamin: {jenisKelamin}</Text>
        <Text style={styles.resultText}>Tinggi Badan: {tinggiBadan}cm</Text>
        <Text style={styles.resultText}>Berat Badan: {beratBadan}kg</Text>
        <Text style={styles.resultText}>
          Rumus Tinggi Badan: {hasilDeteksi?.rumusTinggiBadan || "-"}
        </Text>
        <Text style={styles.resultText}>
          Rumus Berat Badan: {hasilDeteksi?.rumusBeratBadan || "-"}
        </Text>
        <Text style={styles.resultText}>
          Status Tinggi Badan: {hasilDeteksi?.tinggiBadanStatus || "-"}
        </Text>
        <Text style={styles.resultText}>
          Status Berat Badan: {hasilDeteksi?.beratBadanStatus || "-"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6fd" },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    zIndex: 1,
    marginBottom: 10,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 75,
    color: "#fff",
  },
  resultContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  resultTextTitle: {
    fontSize: 17,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default HasilDeteksiStunting;
