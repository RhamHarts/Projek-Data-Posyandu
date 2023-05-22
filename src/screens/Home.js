import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerMenu}>
          <Image
            source={require("../images/bayi.png")}
            style={{
              width: 100,
              height: 150,
            }}
          />
          <Text style={{ fontSize: 16, bottom: 35 }}>Tumbuh Kembang Anak</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Halo, Pengguna!</Text>
          <Text style={styles.subtitleText}>
            Apa yang bisa kami bantu hari ini?
          </Text>
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../images/stunting.png")}
              style={{
                width: 130,
                height: 130,
                marginTop: 0,
              }}
            />
            <Text style={{ fontSize: 16, bottom: 10 }}>Deteksi Stunting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../images/dokter.png")}
              style={{
                width: 200,
                height: 200,
                marginTop: 120,
              }}
            />
            <Text style={{ fontSize: 16, bottom: 105 }}>Data Kader</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../images/gizi-anak.png")}
              style={{
                width: 200,
                height: 200,
                marginTop: 10,
              }}
            />
            <Text style={{ fontSize: 16, bottom: 50 }}>Kebutuhan Anak</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../images/eppgbm.png")}
              style={{
                width: 150,
                height: 150,
                marginTop: 10,
              }}
            />
            <Text style={{ fontSize: 16, bottom: 25 }}>E-PPGBM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 25,
  },
  headerContainer: {
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 0,
    backgroundColor: "#229BD8",
  },
  headerMenu: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    elevation: 2,
    marginRight: 5,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  greetingContainer: {
    marginBottom: 16,
  },
  greetingText: {
    marginBottom: 3,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 16,
    color: "gray",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  menuItem: {
    width: "48%",
    height: 135,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    elevation: 4,
  },
});
export default HomeScreen;
