import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  StyleSheet,
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

    navigation.navigate("HasilDeteksiStunting", {
      tinggiBadan,
      beratBadan,
      umur,
      jenisKelamin,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
            <Icon
              name="arrow-left"
              size={25}
              color="white"
              style={{ marginLeft: -115 }}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Deteksi Gizi</Text>
        </View>

        <View style={styles.inputBox}>
          <Text>Umur (Bulan)</Text>
        </View>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setUmur(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Umur"
        />

        <View style={styles.inputBox}>
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

        <View style={styles.inputBox}>
          <Text>Tinggi Badan (CM)</Text>
        </View>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setTinggiBadan(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Tinggi Badan"
        />

        <View style={styles.inputBox}>
          <Text>Berat Badan (KG)</Text>
        </View>

        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setBeratBadan(text)}
          style={styles.textInputBox}
          placeholder="Masukkan Berat Badan"
        />

        <TouchableOpacity style={styles.button} onPress={handleDeteksiStunting}>
          <Text style={styles.textButton}>Masukkan Data</Text>
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
    marginTop: 10,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    zIndex: 1,
    marginBottom: 20,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  inputBox: { marginTop: 10, marginLeft: 25 },
  textInputBox: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    color: "grey",
    padding: 15,
    borderColor: "grey",
  },
  button: {
    marginTop: 50,
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    elevation: 2,
  },
  textButton: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
});
export default DeteksiStunting;
