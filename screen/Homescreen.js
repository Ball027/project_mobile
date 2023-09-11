
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated} from "react-native";

const Homescreen = () => {

  return (
    <View style={styles.container}>
        <Text>Hi</Text>
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      flex:1,
      width:1000,
      height:150
    },
    button:{
      flex:1,
      paddingHorizontal:20,
      margin:10,
    }
  });
  
  export default Homescreen;