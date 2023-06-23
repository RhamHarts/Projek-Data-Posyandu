import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const data = [
  {
    age: "0-3 bulan",
    needs: [
      {
        text: "Makanan ASI atau susu formula",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/0-3-1.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Tidur yang cukup",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/0-3-2.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Stimulasi visual dan pendengaran",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/0-3-3.png"),
        width: 100,
        height: 100,
      },
    ],
  },
  {
    age: "3-6 bulan",
    needs: [
      {
        text: "Pemberian makanan pendamping ASI",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/3-6-1.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Pertumbuhan dan perkembangan fisik",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/3-6-2.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Stimulasi tindakan merangkak",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/3-6-3.png"),
        width: 100,
        height: 100,
      },
    ],
  },
  {
    age: "6-9 bulan",
    needs: [
      {
        text: "Pemberian makanan padat",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/6-9-1.png"),
        width: 100,
        height: 100,
      },

      {
        text: "Perkembangan motorik seperti duduk dan berdiri",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/6-9-2.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Stimulasi sensorik",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/6-9-3.png"),
        width: 100,
        height: 100,
      },
    ],
  },
  {
    age: "10-12 bulan",
    needs: [
      {
        text: "Pemberian makanan yang beragam",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/9-12-1.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Perkembangan bahasa dan sosial",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/9-12-2.png"),
        width: 100,
        height: 100,
      },
      {
        text: "Stimulasi kognitif",
        image: require("../../../../../../images/Kebutuhanchildren/0-12/9-12-3.png"),
        width: 100,
        height: 100,
      },
    ],
  },
];

const KebutuhanAnak1 = () => {
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
      <Text style={styles.title}>Kebutuhan Anak 0-12 Bulan</Text>
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
    fontSize: 12, // Mengurangi ukuran font untuk memuat teks dengan baik dalam ruang yang lebih kecil
    textAlign: "center", // Pusatkan teks
  },
});

export default KebutuhanAnak1;
