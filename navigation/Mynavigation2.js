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
import Calendarscreen from "../screens/Calendarscreen";
import Courtscreen from "../screens/Courtscreen";
import Timescreen from "../screens/Timescreen";
import Confirmscreen from "../screens/Confirmscreen";
import Policyscreen from "../screens/Policyscreen";
import Loginscreen from "../screens/Loginscreen";
import Signinscreen from "../screens/Signinscreen";
import Profilescreen from "../screens/Profilescreen";
import Notiscreen from "../screens/Notiscreen";
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
      <Stack.Screen name="Booking" component={Homescreen}/>
      <Stack.Screen name="Calendar" component={Calendarscreen}/>
      <Stack.Screen name="Court" component={Courtscreen}/>
      <Stack.Screen name="Time" component={Timescreen}/>
      <Stack.Screen name="Confirm" component={Confirmscreen}/>
    </Stack.Navigator>
  );
}

function Tabnavigator() {
  return (
    <Tab.Navigator initialRouteName="หน้าหลัก" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="คะแนนความประพฤติ" component={Scorescreen} options={{
        tabBarIcon: () => {
          return <Ionicons name="people" size={30} color="orange" />;
        },
      }} />
      <Tab.Screen name="หน้าหลัก" component={StackNavigator} options={{
        tabBarIcon: () => {
          return <Ionicons name="home" size={30} color="orange" />;
        }
      }} />
      <Tab.Screen name="กฎข้อตกลง" component={Policyscreen} options={{
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
      <Drawer.Screen name="สนามกีฬา" component={Tabnavigator} options={{
        drawerIcon: () => {
          return <Entypo name="sports-club" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="โปรไฟล์" component={Profilenavigator} options={{
        drawerIcon: () => {
          return <FontAwesome name="user" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="สนามที่จอง" component={Notiscreen} options={{
        drawerIcon: () => {
          return <Ionicons name="notifications" size={30} color="orange" />;
        },
      }} />
      {/* <Drawer.Screen name="Setting" component={Settingscreen} options={{
        drawerIcon: () => {
          return <Ionicons name="settings" size={30} color="orange" />;
        },
      }} />
      <Drawer.Screen name="Logout" component={Logoutscreen} options={{
        drawerIcon: () => {
          return <MaterialIcons name="logout" size={30} color="orange" />;
        },
      }} /> */}
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