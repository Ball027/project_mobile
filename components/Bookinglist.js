import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Bookinglist = (props) => {
  return (
    <View style={styles.Bookinglist}>
      <View style={styles.name}>
      <Text style={styles.text}>{props.sportname} {props.court}</Text>
      </View>
        <Text style={styles.text}>{props.time}</Text>
        <Text style={styles.text}>{props.fname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Bookinglist: {
    height: 120,
    width: "100%",
    backgroundColor: "rgba(240,200,0,0.5)",
    borderRadius: 0,
    overflow: "hidden",
    padding:15,
    elevation:2,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
  },
  text:{
    fontSize:22,
    color:"black",
  }
});

export default Bookinglist;
