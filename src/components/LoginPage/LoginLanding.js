import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import Header from "./Components/Header";
import Title from "./Components/Title";
import LoginRegisterButton from "./Components/LoginRegisterButton";

const LoginLanding = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#f7f6fd" }}>
        <Header />
        <Title />
        <LoginRegisterButton />
      </View>
    </ScrollView>
  );
};

export default LoginLanding;
