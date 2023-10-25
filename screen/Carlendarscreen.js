import React from "react";
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet, Button, Image, ScrollView, SafeAreaView, Alert} from "react-native";
import Header from "../components/Header";
const Confirmscreen = (props) => {
    return (

    <SafeAreaView style={styles.screen}>
        <View>
        <Header title="Calendar" />
        </View>

        <Calendar style={styles.screen}

          onDayPress={day => {consolelog(day);
        }}/>


        <Button title="          ENTER  ➞       "
        onPress={() => {Alert.alert('ยืนยันการจอง')          
          }}/> 


    </SafeAreaView>

    );
  };

  const styles = StyleSheet.create({
    screen: {
      flexDirection: 'column',     
      paddingTop: 50,
      // alignItems: "center",
      justifyContent: "center"
    },

    title: {fontSize: 60, marginVertical: 100, fontweight: 80},

    pic:{width: 130, height: 130},

  });
  
  export default Confirmscreen;