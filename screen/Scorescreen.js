
import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Animated, SafeAreaView } from "react-native";
import firebase from "../database/firebaseDB";

class Scorescreen extends Component {
  constructor() {
    super();

    this.state = {
      Fname: "",
      score: "",
    };
  };

  componentDidMount() {
    const userDoc = firebase
      .firestore()
      .collection("user")
      .doc("0ZVyoJm7wXIQkwXVpR7P")//this.props.route.params.key
    // Set up the onSnapshot listener
    const unsubscribe = userDoc.onSnapshot((doc) => {
      if (doc.exists) {
        // Access the data using doc.data()
        const data = doc.data();
        // Now 'data' is an object containing your document fields
        console.log('Document data:', data);
        this.setState({
          Fname: data.Fname,
          score: data.score,
        });
        // ...
      } else {
        console.log('Document does not exist');
      }
    }, (error) => {
      console.error('Error getting document:', error);
    });
  }


  render() {
    return (
      <SafeAreaView style={styles.container3}>
        <Text style={styles.head}>{this.state.Fname}'Score</Text>
        <View style={styles.container}>
          <View style={{ ...styles.cycle, ...{ backgroundColor: "red" } }}></View>
          <View style={{ ...styles.cycle, ...{ backgroundColor: "orange" } }}></View>
          <View style={{ ...styles.cycle, ...{ backgroundColor: "yellow" } }}></View>
          <View style={{ ...styles.cycle, ...{ backgroundColor: "lime" } }}></View>
          <View style={{ ...styles.cycle, ...{ backgroundColor: "green" } }}></View>
        </View>
        <Text style={styles.score}>{this.state.score}</Text>
        <View style={styles.container2}>
          <Text style={styles.rule}>-10 เมื่อจองแล้วไม่มาตามที่จองไว้</Text>
          <Text style={styles.rule}>-20 เมื่อทำผิดกฎการใช้สนามกีฬา</Text>
          <Text style={styles.rule2}>***คะแนนน้อยกว่า40ไม่สามารถจองได้***</Text>
        </View>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    // flex:0.5,
    flexDirection: "row",
    justifyContent: "center",

  },
  container2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    flex: 1.5,
    fontSize: 40,
    color: "orange",
    fontWeight: "bold"
  },
  score: {
    fontSize: 56,
    fontWeight: "bold",
  },
  rule: {
    fontSize: 20,
    color: "red"
  },
  rule2: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  cycle: {
    borderRadius: 100,
    width: 60,
    height: 60,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    margin: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default Scorescreen;