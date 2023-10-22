import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNavigator from "./navigation/MyNavigator";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/mealsReducer";
import { Provider } from "react-redux";
import MyNavigator2 from "./navigation/Mynavigation2";

// import คอมโพเนนต์ที่จำเป็น

const rootReducer = combineReducers({
  meals: mealsReducer
  })

const store = createStore(rootReducer);

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  // return <Provider store={store}><MyNavigator/></Provider>;
  return(<MyNavigator2/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
