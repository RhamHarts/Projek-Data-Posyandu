import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./Home";
import Profile from "./Profile";
import Notifications from "./Notification";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#F8F8F8">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#03a9f4" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="bell" color="#03a9f4" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
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
