import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const SyaratDanKetentuan = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Syarat dan Ketentuan</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TentangAplikasi")}
          >
            <Icon
              name="arrow-left"
              size={25}
              color="white"
              style={{ marginLeft: -295 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          Syarat dan Ketentuan Aplikasi Pengumpulan Data Posyandu EPPGBM
        </Text>
        <Text style={styles.description}>Terakhir diperbarui : 31-05-2023</Text>
        <Text style={styles.description}>
          Mohon baca syarat dan ketentuan ini dengan seksama sebelum menggunakan
          Aplikasi Pengumpulan Data Posyandu EPPGBM ("Aplikasi"). Dengan
          menggunakan Aplikasi ini, Anda setuju untuk mematuhi syarat dan
          ketentuan berikut. Jika Anda tidak setuju dengan syarat dan ketentuan
          ini, mohon untuk tidak menggunakan Aplikasi kami.
        </Text>
        <Text style={styles.title1}>1. Penggunaan Aplikasi</Text>
        <Text style={styles.description}>
          Aplikasi Pengumpulan Data Posyandu EPPGBM disediakan untuk tujuan
          pengumpulan dan analisis data kesehatan anak di Posyandu. Anda dapat
          menggunakan Aplikasi ini untuk memasukkan data kesehatan anak, melihat
          informasi pertumbuhan anak, dan menerima rekomendasi edukasi terkait
          kesehatan anak.
        </Text>
        <Text style={styles.description}>
          Anda bertanggung jawab atas informasi yang Anda masukkan ke dalam
          Aplikasi. Pastikan untuk memberikan informasi yang akurat dan
          up-to-date tentang kesehatan anak.
        </Text>
        <Text style={styles.title1}>2. Kebijakan Privasi</Text>
        <Text style={styles.description}>
          Kami menghargai privasi Anda sebagai pengguna Aplikasi. Silakan
          merujuk ke Kebijakan Privasi kami untuk informasi lebih lanjut tentang
          bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi
          Anda.
        </Text>
        <Text style={styles.title1}>3. Batasan Tanggung Jawab</Text>
        <Text style={styles.description}>
          Aplikasi ini disediakan "apa adanya" dan "sebagaimana tersedia". Kami
          tidak memberikan jaminan apa pun, baik tersurat maupun tersirat,
          termasuk jaminan keakuratan, keandalan, atau ketersediaan Aplikasi.
          Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul
          akibat penggunaan Aplikasi ini.
        </Text>
        <Text style={styles.title1}>4. Perubahan Aplikasi</Text>
        <Text style={styles.description}>
          Kami berhak untuk mengubah, memperbarui, atau menghentikan Aplikasi
          ini tanpa pemberitahuan sebelumnya. Kami tidak bertanggung jawab atas
          kerugian atau kerusakan yang timbul akibat perubahan atau penghentian
          Aplikasi.
        </Text>
        <Text style={styles.title1}>5. Hak Kekayaan Intelektual</Text>
        <Text style={styles.description}>
          Aplikasi ini dilindungi oleh hak kekayaan intelektual kami dan
          pihak-pihak ketiga yang berwenang. Anda tidak diberikan lisensi atau
          hak atas hak kekayaan intelektual yang terkandung dalam Aplikasi ini,
          kecuali yang diizinkan oleh undang-undang yang berlaku.
        </Text>
        <Text style={styles.title1}>6. Hukum yang Berlaku</Text>
        <Text style={styles.description}>
          Syarat dan ketentuan ini tunduk pada hukum yang berlaku di negara
          kami. Setiap perselisihan yang timbul sehubungan dengan penggunaan
          Aplikasi ini akan diselesaikan oleh pengadilan yang berwenang di
          wilayah kami.
        </Text>
        <Text style={styles.description}>
          Jika Anda memiliki pertanyaan atau kekhawatiran tentang syarat dan
          ketentuan ini atau penggunaan Aplikasi, silakan hubungi kami melalui
          informasi kontak berikut:
        </Text>
        <Text style={styles.contactInfo}>KelvinPranata@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    zIndex: 1,
    marginBottom: 10,
    flexDirection: "row",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default SyaratDanKetentuan;
