import React from "react";
// import library ที่จำเป็น
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//import screen
import Scorescreen from "../screens/Scorescreen";
import Homescreen from "../screens/Homescreen";
import Policyscreen from "../screens/Policyscreen";
import Loginscreen from "../screens/Loginscreen";
import Signinscreen from "../screens/Signinscreen";
import Settingscreen from "../screens/Settingscreen";
import Profilescreen from "../screens/Profilescreen";
import Logoutscreen from "../screens/Logoutscreen";
import EditProfilescreen from "../screens/EditProfilescreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  // const dispatch = useDispatch();
  // const toggleFavoriteHandler = (mealId) => {
  //   dispatch(toggleFavorite(mealId));
  //  };

  return (
    <Stack.Navigator initialRouteName="Booking" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Booking" component={Homescreen} />
    </Stack.Navigator>
  );
}

function Tabnavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Score" component={Scorescreen} options={{
        tabBarIcon: () => {
          return <Ionicons name="people" size={30} color="orange" />;
        },
      }} />
      <Tab.Screen name="Home" component={StackNavigator} options={{
        tabBarIcon: () => {
          return <Ionicons name="home" size={30} color="orange" />;
        }
      }} />
      <Tab.Screen name="Policy" component={Policyscreen} options={{
        tabBarIcon: () => {
          return <MaterialIcons name="rule" size={30} color="orange" />;
        }
      }} />
    </Tab.Navigator>
  )
}

function Profilenavigator(){
  return(
    <Stack.Navigator initialRouteName="Your Profile" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Your Profile" component={Profilescreen}/>
      <Stack.Screen name="Edit Profile" component={EditProfilescreen}/>
    </Stack.Navigator>
  )
}

function Drawernavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: "white", }, headerTintColor: "orange", }}>
      <Drawer.Screen name="SPORTS" component={Tabnavigator} options={{
        drawerIcon: () => {
          return <Entypo name="sports-club" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="Profile" component={Profilenavigator} options={{
        drawerIcon: () => {
          return <FontAwesome name="user" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="Notifications" component={Settingscreen} options={{
        drawerIcon: () => {
          return <Ionicons name="notifications" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="Setting" component={Settingscreen} options={{
        drawerIcon: () => {
          return <Ionicons name="settings" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="Logout" component={Logoutscreen} options={{
        drawerIcon: () => {
          return <MaterialIcons name="logout" size={30} color="orange" />;
        },
      }} />
    </Drawer.Navigator>
  )
}

export default function MyNavigator2() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Loginscreen}/>
        <Stack.Screen name="Signin" component={Signinscreen}/>
        <Stack.Screen name="Draw" component={Drawernavigator}/>
      </Stack.Navigator>
      {/* <Drawernavigator /> */}
    </NavigationContainer>
  );
}