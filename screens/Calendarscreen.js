import React, { useState } from "react";
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, Alert } from "react-native";

const Calendarscreen = ({ route, navigation }) => {
    const name = route.params.name;
    const havecourt = route.params.havecourt;
    const [selected, setSelected] = useState("");
    const today = new Date();
    const todayDate = new Date(today.toISOString().split('T')[0])
    const selectedDate = new Date(selected);

    return (

        <SafeAreaView style={styles.screen}>
            <View>
                <Text style={styles.header}>{name}</Text>
            </View>

            <Calendar style={styles.screen}

                onDayPress={day => {
                    setSelected(day.dateString)
                    
                    console.log(selectedDate);
                    console.log(todayDate)
                    console.log(selectedDate.getTime()>=todayDate.getTime())
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedColor: "orange" }
                }}
            />


            <Button title="          ENTER  ➞       "
                onPress={() => {
                    if(selectedDate.getTime()>=todayDate.getTime()){
                        if (havecourt == "have") {
                            navigation.navigate("Court", { name: route.params.name, day: selected })
                        }
                        else {
                            navigation.navigate("Time", { name: route.params.name, date: selected,court:"" })
                        }
                    }
                    else{
                        Alert.alert("Error","please select new day")
                    }
                }} />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        paddingTop: 50,
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
    header: {
        backgroundColor: "orange",
        height: "auto",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center"
    },
    label:{
        fontSize:24,
        textAlign:"center"
    },
    btn:{
        fontSize:24,
        backgroundColor:"orange",
    }

});

export default Calendarscreen;