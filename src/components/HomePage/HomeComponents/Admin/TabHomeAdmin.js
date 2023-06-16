import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeAdmin from "./HomeAdmin";
import ProfileAdmin from "./ProfileAdmin";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="white">
      <Tab.Screen
        name="Home"
        component={HomeAdmin}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#03a9f4" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileAdmin}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color="#03a9f4" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
