import React from "react";
// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
//import screen
import Scorescreen from "./screen/Scorescreen";
import Homescreen from "./screen/Homescreen";
import Policyscreen from "./screen/Policyscreen";
import Loginscreen from "./screen/Loginscreen";
import Settingscreen from "./screen/Settingscreen";

const Tab = createBottomTabNavigator();
const MainNavigator = createDrawerNavigator();

function Tabnavigator(){
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
        <MainNavigator>
        <MainNavigator.screen name="Home" component={Tabnavigator}/>
        <MainNavigator.Screen name="Setting" component={Settingscreen}/>
        <MainNavigator.Screen name="Login" component={Loginscreen}/>
        </MainNavigator>
    </NavigationContainer>
  );
}