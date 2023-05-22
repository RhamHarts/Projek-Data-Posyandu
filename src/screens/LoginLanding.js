import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/LoginPage/Header";
import Title from "../components/LoginPage/Title";
import LoginRegisterButton from "../components/LoginPage/LoginRegisterButton";

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
