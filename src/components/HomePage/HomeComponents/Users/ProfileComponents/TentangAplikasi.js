import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function TentangAplikasi() {
  const navigation = useNavigation();
  const [expandedMenu, setExpandedMenu] = useState("");

  const handlePress = (menu) => {
    setExpandedMenu(menu === expandedMenu ? "" : menu);
  };

  const renderExpandedContent = (menu) => {
    if (menu === expandedMenu) {
      let content = "";

      switch (menu) {
        case "tentang":
          content = "Versi saat ini adalah Versi 1.0.0";
          break;
        case "kontak":
          content =
            "Untuk pertanyaan lebih lanjut hubungi kami ke email Amonisasi1@gmail.com.";
          break;
        default:
          content = "";
          break;
      }

      return (
        <View style={{ padding: 10 }}>
          <Text>{content}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            style={{ marginLeft: -115 }}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Tentang Aplikasi</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("KebijakanPrivasi")}
        >
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Icon name="shield-lock" size={30} color="#499ff5" />
            </View>
            <View>
              <Text style={styles.contentText}>Kebijakan Privasi</Text>
            </View>
            <View style={styles.content2}>
              <Icon name="arrow-right-drop-circle" size={30} color="#499ff5" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SyaratDanKetentuan")}
        >
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Icon name="format-list-bulleted" size={30} color="#499ff5" />
            </View>
            <View>
              <Text style={styles.contentText}>Syarat Dan Ketentuan</Text>
            </View>
            <View style={styles.content2}>
              <Icon name="arrow-right-drop-circle" size={30} color="#499ff5" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress("tentang")}>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Icon name="application-cog" size={30} color="#499ff5" />
            </View>
            <View>
              <Text style={styles.contentText}>Tentang Aplikasi</Text>
            </View>
            <View style={styles.content2}>
              {expandedMenu === "tentang" ? (
                <Icon name="arrow-down-drop-circle" size={30} color="#499ff5" />
              ) : (
                <Icon
                  name="arrow-right-drop-circle"
                  size={30}
                  color="#499ff5"
                />
              )}
            </View>
          </View>
        </TouchableOpacity>

        {renderExpandedContent("tentang")}

        <TouchableOpacity onPress={() => handlePress("kontak")}>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Icon name="phone-in-talk" size={30} color="#499ff5" />
            </View>
            <View>
              <Text style={styles.contentText}>Kontak Kami</Text>
            </View>
            <View style={styles.content2}>
              {expandedMenu === "kontak" ? (
                <Icon name="arrow-down-drop-circle" size={30} color="#499ff5" />
              ) : (
                <Icon
                  name="arrow-right-drop-circle"
                  size={30}
                  color="#499ff5"
                />
              )}
            </View>
          </View>
        </TouchableOpacity>

        {renderExpandedContent("kontak")}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: "100%" },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 20,
    backgroundColor: "#03a9f4",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    width: "100%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  contentContainer: {
    borderColor: "grey",
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  content: { margin: 10, marginRight: 5 },
  contentText: { fontWeight: "bold", color: "#499ff5", left: 10 },
  content2: { flex: 1, alignItems: "flex-end" },
});
