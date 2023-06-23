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

const KebijakanPrivasi = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Kebijakan Privasi</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TentangAplikasi")}
          >
            <Icon
              name="arrow-left"
              size={25}
              color="white"
              style={{ marginLeft: -275 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          Kebijakan Privasi Aplikasi Pengumpulan Data Posyandu EPPGBM
        </Text>
        <Text style={styles.description}>Terakhir diperbarui : 31-05-2023</Text>
        <Text style={styles.description}>
          Kami menghargai privasi Anda sebagai pengguna aplikasi pengumpulan
          data Posyandu EPPGBM ("Aplikasi"). Kebijakan privasi ini menjelaskan
          bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi
          Anda. Dengan menggunakan Aplikasi, Anda setuju untuk mematuhi
          kebijakan privasi ini. Jika Anda tidak setuju dengan kebijakan ini,
          mohon untuk tidak menggunakan Aplikasi kami.
        </Text>
        <Text style={styles.title1}>1.Pengumpulan Data</Text>
        <Text style={styles.bulletPoint}>
          - Informasi identifikasi pribadi (nama, alamat, nomor telepon, dll.).
        </Text>
        <Text style={styles.bulletPoint}>
          - Data kesehatan, termasuk informasi pertumbuhan anak dan riwayat
          kesehatan.
        </Text>
        <Text style={styles.bulletPoint}>
          - Data geografis yang berkaitan dengan lokasi pengguna untuk
          menyediakan informasi yang relevan secara geografis.
        </Text>
        <Text style={styles.description}>
          Kami hanya akan mengumpulkan data yang diperlukan untuk tujuan
          aplikasi, dan tidak akan menggunakan data tersebut untuk tujuan lain
          tanpa persetujuan Anda.
        </Text>
        <Text style={styles.title1}>2.Penggunaan Data</Text>
        <Text style={styles.bulletPoint}>
          - Menyediakan informasi pertumbuhan anak, rekomendasi edukasi, dan
          layanan terkait kesehatan anak.
        </Text>
        <Text style={styles.bulletPoint}>
          - Meningkatkan Aplikasi dan layanan kami.
        </Text>
        <Text style={styles.bulletPoint}>
          - Melakukan analisis dan penelitian untuk tujuan statistik dan
          keperluan peningkatan kualitas layanan.
        </Text>
        <Text style={styles.bulletPoint}>
          - Mematuhi kewajiban hukum dan peraturan yang berlaku.
        </Text>
        <Text style={styles.description}>
          Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda
          kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kasus yang
          diizinkan oleh hukum atau jika diperlukan untuk tujuan penelitian atau
          pencegahan penyakit.
        </Text>
        <Text style={styles.title1}>3.Keamanan Data</Text>
        <Text style={styles.description}>
          Kami menjaga keamanan data pribadi Anda dan mengambil langkah-langkah
          yang wajar untuk melindunginya dari akses yang tidak sah, penggunaan
          yang tidak sah, atau pengungkapan yang tidak sah. Kami menggunakan
          metode keamanan yang sesuai untuk melindungi data Anda, termasuk
          enkripsi data, pemantauan akses, dan tindakan keamanan lainnya.
        </Text>
        <Text style={styles.description}>
          Namun, perlu diingat bahwa tidak ada metode transmisi data melalui
          internet atau metode penyimpanan elektronik yang sepenuhnya aman. Oleh
          karena itu, kami tidak dapat menjamin keamanan absolut data yang Anda
          kirimkan melalui Aplikasi, dan pengiriman data dilakukan dengan risiko
          Anda sendiri.
        </Text>
        <Text style={styles.title1}>4.Hak Privasi Pengguna</Text>
        <Text style={styles.description}>
          Anda memiliki hak untuk mengakses, mengoreksi, dan menghapus data
          pribadi Anda yang kami simpan. Anda juga memiliki hak untuk meminta
          agar kami tidak menggunakan data pribadi Anda untuk tujuan tertentu.
        </Text>
        <Text style={styles.description}>
          Anda dapat mengelola pengaturan privasi Anda melalui opsi yang
          tersedia dalam Aplikasi atau dengan menghubungi kami melalui informasi
          kontak yang tercantum di bagian akhir kebijakan ini.
        </Text>
        <Text style={styles.title1}>5.Cookie dan Teknologi Pelacakan</Text>
        <Text style={styles.description}>
          Kami menggunakan cookie dan teknologi pelacakan serupa untuk
          mengumpulkan informasi dan meningkatkan pengalaman pengguna dalam
          Aplikasi. Cookie adalah file teks kecil yang ditempatkan pada
          perangkat Anda untuk mengumpulkan informasi standar tentang kebiasaan
          penggunaan internet.
        </Text>
        <Text style={styles.description}>
          Anda dapat mengelola pengaturan cookie melalui pengaturan peramban
          Anda. Harap dicatat bahwa dengan menonaktifkan cookie, beberapa fitur
          Aplikasi mungkin tidak berfungsi dengan baik.
        </Text>
        <Text style={styles.description}>Pembaruan Kebijakan Privasi</Text>
        <Text style={styles.description}>
          Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Setiap
          perubahan yang signifikan akan diberitahukan melalui Aplikasi atau
          melalui kontak yang Anda berikan kepada kami. Pastikan untuk membaca
          kebijakan privasi ini secara berkala untuk tetap memperbarui diri Anda
          tentang informasi yang kami kumpulkan dan bagaimana kami
          menggunakannya.
        </Text>
        <Text style={styles.description}>
          Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan
          privasi ini atau penggunaan data pribadi Anda, silakan hubungi kami
          melalui informasi kontak berikut:
        </Text>
        <Text style={styles.contactInfo}>amonisasi@gmail.com</Text>
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
  bulletPoint: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default KebijakanPrivasi;
