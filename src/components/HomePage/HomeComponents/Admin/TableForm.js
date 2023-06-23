import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
// impor instance firestore yang telah Anda konfigurasi sebelumnya
import { firestore } from "../../../ConfigFirebase/firebase";

const Table = () => {
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [bulan, setBulan] = useState("");
  const [data, setData] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [userData, setUserData] = useState("");

  const handleSubmit = async () => {
    // Validasi input data
    if (
      tinggiBadan.trim() === "" ||
      beratBadan.trim() === "" ||
      bulan.trim() === ""
    ) {
      setIsErrorVisible(true);
    } else {
      const newData = {
        tinggiBadan: tinggiBadan,
        beratBadan: beratBadan,
        bulan: bulan,
        user_id: auth.currentUser?.uid, // Menyimpan user_id ke dalam data
      };

      try {
        if (userData) {
          // Jika data pengguna sudah ada, maka update data yang ada
          await setDoc(doc(firestore, "EPPGBM", userData.id), newData);
        } else {
          // Jika data pengguna belum ada, maka tambahkan data baru
          await addDoc(collection(firestore, "EPPGBM"), newData);
        }

        // Tambahkan data ke dalam tabel
        setData([...data, newData]);
        setTinggiBadan("");
        setBeratBadan("");
        setBulan("");
        setIsErrorVisible(false);
      } catch (error) {
        console.error("Error saat menyimpan data:", error);
      }
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 4,
            paddingHorizontal: 0,
            marginRight: 3,
            textAlign: "center",
            right: 5,
          }}
          placeholder="Tinggi Badan"
          keyboardType="numeric"
          value={tinggiBadan}
          onChangeText={(text) => setTinggiBadan(text)}
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 4,
            paddingHorizontal: 0,
            marginRight: 3,
            textAlign: "center",
            right: 5,
          }}
          placeholder="Berat Badan"
          keyboardType="numeric"
          value={beratBadan}
          onChangeText={(text) => setBeratBadan(text)}
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 4,
            paddingHorizontal: 0,
            marginRight: 3,
            textAlign: "center",
            right: 5,
          }}
          placeholder="Bulan"
          value={bulan}
          onChangeText={(text) => setBulan(text)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#3498db",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 4,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>

      {isErrorVisible && (
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 20,
            color: "red",
          }}
        >
          Silahkan isi data terlebih dahulu
        </Text>
      )}

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f1f1f1",
            paddingVertical: 10,
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center", flex: 1 }}>
            Tinggi Badan
          </Text>
          <Text style={{ fontWeight: "bold", textAlign: "center", flex: 1 }}>
            Berat Badan
          </Text>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>Bulan</Text>
          <Text style={{ flex: 1 }}></Text>
        </View>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                paddingHorizontal: 5,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text style={{ marginRight: 10, left: 30, flex: 1 }}>
                {item.tinggiBadan}
              </Text>
              <Text style={{ marginLeft: 30, flex: 1 }}>{item.beratBadan}</Text>
              <Text style={{ flex: 1 }}>{item.bulan}</Text>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Table;
