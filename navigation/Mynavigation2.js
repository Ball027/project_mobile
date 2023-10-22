import React from "react";
// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
//import screen
import Scorescreen from "../screens/Scorescreen";
import Homescreen from "../screens/Homescreen";
import Policyscreen from "../screens/Policyscreen";
import Loginscreen from "../screens/Loginscreen";
import Settingscreen from "../screens/Settingscreen";
import Profilescreen from "../screens/Profilescreen";
import Logoutscreen from "../screens/Logoutscreen";

const Tab = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();

function Tabnavigator(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Score" component={Scorescreen} options={{
      tabBarIcon: () => {
        return <Ionicons name="alert-outline" size={30} color="orange" />;
      },
    }} />
    <Tab.Screen name="Home" component={Homescreen} options={{
      tabBarIcon:() =>{
        return<Ionicons name="cellular-sharp" size={30} color="orange" />;
      }
    }}/>
    <Tab.Screen name="Policy" component={Policyscreen} options={{
      tabBarIcon:() =>{
        return<Ionicons name="pulse-sharp" size={30} color="orange" />;
      }
    }}/>
  </Tab.Navigator>
  )
}

export default function MyNavigator2() {
  return (
    <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="KMITL SPORTS" screenOptions={{ headerStyle: { backgroundColor: "white", },headerTintColor:"orange", }}>
        <MainNavigator.Screen name="KMITL SPORTS" component={Tabnavigator}/>
        <MainNavigator.Screen name="Profile" component={Profilescreen}/>
        <MainNavigator.Screen name="Setting" component={Settingscreen}/>
        <MainNavigator.Screen name="Logout" component={Logoutscreen}/>
        </MainNavigator.Navigator>
    </NavigationContainer>
  );
}