import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const data = [
  {
    age: "25-30 bulan",
    needs: [
      {
        text: "Nutrisi dan makanan seimbang",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/25-30-1.png"),
        width: 100,
        height: 80,
      },
      {
        text: "Perkembangan motorik yang lebih kompleks",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/25-30-2.png"),
        width: 100,
        height: 70,
      },
      {
        text: "Peningkatan kemampuan bahasa dan komunikasi",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/25-30-3.png"),
        width: 70,
        height: 90,
      },
      {
        text: "Perkembangan keterampilan sosial dan emosional",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/25-30-4.png"),
        width: 100,
        height: 80,
      },
      {
        text: "Mendorong kemandirian",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/31-36-1.png"),
        width: 110,
        height: 80,
      },
    ],
  },
  {
    age: "31-36 bulan",
    needs: [
      {
        text: "Variasi makanan dengan nutrisi yang mencukupi",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/31-36-1.png"),
        width: 90,
        height: 50,
      },
      {
        text: "Perkembangan keterampilan motorik halus",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/31-36-2.png"),
        width: 100,
        height: 65,
      },
      {
        text: "Kemampuan bahasa yang lebih maju",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/31-36-3.png"),
        width: 100,
        height: 70,
      },
      {
        text: "Bermain dengan aturan dan bekerja sama dengan anak lain",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/31-36-4.png"),
        width: 110,
        height: 70,
      },
      {
        text: "Mendorong kemandirian dalam aktivitas sehari-hari",
        image: require("../../../../../../images/Kebutuhanchildren/25-36/31-36-5.png"),
        width: 110,
        height: 80,
      },
    ],
  },
];

const KebutuhanAnak3 = () => {
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
      <Text style={styles.title}>Kebutuhan Anak 25-36 Bulan</Text>
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

export default KebutuhanAnak3;
