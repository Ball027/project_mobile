import React,{useState} from "react";
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet, Button, Image, ScrollView, SafeAreaView, Alert } from "react-native";
import Header from "../components/Header";
const Calendarscreen = ({route,navigation}) => {
    const name = route.params.name;
    const [selected,setSelected] = useState("");
    return (

        <SafeAreaView style={styles.screen}>
            <View>
                <Text style={styles.header}>{name}</Text>
            </View>

            <Calendar style={styles.screen}

                onDayPress={day => {
                    setSelected(day.dateString)
                    console.log(selected);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: "orange"}
                  }}
                />


            <Button title="          ENTER  ➞       "
                onPress={(day) => {
                    navigation.navigate("Court",{name:route.params.name,day:selected})
                }} />


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

    title: { 
        fontSize: 60,
        marginVertical: 100, 
        fontweight: 80 
    },
    pic: { 
        width: 130, 
        height: 130 
    },
    header:{
        backgroundColor:"orange",
        height:"auto",
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center",
        justifyContent:"center"
    }

});

export default Calendarscreen;