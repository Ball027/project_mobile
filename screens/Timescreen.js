
import React, { Component, useRef } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../database/firebaseDB";

class Timescreen extends Component {
    constructor() {
        super();
        this.historycollect = firebase.firestore().collection("History")
        this.state = {
            history_list: [],
        };
    };

    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
          const { sportname, court, day, time } = res.data();
          all_data.push({ key: res.id, sportname, court, day, time });
        });
        this.setState({ history_list: all_data, });
        console.log("History List Updated:", all_data);
      };
      componentDidMount() {
        this.unsubscribe = this.historycollect.onSnapshot(this.getCollection);
      }
      componentWillUnmount(){
        this.unsubscribe();
      }

    render() {
        const { navigation } = this.props;
        const {route} = this.props;
        const todaytime = new Date().getHours();
        console.log("todaytime:",todaytime);
        
        const checkfunc = (selecttime)=>{
            let checkhis = true;
            this.state.history_list.forEach((res) =>{
                if(res.sportname===route.params.name && res.court===route.params.court && res.day=== route.params.date && res.time===selecttime){
                    console.log(res.sportname,res.day,res.court,res.time)
                    checkhis=false
                    console.log("status:",checkhis)
                }
            });
            return checkhis;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.header}>{route.params.name}{route.params.court !== "" ? `(${route.params.court})` : ""}</Text>
                <Text style={styles.header}>วันที่: {route.params.date}</Text>

                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 11 && checkfunc("10:00-11:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "10:00-11:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 11 && checkfunc("10:00-11:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>10:00-11:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 12 && checkfunc("11:00-12:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "11:00-12:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 12 && checkfunc("11:00-12:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>11:00-12:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 13 && checkfunc("12:00-13:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "12:00-13:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 13 && checkfunc("12:00-13:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>12:00-13:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 14 && checkfunc("13:00-14:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "13:00-14:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 14 && checkfunc("13:00-14:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>13:00-14:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 15 && checkfunc("14:00-15:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "14:00-15:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 15 && checkfunc("14:00-15:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>14:00-15:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 16 && checkfunc("15:00-16:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "15:00-16:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 16 && checkfunc("15:00-16:00"))? "green" : "red" }}></View>
                    <Text style={styles.label}>15:00-16:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 17 && checkfunc("16:00-17:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "16:00-17:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 17 && checkfunc("16:00-17:00"))? "green" : "red" }}></View>
                    <Text style={styles.label}>16:00-17:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 18 && checkfunc("17:00-18:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "17:00-18:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 18 && checkfunc("17:00-18:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>17:00-18:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 19 && checkfunc("18:00-19:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "18:00-19:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: (todaytime < 19 && checkfunc("18:00-19:00")) ? "green" : "red" }}></View>
                    <Text style={styles.label}>18:00-19:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => {
                    if (todaytime < 20 && checkfunc("19:00-20:00")) {
                        navigation.navigate("Confirm", { name: route.params.name, date: route.params.date, court: route.params.court, time: "19:00-20:00" })
                    }
                }}>
                    <View style={{ ...styles.status, backgroundColor: todaytime < 20 && checkfunc("19:00-20:00") ? "green" : "red" }}></View>
                    <Text style={styles.label}>19:00-20:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={styles.label}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        backgroundColor: "orange",
        height: "auto",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        margin: 5,
        padding: 5,
    },
    row: {
        flexDirection: "row",
        margin: 5
    },
    status: {
        width: 20,
        height: 20,
        margin: 3
    },
    label: {
        fontSize: 18,
        textAlign: "center"
    },
    btn: {
        fontSize: 24,
        backgroundColor: "orange",
    }
});

export default Timescreen;