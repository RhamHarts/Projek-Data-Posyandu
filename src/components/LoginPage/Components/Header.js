import React from "react";
import { View, Image, StatusBar, useWindowDimensions } from "react-native";

const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <StatusBar backgroundColor={"#f7f6fd"} barStyle="dark-content" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("../../../images/3.png")}
          style={{ width: width - 40, height: width - 40, borderRadius: 25 }}
        />
      </View>
    </View>
  );
};

export default Header;
