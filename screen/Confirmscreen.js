import React from "react";
import {View,Text,Button,StyleSheet,Image, Alert} from "react-native";


const Confirmscreen = ({navigation}) => {
    return (
      <>
      <View style={styles.screen}>
        <Text style={styles.title}>CONFIRM</Text>
        <Image style={styles.pic} source={require("../assets/CorrectSymbol.png")}></Image>
      </View>


      <Button title="Confirm"
          onPress={() => {    
          // กดแล้วหลับไปหน้า Home
          navigation.popToTop()
          }}/>    


      </>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flexDirection: 'colum',     
      padding: 50,
      paddingBottom: 120,
      alignItems: "center",
      justifyContent: "center"
    },

    title: {fontSize: 60, marginVertical: 100, fontWeight:"100"},

    pic:{width: 130, height: 130},

  });
  
  export default Confirmscreen;