import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const data = [
  {
    age: "13-18 bulan",
    needs: [
      {
        text: "Nutrisi dan makanan seimbang",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/13-18-1.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Perkembangan motorik kasar dan halus",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/13-18-2.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Pengembangan bahasa dan komunikasi",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/13-18-3.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Perkembangan sosial dan emosional",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/13-18-4.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Rutinitas dan tidur yang konsisten",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/13-18-5.png"),
        width: 100,
        height: 100,
      },
    ],
  },
  {
    age: "19-24 bulan",
    needs: [
      {
        text: "Pengenalan makanan baru dengan tekstur dan rasa yang beragam",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/19-24-1.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Perkembangan keterampilan motorik halus",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/19-24-2.png"),
        width: 100,
        height: 105,
      },
      {
        text: "Kemampuan bahasa yang lebih maju",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/19-24-3.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Peningkatan dalam bermain bersama anak lain",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/19-24-4.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Konsistensi dalam rutinitas dan tidur",
        image: require("../../../../../../images/Kebutuhanchildren/13-24/19-24-5.png"),
        width: 100,
        height: 100,
      },
    ],
  },
];

const KebutuhanAnak2 = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.ageContainer}>
        <Text style={styles.ageText}>{item.age}</Text>
      </View>
      <View style={styles.needsContainer}>
        {item.needs.map((need, index) => (
          <View key={index} style={styles.needItem}>
            <Image
              source={need.image}
              style={{
                ...styles.needItemImage,
                width: need.width,
                height: need.height,
              }}
            />
            <Text style={styles.needItemText}>{need.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kebutuhan Anak 13-24 Bulan</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  contentContainer: {
    paddingBottom: 30,
  },
  itemContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  ageContainer: {
    backgroundColor: "#229BD8",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  ageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  needsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  needItem: {
    width: "45%", // Ubah lebar menjadi 30%
    aspectRatio: 1, // Tetapkan aspek rasio menjadi 1 (untuk menjaga gambar tetap proporsional)
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Mengurangi margin vertical untuk menjaga jarak antar konten
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    elevation: 2,
  },
  needItemImage: {
    width: "70%", // Mengatur lebar gambar menjadi 70% dari lebar konten
    aspectRatio: 1, // Tetapkan aspek rasio menjadi 1 (untuk menjaga gambar tetap proporsional)
    marginRight: 0, // Menghilangkan margin right pada gambar
  },
  needItemText: {
    fontSize: 13, // Mengurangi ukuran font untuk memuat teks dengan baik dalam ruang yang lebih kecil
    textAlign: "center", // Pusatkan teks
  },
});

export default KebutuhanAnak2;
