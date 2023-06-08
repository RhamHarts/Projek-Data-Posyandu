import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Table = () => {
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [bulan, setBulan] = useState("");
  const [data, setData] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleSubmit = () => {
    if (
      tinggiBadan.trim() === "" ||
      beratBadan.trim() === "" ||
      bulan.trim() === ""
    ) {
      setIsErrorVisible(true);
      setIsTableVisible(false);
    } else {
      const newData = {
        tinggiBadan: tinggiBadan,
        beratBadan: beratBadan,
        bulan: bulan,
      };
      setData([...data, newData]);
      setTinggiBadan("");
      setBeratBadan("");
      setBulan("");
      setIsErrorVisible(false);
      setIsTableVisible(true);
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleHideTable = () => {
    setIsTableVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tinggi Badan"
          keyboardType="numeric"
          value={tinggiBadan}
          onChangeText={(text) => setTinggiBadan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Berat Badan"
          keyboardType="numeric"
          value={beratBadan}
          onChangeText={(text) => setBeratBadan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bulan"
          value={bulan}
          onChangeText={(text) => setBulan(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {isErrorVisible && (
        <Text style={styles.errorText}>Silahkan isi data terlebih dahulu</Text>
      )}

      {isTableVisible && (
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerTinggiBadan, { flex: 1 }]}>
              Tinggi Badan
            </Text>
            <Text style={[styles.headerBeratBadan, { flex: 1 }]}>
              Berat Badan
            </Text>
            <Text style={[styles.headerBulan, { flex: 1 }]}>Bulan</Text>
            <Text style={[styles.headerDelete, { flex: 1 }]}></Text>
          </View>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableTinggiBadan, { flex: 1 }]}>
                  {item.tinggiBadan}
                </Text>
                <Text style={[styles.tableBeratBadan, { flex: 1 }]}>
                  {item.beratBadan}
                </Text>
                <Text style={[styles.tableBulan, { flex: 1 }]}>
                  {item.bulan}
                </Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.hideTableButton}
            onPress={() => handleHideTable()}
          >
            <Text style={styles.hideTableButtonText}>Hide Table</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 0,
    marginRight: 3,
    textAlign: "center",
    right: 5,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerTinggiBadan: {
    fontWeight: "bold",
    textAlign: "center",
  },
  headerBeratBadan: {
    fontWeight: "bold",
    textAlign: "center",
  },
  headerBulan: {
    fontWeight: "bold",
    textAlign: "center",
  },
  headerDelete: {},
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableTinggiBadan: { marginRight: 10, left: 30 },
  tableBeratBadan: { marginLeft: 30 },
  tableBulan: {},
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  hideTableButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 20,
  },
  hideTableButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "red",
  },
});

export default Table;
