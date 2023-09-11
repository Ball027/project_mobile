
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated} from "react-native";

const Scorescreen = () => {

  return (
    <View style={styles.container}>
        <Text>Hi</Text>
        <Text style={styles.score}>100</Text>
        <Text style={styles.rule}>-10</Text>
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    score:{
      fontSize:28
    },
    rule:{
      fontSize:20,
      color:"red"
    }
  });
  
  export default Scorescreen;