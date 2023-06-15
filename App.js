import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import "firebase/auth";

//Login Page
import LoginLanding from "./src/components/LoginPage/LoginLanding";
import SignIn from "./src/components/LoginPage/SignIn";
import Register from "./src/components/LoginPage/Register";
import LupaPassword from "./src/components/LoginPage/LupaPassword";

//Home Components
//Admin
import DataKaderAdmin from "./src/components/HomePage/HomeComponents/Admin/DataKaderAdmin";
import TabHomeAdmin from "./src/components/HomePage/HomeComponents/Admin/TabHomeAdmin";
import EPPGBM_Admin from "./src/components/HomePage/HomeComponents/Admin/EPPGBM_Admin";
import EPPGBM_Admin1 from "./src/components/HomePage/HomeComponents/Admin/EPPGBM_Admin1";
import EPPGBM_Admin_Detail from "./src/components/HomePage/HomeComponents/Admin/EPPGBM_Admin_Detail";
import TableForm from "./src/components/HomePage/HomeComponents/TableForm";
//Users
import TabHome from "./src/components/HomePage/HomeComponents/Users/TabHome";
import TumbuhKembangAnak from "./src/components/HomePage/HomeComponents/Users/HomeComponent/TumbuhKembangAnak";
import DataKaderUsers from "./src/components/HomePage/HomeComponents/Users/HomeComponent/DataKaderUsers";
import KebutuhanAnak from "./src/components/HomePage/HomeComponents/Users/HomeComponent/KebutuhanAnak";
import DeteksiStunting from "./src/components/HomePage/HomeComponents/Users/HomeComponent/DeteksiStunting";
import EPPGBM_Users from "./src/components/HomePage/HomeComponents/Users/HomeComponent/EPPGBM_Users";

import KebutuhanAnak1 from "./src/components/HomePage/HomeComponents/Users/HomeComponent/Kebutuhananak/KebutuhanAnak1";
import KebutuhanAnak2 from "./src/components/HomePage/HomeComponents/Users/HomeComponent/Kebutuhananak/KebutuhanAnak2";
import KebutuhanAnak3 from "./src/components/HomePage/HomeComponents/Users/HomeComponent/Kebutuhananak/KebutuhanAnak3";
import KebutuhanAnak4 from "./src/components/HomePage/HomeComponents/Users/HomeComponent/Kebutuhananak/KebutuhanAnak4";
import KebutuhanAnak6 from "./src/components/HomePage/HomeComponents/Users/HomeComponent/Kebutuhananak/KebutuhanAnak6";

// import DataIbuDanAnak from "./src/components/HomePage/HomeComponents/Users/DataIbuDanAnak";
//Profile Components
import InformasiAkun from "./src/components/HomePage/HomeComponents/Users/ProfileComponents/InformasiAkun";
import UbahPassword from "./src/components/HomePage/HomeComponents/Users/ProfileComponents/UbahPassword";

//Both
import PusatBantuan from "./src/components/HomePage/HomeComponents/Users/ProfileComponents/PusatBantuan";
import TentangAplikasi from "./src/components/HomePage/HomeComponents/Users/ProfileComponents/TentangAplikasi";
import KebijakanPrivasi from "./src/components/HomePage/HomeComponents/Users/ProfileComponents/KebijakanPrivasi";
import SyaratDanKetentuan from "./src/components/HomePage/HomeComponents/Users/ProfileComponents/SyaratDanKetentuan";

const firebaseConfig = {
  apiKey: "AIzaSyD_cG4GEYf1ZBGPxmUMfCgwJmRt5pOTVLA",
  authDomain: "crud-react-native-8c646.firebaseapp.com",
  databaseURL:
    "https://crud-react-native-8c646-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-react-native-8c646",
  storageBucket: "crud-react-native-8c646.appspot.com",
  messagingSenderId: "1020006557957",
  appId: "1:1020006557957:web:7339ff66a4d9a3bcea2f6c",
  measurementId: "G-LN6LXMW7LE",
};

initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginLanding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginLanding" component={LoginLanding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
        <Stack.Screen name="TabHome" component={TabHome} />
        <Stack.Screen name="TabHomeAdmin" component={TabHomeAdmin} />
        <Stack.Screen name="TumbuhKembangAnak" component={TumbuhKembangAnak} />
        <Stack.Screen name="DataKaderUsers" component={DataKaderUsers} />
        <Stack.Screen name="KebutuhanAnak" component={KebutuhanAnak} />
        <Stack.Screen name="DeteksiStunting" component={DeteksiStunting} />
        <Stack.Screen name="EPPGBM_Admin" component={EPPGBM_Admin} />
        <Stack.Screen name="EPPGBM_Admin1" component={EPPGBM_Admin1} />
        <Stack.Screen
          name="EPPGBM_Admin_Detail"
          component={EPPGBM_Admin_Detail}
        />
        <Stack.Screen name="EPPGBM_Users" component={EPPGBM_Users} />
        <Stack.Screen name="TableForm" component={TableForm} />
        <Stack.Screen name="InformasiAkun" component={InformasiAkun} />
        <Stack.Screen name="UbahPassword" component={UbahPassword} />
        <Stack.Screen name="PusatBantuan" component={PusatBantuan} />
        <Stack.Screen name="TentangAplikasi" component={TentangAplikasi} />
        <Stack.Screen name="KebijakanPrivasi" component={KebijakanPrivasi} />
        <Stack.Screen name="DataKaderAdmin" component={DataKaderAdmin} />
        <Stack.Screen
          name="SyaratDanKetentuan"
          component={SyaratDanKetentuan}
        />
        <Stack.Screen name="KebutuhanAnak1" component={KebutuhanAnak1} />
        <Stack.Screen name="KebutuhanAnak2" component={KebutuhanAnak2} />
        <Stack.Screen name="KebutuhanAnak3" component={KebutuhanAnak3} />
        <Stack.Screen name="KebutuhanAnak4" component={KebutuhanAnak4} />
        <Stack.Screen name="KebutuhanAnak6" component={KebutuhanAnak6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
