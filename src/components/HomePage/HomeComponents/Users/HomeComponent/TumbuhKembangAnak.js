import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { firestore, auth } from "../../../../ConfigFirebase/firebase";

const TumbuhKembangAnak = () => {
  const navigation = useNavigation();
  const currentUser = auth.currentUser;

  const [namaBayi, setNamaBayi] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState(new Date());
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = collection(firestore, "TumbuhKembangAnak");
        const querySnapshot = await getDocs(
          query(userRef, where("userId", "==", currentUser.uid))
        );
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          data.id = querySnapshot.docs[0].id; // Memasukkan id ke dalam data
          setUserData(data);
          setNamaBayi(data.namaBayi);
          if (
            data.tanggalLahir &&
            typeof data.tanggalLahir.toDate === "function"
          ) {
            setTanggalLahir(data.tanggalLahir.toDate());
          }

          setJenisKelamin(data.jenisKelamin);
          setBeratBadan(data.beratBadan);
          setTinggiBadan(data.tinggiBadan);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSignUp = async () => {
    try {
      const data = {
        namaBayi,
        tanggalLahir:
          tanggalLahir instanceof Date ? tanggalLahir : tanggalLahir.toDate(),
        jenisKelamin,
        beratBadan,
        tinggiBadan,
        userId: currentUser.uid,
      };

      if (userData && userData.id) {
        await updateDoc(doc(firestore, "TumbuhKembangAnak", userData.id), data);
        alert("Anda berhasil memperbarui data");
      } else {
        await addDoc(collection(firestore, "TumbuhKembangAnak"), data);
        alert("Anda berhasil memasukkan data");
      }
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
    }
  };

  const formatDate = (date) => {
    if (date instanceof Date) {
      const formattedDate = date.toLocaleDateString("id-ID", {
        dateStyle: "long",
      });
      return formattedDate;
    }
    return "";
  };

  const onChangeTanggalLahir = (event, selectedDate) => {
    const currentDate = selectedDate || tanggalLahir;
    setShowDatePicker(false);
    setTanggalLahir(currentDate);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
          <Icon
            name="arrow-left"
            size={25}
            color="black"
            style={{ marginLeft: 15, top: 20 }}
          />
        </TouchableOpacity>

        <View
          style={{ justifyContent: "center", alignItems: "center", top: 50 }}
        >
          <Image
            source={require("../../../../../images/bayi.png")}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </View>
        <View style={{ top: 70, marginLeft: 25 }}>
          <Text>Nama Anak </Text>
        </View>

        <TextInput
          value={namaBayi}
          keyboardType="default"
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
          <Text>{formatDate(tanggalLahir)}</Text>
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
          <Text>Berat Badan (KG) </Text>
        </View>

        <TextInput
          value={beratBadan}
          keyboardType="numeric"
          onChangeText={(text) => setBeratBadan(text)}
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
          value={tinggiBadan}
          keyboardType="numeric"
          onChangeText={(text) => setTinggiBadan(text)}
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
          placeholder="Masukkan Tinggi Badan"
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
          onPress={handleSignUp}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            Masukkan Data
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TumbuhKembangAnak;

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
