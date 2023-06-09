import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function PusatBantuan() {
  const navigation = useNavigation();
  const [expandedMenu, setExpandedMenu] = useState("");

  const handlePress = (menu) => {
    setExpandedMenu(menu === expandedMenu ? "" : menu);
  };

  const renderExpandedContent = (menu) => {
    if (menu === expandedMenu) {
      let content = "";

      switch (menu) {
        case "1":
          content = "Ini adalah halaman kebijakan privasi.";
          break;
        case "2":
          content = "Ini adalah halaman syarat dan ketentuan.";
          break;
        case "3":
          content = "Ini adalah halaman tentang aplikasi.";
          break;
        case "4":
          content = "Ini adalah halaman kontak kami.";
          break;
        case "5":
          content = "Ini adalah halaman kontak kami.";
          break;
        case "6":
          content = "Ini adalah halaman kontak kami.";
          break;
        default:
          content = "";
          break;
      }

      return (
        <View style={{ padding: 10, alignItems: "center" }}>
          <Text>{content}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <View
        style={{
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
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            style={{ marginLeft: -115 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Pusat Bantuan
        </Text>
      </View>
      <TouchableOpacity onPress={() => handlePress("1")}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ left: 10 }}>Laporkan bug atau masalah</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {expandedMenu === "1" ? (
              <Icon name="arrow-down-drop-circle" size={30} color="black" />
            ) : (
              <Icon name="arrow-right-drop-circle" size={30} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {renderExpandedContent("1")}

      <TouchableOpacity onPress={() => handlePress("2")}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ left: 10 }}>Bagaimana cara input data</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {expandedMenu === "2" ? (
              <Icon name="arrow-down-drop-circle" size={30} color="black" />
            ) : (
              <Icon name="arrow-right-drop-circle" size={30} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {renderExpandedContent("2")}

      <TouchableOpacity onPress={() => handlePress("3")}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ left: 10 }}>
              Bagaimana cara membuat akun untuk aplikasi ini
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {expandedMenu === "3" ? (
              <Icon name="arrow-down-drop-circle" size={30} color="black" />
            ) : (
              <Icon name="arrow-right-drop-circle" size={30} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {renderExpandedContent("3")}

      <TouchableOpacity onPress={() => handlePress("4")}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ left: 10 }}>
              Bagaimana cara agar tidak menjadi jamet
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {expandedMenu === "4" ? (
              <Icon name="arrow-down-drop-circle" size={30} color="black" />
            ) : (
              <Icon name="arrow-right-drop-circle" size={30} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {renderExpandedContent("4")}

      <TouchableOpacity onPress={() => handlePress("5")}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ left: 10 }}>
              Bagaimana cara agar terhindar dari fitnah dajjal
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {expandedMenu === "5" ? (
              <Icon name="arrow-down-drop-circle" size={30} color="black" />
            ) : (
              <Icon name="arrow-right-drop-circle" size={30} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {renderExpandedContent("5")}

      <TouchableOpacity onPress={() => handlePress("6")}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 0.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ left: 10 }}>
              Bagaimana cara agar titit bisa berputar seperti baling-baling
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {expandedMenu === "6" ? (
              <Icon name="arrow-down-drop-circle" size={30} color="black" />
            ) : (
              <Icon name="arrow-right-drop-circle" size={30} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {renderExpandedContent("6")}
    </View>
  );
}