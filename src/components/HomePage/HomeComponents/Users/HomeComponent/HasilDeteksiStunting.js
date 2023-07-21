import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const HasilDeteksiStunting = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tinggiBadan, beratBadan, umur, jenisKelamin } = route.params;

  const handleBackButton = () => {
    navigation.goBack();
  };

  const deteksiStunting = () => {
    const age = parseInt(umur);
    const height = parseFloat(tinggiBadan);
    const weight = parseFloat(beratBadan);

    if (age === 0 && jenisKelamin === "Laki-Laki") {
      const medianTB = 46.1;
      const medianBB = 2.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 1 && jenisKelamin === "Laki-Laki") {
      const medianTB = 50.8;
      const medianBB = 3.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 2 && jenisKelamin === "Laki-Laki") {
      const medianTB = 54.4;
      const medianBB = 4.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 3 && jenisKelamin === "Laki-Laki") {
      const medianTB = 57.3;
      const medianBB = 5.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 4 && jenisKelamin === "Laki-Laki") {
      const medianTB = 59.7;
      const medianBB = 5.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 5 && jenisKelamin === "Laki-Laki") {
      const medianTB = 61.7;
      const medianBB = 6.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 6 && jenisKelamin === "Laki-Laki") {
      const medianTB = 63.3;
      const medianBB = 6.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 7 && jenisKelamin === "Laki-Laki") {
      const medianTB = 64.8;
      const medianBB = 6.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 8 && jenisKelamin === "Laki-Laki") {
      const medianTB = 66.2;
      const medianBB = 6.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 9 && jenisKelamin === "Laki-Laki") {
      const medianTB = 67.5;
      const medianBB = 7.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 10 && jenisKelamin === "Laki-Laki") {
      const medianTB = 68.7;
      const medianBB = 7.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 11 && jenisKelamin === "Laki-Laki") {
      const medianTB = 69.9;
      const medianBB = 7.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 12 && jenisKelamin === "Laki-Laki") {
      const medianTB = 71.0;
      const medianBB = 7.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 13 && jenisKelamin === "Laki-Laki") {
      const medianTB = 72.1;
      const medianBB = 7.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 14 && jenisKelamin === "Laki-Laki") {
      const medianTB = 73.1;
      const medianBB = 8.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 15 && jenisKelamin === "Laki-Laki") {
      const medianTB = 74.1;
      const medianBB = 8.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 16 && jenisKelamin === "Laki-Laki") {
      const medianTB = 75.0;
      const medianBB = 8.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 17 && jenisKelamin === "Laki-Laki") {
      const medianTB = 76.0;
      const medianBB = 8.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 18 && jenisKelamin === "Laki-Laki") {
      const medianTB = 76.9;
      const medianBB = 8.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 19 && jenisKelamin === "Laki-Laki") {
      const medianTB = 77.7;
      const medianBB = 8.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 20 && jenisKelamin === "Laki-Laki") {
      const medianTB = 78.6;
      const medianBB = 9.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }
      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 21 && jenisKelamin === "Laki-Laki") {
      const medianTB = 79.4;
      const medianBB = 9.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 22 && jenisKelamin === "Laki-Laki") {
      const medianTB = 80.2;
      const medianBB = 9.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 23 && jenisKelamin === "Laki-Laki") {
      const medianTB = 81.0;
      const medianBB = 9.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 24 && jenisKelamin === "Laki-Laki") {
      const medianTB = 81.0;
      const medianBB = 9.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 25 && jenisKelamin === "Laki-Laki") {
      const medianTB = 81.7;
      const medianBB = 9.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 26 && jenisKelamin === "Laki-Laki") {
      const medianTB = 82.5;
      const medianBB = 10.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 27 && jenisKelamin === "Laki-Laki") {
      const medianTB = 83.1;
      const medianBB = 10.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 28 && jenisKelamin === "Laki-Laki") {
      const medianTB = 83.8;
      const medianBB = 10.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 29 && jenisKelamin === "Laki-Laki") {
      const medianTB = 84.5;
      const medianBB = 10.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 30 && jenisKelamin === "Laki-Laki") {
      const medianTB = 85.1;
      const medianBB = 10.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 31 && jenisKelamin === "Laki-Laki") {
      const medianTB = 85.7;
      const medianBB = 10.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 32 && jenisKelamin === "Laki-Laki") {
      const medianTB = 86.4;
      const medianBB = 10.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 33 && jenisKelamin === "Laki-Laki") {
      const medianTB = 86.9;
      const medianBB = 10.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 34 && jenisKelamin === "Laki-Laki") {
      const medianTB = 87.5;
      const medianBB = 11.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 35 && jenisKelamin === "Laki-Laki") {
      const medianTB = 88.1;
      const medianBB = 11.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 36 && jenisKelamin === "Laki-Laki") {
      const medianTB = 88.7;
      const medianBB = 11.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 37 && jenisKelamin === "Laki-Laki") {
      const medianTB = 89.2;
      const medianBB = 11.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 38 && jenisKelamin === "Laki-Laki") {
      const medianTB = 89.8;
      const medianBB = 11.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 39 && jenisKelamin === "Laki-Laki") {
      const medianTB = 90.3;
      const medianBB = 11.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 40 && jenisKelamin === "Laki-Laki") {
      const medianTB = 90.9;
      const medianBB = 11.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 41 && jenisKelamin === "Laki-Laki") {
      const medianTB = 91.4;
      const medianBB = 11.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 42 && jenisKelamin === "Laki-Laki") {
      const medianTB = 91.9;
      const medianBB = 12.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 43 && jenisKelamin === "Laki-Laki") {
      const medianTB = 92.4;
      const medianBB = 12.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 44 && jenisKelamin === "Laki-Laki") {
      const medianTB = 93.0;
      const medianBB = 12.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 45 && jenisKelamin === "Laki-Laki") {
      const medianTB = 93.5;
      const medianBB = 12.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 46 && jenisKelamin === "Laki-Laki") {
      const medianTB = 94.0;
      const medianBB = 12.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 47 && jenisKelamin === "Laki-Laki") {
      const medianTB = 94.4;
      const medianBB = 12.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 48 && jenisKelamin === "Laki-Laki") {
      const medianTB = 94.9;
      const medianBB = 12.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 49 && jenisKelamin === "Laki-Laki") {
      const medianTB = 95.4;
      const medianBB = 12.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 50 && jenisKelamin === "Laki-Laki") {
      const medianTB = 95.9;
      const medianBB = 12.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 51 && jenisKelamin === "Laki-Laki") {
      const medianTB = 96.4;
      const medianBB = 13.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 52 && jenisKelamin === "Laki-Laki") {
      const medianTB = 96.9;
      const medianBB = 13.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 53 && jenisKelamin === "Laki-Laki") {
      const medianTB = 97;
      const medianBB = 13.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 54 && jenisKelamin === "Laki-Laki") {
      const medianTB = 97.8;
      const medianBB = 13.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 55 && jenisKelamin === "Laki-Laki") {
      const medianTB = 98.3;
      const medianBB = 13.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 56 && jenisKelamin === "Laki-Laki") {
      const medianTB = 98.8;
      const medianBB = 13.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 57 && jenisKelamin === "Laki-Laki") {
      const medianTB = 99.3;
      const medianBB = 13.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 58 && jenisKelamin === "Laki-Laki") {
      const medianTB = 99.7;
      const medianBB = 13.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 59 && jenisKelamin === "Laki-Laki") {
      const medianTB = 100.2;
      const medianBB = 14.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 60 && jenisKelamin === "Laki-Laki") {
      const medianTB = 100.7;
      const medianBB = 14.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 0 && jenisKelamin === "Perempuan") {
      const medianTB = 45.4;
      const medianBB = 2.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 1 && jenisKelamin === "Perempuan") {
      const medianTB = 49.8;
      const medianBB = 3.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 2 && jenisKelamin === "Perempuan") {
      const medianTB = 53.0;
      const medianBB = 3.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatu = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 3 && jenisKelamin === "Perempuan") {
      const medianTB = 55.6;
      const medianBB = 4.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 4 && jenisKelamin === "Perempuan") {
      const medianTB = 57.8;
      const medianBB = 5.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 5 && jenisKelamin === "Perempuan") {
      const medianTB = 59.6;
      const medianBB = 5.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 6 && jenisKelamin === "Perempuan") {
      const medianTB = 61.2;
      const medianBB = 5.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 7 && jenisKelamin === "Perempuan") {
      const medianTB = 62.7;
      const medianBB = 6.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 8 && jenisKelamin === "Perempuan") {
      const medianTB = 64.0;
      const medianBB = 6.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 9 && jenisKelamin === "Perempuan") {
      const medianTB = 65.3;
      const medianBB = 6.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 10 && jenisKelamin === "Perempuan") {
      const medianTB = 66.5;
      const medianBB = 6.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 11 && jenisKelamin === "Perempuan") {
      const medianTB = 67.7;
      const medianBB = 6.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 12 && jenisKelamin === "Perempuan") {
      const medianTB = 68.9;
      const medianBB = 7.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 13 && jenisKelamin === "Perempuan") {
      const medianTB = 70.0;
      const medianBB = 7.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 14 && jenisKelamin === "Perempuan") {
      const medianTB = 71.0;
      const medianBB = 7.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 15 && jenisKelamin === "Perempuan") {
      const medianTB = 72.0;
      const medianBB = 7.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 16 && jenisKelamin === "Perempuan") {
      const medianTB = 73.0;
      const medianBB = 7.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 17 && jenisKelamin === "Perempuan") {
      const medianTB = 74.0;
      const medianBB = 7.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 18 && jenisKelamin === "Perempuan") {
      const medianTB = 74.9;
      const medianBB = 8.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 19 && jenisKelamin === "Perempuan") {
      const medianTB = 75.8;
      const medianBB = 8.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 20 && jenisKelamin === "Perempuan") {
      const medianTB = 76.7;
      const medianBB = 8.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }
      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 21 && jenisKelamin === "Perempuan") {
      const medianTB = 77.5;
      const medianBB = 8.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 22 && jenisKelamin === "Perempuan") {
      const medianTB = 78.4;
      const medianBB = 8.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 23 && jenisKelamin === "Perempuan") {
      const medianTB = 79.2;
      const medianBB = 8.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 24 && jenisKelamin === "Perempuan") {
      const medianTB = 79.3;
      const medianBB = 9.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 25 && jenisKelamin === "Perempuan") {
      const medianTB = 80.0;
      const medianBB = 9.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 26 && jenisKelamin === "Perempuan") {
      const medianTB = 80.8;
      const medianBB = 9.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 27 && jenisKelamin === "Perempuan") {
      const medianTB = 81.5;
      const medianBB = 9.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 28 && jenisKelamin === "Perempuan") {
      const medianTB = 82.2;
      const medianBB = 9.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 29 && jenisKelamin === "Perempuan") {
      const medianTB = 82.9;
      const medianBB = 9.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 30 && jenisKelamin === "Perempuan") {
      const medianTB = 83.6;
      const medianBB = 10.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 31 && jenisKelamin === "Perempuan") {
      const medianTB = 84.3;
      const medianBB = 10.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 32 && jenisKelamin === "Perempuan") {
      const medianTB = 84.9;
      const medianBB = 10.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 33 && jenisKelamin === "Perempuan") {
      const medianTB = 85.6;
      const medianBB = 10.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 34 && jenisKelamin === "Perempuan") {
      const medianTB = 86.2;
      const medianBB = 10.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 35 && jenisKelamin === "Perempuan") {
      const medianTB = 86.8;
      const medianBB = 10.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 36 && jenisKelamin === "Perempuan") {
      const medianTB = 87.4;
      const medianBB = 10.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 37 && jenisKelamin === "Perempuan") {
      const medianTB = 88.0;
      const medianBB = 10.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 38 && jenisKelamin === "Perempuan") {
      const medianTB = 88.6;
      const medianBB = 11.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 39 && jenisKelamin === "Perempuan") {
      const medianTB = 89.2;
      const medianBB = 11.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 40 && jenisKelamin === "Perempuan") {
      const medianTB = 89.8;
      const medianBB = 11.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 41 && jenisKelamin === "Perempuan") {
      const medianTB = 90.4;
      const medianBB = 11.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 42 && jenisKelamin === "Perempuan") {
      const medianTB = 90.9;
      const medianBB = 11.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 43 && jenisKelamin === "Perempuan") {
      const medianTB = 91.5;
      const medianBB = 11.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 44 && jenisKelamin === "Perempuan") {
      const medianTB = 92.0;
      const medianBB = 11.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 45 && jenisKelamin === "Perempuan") {
      const medianTB = 92.5;
      const medianBB = 12.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 46 && jenisKelamin === "Perempuan") {
      const medianTB = 93.1;
      const medianBB = 12.1;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 47 && jenisKelamin === "Perempuan") {
      const medianTB = 93.6;
      const medianBB = 12.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 48 && jenisKelamin === "Perempuan") {
      const medianTB = 94.1;
      const medianBB = 12.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 49 && jenisKelamin === "Perempuan") {
      const medianTB = 94.6;
      const medianBB = 12.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 50 && jenisKelamin === "Perempuan") {
      const medianTB = 95.1;
      const medianBB = 12.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 51 && jenisKelamin === "Perempuan") {
      const medianTB = 95.6;
      const medianBB = 12.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 52 && jenisKelamin === "Perempuan") {
      const medianTB = 96.1;
      const medianBB = 12.8;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 53 && jenisKelamin === "Perempuan") {
      const medianTB = 96.6;
      const medianBB = 12.9;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 54 && jenisKelamin === "Perempuan") {
      const medianTB = 97.1;
      const medianBB = 13.0;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 55 && jenisKelamin === "Perempuan") {
      const medianTB = 97.6;
      const medianBB = 13.2;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 56 && jenisKelamin === "Perempuan") {
      const medianTB = 98.1;
      const medianBB = 13.3;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 57 && jenisKelamin === "Perempuan") {
      const medianTB = 98.5;
      const medianBB = 13.4;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 58 && jenisKelamin === "Perempuan") {
      const medianTB = 99.0;
      const medianBB = 13.5;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 59 && jenisKelamin === "Perempuan") {
      const medianTB = 99.5;
      const medianBB = 13.6;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    } else if (age === 60 && jenisKelamin === "Perempuan") {
      const medianTB = 99.9;
      const medianBB = 13.7;

      let tinggiBadanStatus = null;
      let beratBadanStatus = null;

      if (height < medianTB) {
        tinggiBadanStatus = "Tinggi Badan Tidak Normal";
      } else if (height >= medianTB) {
        tinggiBadanStatus = "Tinggi Badan Normal";
      }

      if (weight < medianBB) {
        beratBadanStatus = "Berat Badan Tidak Normal";
      } else if (weight >= medianBB) {
        beratBadanStatus = "Berat Badan Normal";
      }

      return {
        tinggiBadanStatus,
        beratBadanStatus,
      };
    }

    return null;
  };

  const hasilDeteksi = deteksiStunting();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Icon
          name="arrow-left"
          size={25}
          color="white"
          style={{ marginLeft: -75 }}
          onPress={handleBackButton}
        />
        <Text style={styles.titleText}>Hasil Deteksi Gizi</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Umur: {umur} Bulan</Text>
        <Text style={styles.resultText}>Jenis Kelamin: {jenisKelamin}</Text>
        <Text style={styles.resultText}>Tinggi Badan: {tinggiBadan}cm</Text>
        <Text style={styles.resultText}>Berat Badan: {beratBadan}kg</Text>
        <Text style={styles.resultText}>
          Status Tinggi Badan: {hasilDeteksi?.tinggiBadanStatus || "-"}
        </Text>
        <Text style={styles.resultText}>
          Status Berat Badan: {hasilDeteksi?.beratBadanStatus || "-"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6fd" },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    zIndex: 1,
    marginBottom: 30,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 75,
    color: "#fff",
  },
  resultContainer: {
    flex: 1,
    marginHorizontal: 25,
  },
  resultText: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default HasilDeteksiStunting;
