import React, { useEffect, useState } from "react";
import { View, Text, Button, Linking, TouchableOpacity } from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  applyActionCode,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const VerifikasiLogin = () => {
  const [verificationStatus, setVerificationStatus] =
    useState("Belum Diverifikasi");
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        // Pengguna telah memverifikasi email
        setVerificationStatus("Diverifikasi");
        navigation.navigate("SignIn"); // Navigasi ke halaman login jika email sudah diverifikasi
      } else {
        // Pengguna belum memverifikasi email
        setVerificationStatus("Belum Diverifikasi");
      }
    });

    return () => unsubscribe(); // Membersihkan langganan saat komponen dilepas (unmounted)
  }, []);

  const handleResendVerification = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      sendEmailVerification(user)
        .then(() => {
          console.log("Tautan verifikasi telah dikirim ulang");
          // Tambahkan logika tampilan atau notifikasi sukses pengiriman ulang tautan verifikasi
        })
        .catch((error) => {
          console.log("Gagal mengirim ulang tautan verifikasi:", error);
          // Tambahkan logika tampilan atau notifikasi gagal pengiriman ulang tautan verifikasi
        });
    }
  };

  const handleOpenEmailApp = () => {
    Linking.openURL("mailto:"); // Membuka aplikasi email pengguna
  };

  const handleVerifyLinkClick = () => {
    const auth = getAuth();
    const actionCode = getParameterFromURL("oobCode");

    applyActionCode(auth, actionCode)
      .then(() => {
        console.log("Verifikasi email berhasil");
        setVerificationStatus("Diverifikasi");
        navigation.navigate("SignIn"); // Navigasi ke halaman login setelah verifikasi berhasil
      })
      .catch((error) => {
        console.log("Verifikasi email gagal:", error);
        // Tambahkan logika tampilan atau notifikasi gagal verifikasi email
      });
  };

  const getParameterFromURL = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Verifikasi Email Anda
      </Text>
      <Text style={{ marginBottom: 20 }}>
        Silakan klik link yang ada di email kamu untuk verifikasi akun aplikasi
        ini.
      </Text>
      {verificationStatus === "Belum Diverifikasi" && (
        <Button
          title="Kirim ulang tautan verifikasi"
          onPress={handleResendVerification}
        />
      )}
      {verificationStatus === "Belum Diverifikasi" && (
        <Text style={{ marginTop: 20 }}>
          Jika Anda tidak menemukan email verifikasi, periksa folder spam atau{" "}
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={handleOpenEmailApp}
          >
            klik di sini untuk membuka aplikasi email Anda
          </Text>
          .
        </Text>
      )}
      {verificationStatus === "Belum Diverifikasi" && (
        <Text style={{ marginTop: 20 }}>
          Jika Anda sudah mengklik link yang ada di email Anda, silakan{" "}
          <TouchableOpacity
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={handleVerifyLinkClick}
          >
            verifikasi
          </TouchableOpacity>
          .
        </Text>
      )}
      {verificationStatus === "Diverifikasi" && (
        <Text style={{ marginTop: 20 }}>
          Anda telah berhasil memverifikasi email Anda. Silakan{" "}
          <TouchableOpacity
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            login
          </TouchableOpacity>
          .
        </Text>
      )}
    </View>
  );
};

export default VerifikasiLogin;
