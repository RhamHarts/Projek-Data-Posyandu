import { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const UbahPassword = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");

  return (
    <View>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{ marginLeft: -115 }}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Ubah Password</Text>
      </View>

      <TextInput
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        style={styles.textInputBox}
        placeholder="Masukkan Password Lama"
        secureTextEntry={true}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.textInputBox}
        placeholder="Masukkan Password Baru"
        secureTextEntry={true}
      />
      <TextInput
        value={ulangiPassword}
        onChangeText={(text) => setUlangiPassword(text)}
        style={styles.textInputBox}
        placeholder="Masukkan Ulang Password Baru Anda"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ubah Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: "#fff",
    textAlign: "center",
  },
  textInputBox: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 40,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    color: "grey",
    padding: 15,
    borderColor: "grey",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    elevation: 2,
  },
  buttonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
});

export default UbahPassword;
