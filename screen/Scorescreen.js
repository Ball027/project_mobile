
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated, SafeAreaView} from "react-native";

const Scorescreen = () => {

  return (
    <SafeAreaView style={styles.container3}>
    <View style={styles.container}>
      <View style={{...styles.cycle, ...{backgroundColor:"red"}}}></View>
      <View style={{...styles.cycle, ...{backgroundColor:"orange"}}}></View>
      <View style={{...styles.cycle, ...{backgroundColor:"yellow"}}}></View>
      <View style={{...styles.cycle, ...{backgroundColor:"lime"}}}></View>
      <View style={{...styles.cycle, ...{backgroundColor:"green"}}}></View>
    </View>
    <View style={styles.container2}>
      <Text style={styles.score}>100</Text>
      <Text style={styles.rule}>-20 เมื่อทำผิดกฎการใช้สนามกีฬา</Text>
      <Text style={styles.rule}>-10 เมื่อจองแล้วไม่ทำการมาใช้</Text>
      <Text style={styles.rule}>***คะแนนน้อยกว่า40ไม่สามารถจองได้***</Text>
    </View>
  </SafeAreaView>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      justifyContent: "center",
  
    },
    container2: {
      justifyContent: "center",
      alignItems: "center",
    },
    container3: {
      flex:1,
      justifyContent: "center",
      alignItems:"center",
    },
    score:{
      fontSize:36,
      fontWeight:"bold",
    },
    rule:{
      fontSize:20,
      color:"red"
    },
    cycle:{
      borderRadius: 100,
      height:10,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3,
      padding: 15,
      justifyContent: "flex-end",
      alignItems: "flex-end",
    }
  });
  
  export default Scorescreen;