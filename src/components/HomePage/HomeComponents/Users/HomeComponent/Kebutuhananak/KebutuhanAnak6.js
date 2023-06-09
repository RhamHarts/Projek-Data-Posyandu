import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const data = [
  {
    age: "49-54 bulan",
    needs: [
      {
        text: "Pengembangan keterampilan berpikir kritis",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/49-54-1.png"),
        width: 100,
        height: 65,
      },
      {
        text: "Peningkatan kemampuan membaca dan menulis",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/49-54-2.png"),
        width: 90,
        height: 50,
      },
      {
        text: "Stimulasi kreativitas dalam seni dan musik",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/49-54-3.png"),
        width: 60,
        height: 70,
      },
      {
        text: "Pengembangan keterampilan matematika dasar",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/49-54-4.png"),
        width: 100,
        height: 80,
      },
      {
        text: "Peningkatan pemahaman tentang lingkungan dan alam",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/49-54-5.png"),
        width: 110,
        height: 80,
      },
    ],
  },
  {
    age: "55-60 bulan",
    needs: [
      {
        text: "Pengembangan keterampilan kerja sama dan tim",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/55-60-1.png"),
        width: 90,
        height: 50,
      },
      {
        text: "Peningkatan kemandirian dalam tugas sehari-hari",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/55-60-2.png"),
        width: 100,
        height: 50,
      },
      {
        text: "Stimulasi pemikiran abstrak dan logika",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/55-60-3.png"),
        width: 100,
        height: 70,
      },
      {
        text: "Pengembangan keterampilan teknologi informasi",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/55-60-4.png"),
        width: 110,
        height: 70,
      },
      {
        text: "Peningkatan pemahaman sosial",
        image: require("../../../../../../images/Kebutuhanchildren/49-60/55-60-5.png"),
        width: 110,
        height: 60,
      },
    ],
  },
];

const KebutuhanAnak6 = () => {
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
      <Text style={styles.title}>Kebutuhan Anak 49-60 Bulan</Text>
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
    width: "32%", // Ubah lebar menjadi 30%
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

export default KebutuhanAnak6;
