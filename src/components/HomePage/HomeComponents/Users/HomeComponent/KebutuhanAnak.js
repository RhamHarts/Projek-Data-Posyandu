import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function KebutuhanAnak() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            padding: 10,
            backgroundColor: "#03a9f4",
            alignSelf: "stretch",
            borderBottomWidth: 1,
            borderBottomColor: "black",
            zIndex: 1,
            marginBottom: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("TabHome")}>
            <Icon
              name="arrow-left"
              size={25}
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
            Kebutuhan Anak
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            bottom: 100,
          }}
        >
          <Image
            source={require("../../../../../images/anakklereng.png")}
            // source={require("./assets/anakklereng.png")}
            style={{
              width: 430,
              height: 300,
            }}
          />

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate("KebutuhanAnak1")}
          >
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                height: 100,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.3,
              }}
            >
              <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                <Image
                  source={require("../../../../../images/1a.png")}
                  // source={require("./assets/1a.png")}
                  style={{
                    width: 120,
                    height: 100,
                  }}
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text>Kebutuhan Anak :</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>0-12 bulan</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate("KebutuhanAnak2")}
          >
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                height: 100,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.3,
              }}
            >
              <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                <Image
                  source={require("../../../../../images/2b.png")}
                  // source={require("./assets/2b.png")}
                  style={{
                    width: 100,
                    height: 90,
                  }}
                />
              </View>
              <View style={{ marginLeft: 40 }}>
                <Text>Kebutuhan Anak :</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>13-24 bulan</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate("KebutuhanAnak3")}
          >
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                height: 100,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.3,
              }}
            >
              <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                <Image
                  source={require("../../../../../images/3c.png")}
                  // source={require("./assets/3c.png")}
                  style={{
                    width: 100,
                    height: 90,
                  }}
                />
              </View>
              <View style={{ marginLeft: 42 }}>
                <Text>Kebutuhan Anak :</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>25-36 bulan</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate("KebutuhanAnak4")}
          >
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                height: 100,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.3,
              }}
            >
              <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                <Image
                  source={require("../../../../../images/4c.png")}
                  // source={require("./assets/4c.png")}
                  style={{
                    width: 85,
                    height: 85,
                  }}
                />
              </View>
              <View style={{ marginLeft: 55 }}>
                <Text>Kebutuhan Anak :</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>37-48 bulan</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate("KebutuhanAnak6")}
          >
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                height: 100,
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.3,
              }}
            >
              <View style={{ margin: 10, padding: 10, marginRight: 10 }}>
                <Image
                  source={require("../../../../../images/4d.png")}
                  // source={require("./assets/4d.png")}
                  style={{
                    width: 80,
                    height: 90,
                  }}
                />
              </View>
              <View style={{ marginLeft: 60 }}>
                <Text>Kebutuhan Anak :</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>49-60 bulan</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
