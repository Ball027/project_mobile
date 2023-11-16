
import React, { useRef, Component } from "react";
import { View, Text, Button, StyleSheet, Animated, FlatList } from "react-native";
import Bookinglist from "../components/Bookinglist";
import firebase from "../database/firebaseDB";

class Notiscreen extends Component {
  constructor() {
    super();
    this.historycollect = firebase.firestore().collection("History")
    this.userDoc = firebase.firestore().collection("user").doc("64070027")
    this.state = {
      history_list: [],
      studentid: '',
    };
  };
  getDocument = (documentSnapshot) => {
    const { studentid } = documentSnapshot.data();
    this.setState({ studentid: studentid, });
    console.log(this.state.studentid)
  };
  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const { sportname, fname, studentid, court, time } = res.data();
      if (this.state.studentid === studentid) {
        console.log(res.data());
        all_data.push({ key: res.id, sportname, fname, studentid, court, time });
      }
    });
  
    // Update state using callback form
    this.setState((prevState) => ({
      history_list: [...prevState.history_list, ...all_data],
    }), () => {
      console.log(this.state.history_list);
    });
  };

  componentDidMount() {
    this.unsubscribe = this.historycollect.onSnapshot(this.getCollection);
    this.unsubscribe2 = this.userDoc.onSnapshot(this.getDocument);
  }
  componentWillUnmount() {
    this.unsubscribe();
    this.unsubscribe2();
  }

  render() {

    const renderBookinglist = (itemData) => {
      return (
        <Bookinglist
          fname={itemData.item.fname}
          sportname={itemData.item.sportname}
          time={itemData.item.time}
          court={itemData.item.court}
        />
      );
    };
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Booking Sport</Text>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.history_list}
          renderItem={renderBookinglist}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  head: {
    fontSize: 40,
    fontWeight: "bold",
    color: "orange",
  }
});

export default Notiscreen;
