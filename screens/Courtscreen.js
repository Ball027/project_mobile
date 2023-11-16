
import React, { useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Courtscreen = ({ route, navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{route.params.name}</Text>
            <Text style={styles.header}>วันที่: {route.params.day}</Text>
            
        <View>
            <TouchableOpacity style={styles.box} onPress={()=>{
                navigation.navigate("Time",{name:route.params.name,date:route.params.day,court:"Court 1"})
            }}>
                <Text style={styles.label}>Court 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{
                navigation.navigate("Time",{name:route.params.name,date:route.params.day,court:"Court 2"})
            }}>
                <Text style={styles.label}>Court 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{
                navigation.navigate("Time",{name:route.params.name,date:route.params.day,court:"Court 3"})
            }}>
                <Text style={styles.label}>Court 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{
                navigation.navigate("Time",{name:route.params.name,date:route.params.day,court:"Court 4"})
            }}>
                <Text style={styles.label}>Court 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={()=>{
                navigation.goBack()
            }}>
                <Text style={styles.label}>Back</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header:{
        backgroundColor:"orange",
        height:"auto",
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center",
        justifyContent:"center",
        margin:5,
        padding:5,
    },
    box:{
        margin:20,
        padding:10,
        width:"100%",
        backgroundColor:"gold",
        borderRadius:20,
        elevation:2,
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

export default Courtscreen;