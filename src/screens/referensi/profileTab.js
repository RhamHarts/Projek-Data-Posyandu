import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginLanding from "./src/screens/LoginLanding";
import SignIn from "./src/screens/SignIn";
import Register from "./src/screens/Register";
import LupaPassword from "./src/screens/LupaPassword";
import HomePage from "./src/screens/TabHome";

const Stack = createNativeStackNavigator();

const ProfileTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="InformasiAkun" component={InformasiAkun} />
        <Stack.Screen name="PusatBantuan" component={PusatBantuan} />
        <Stack.Screen name="TentangAplikasi" component={TentangAplikasi} />
        <Stack.Screen name="UbahPassword" component={UbahPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileTab;
