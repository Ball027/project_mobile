import React, {Component} from "react";
import {View,Text,Button,StyleSheet,Image, Alert} from "react-native";
import firebase from "../database/firebaseDB";


class Confirmscreen extends Component{
  constructor() {
    super();

    this.addhistoryDoc = firebase.firestore().collection("History");

    this.state = {
      key: "",
      fname: "",
      studentid:"",
      phone:"",
      sportname:"",
      day:"",
      time:"",
      court:"",
    };
  }

  addhistory() {
    this.addhistoryDoc
      .add({
        fname: this.state.fname,
        studentid: this.state.studentid,
        phone: this.state.phone,
        sportname: this.state.sportname,
        day: this.state.day,
        time: this.state.time,
        court: this.state.court,
      })
      .then((res) => {
        this.setState({
          key: "",
          fname: "",
          studentid:"",
          phone:"",
          sportname:"",
          day:"",
          time:"",
          court:"",
        });
        Alert.alert(
          "Confirm Booking",
          "Booking Success"
        );
      });
  }
  componentDidMount() {
    const userDoc = firebase
      .firestore()
      .collection("user")
      .doc("64070027")//this.props.route.params.key
    // Set up the onSnapshot listener
    const unsubscribe = userDoc.onSnapshot((doc) => {
      if (doc.exists) {
        // Access the data using doc.data()
        const data = doc.data();
        // Now 'data' is an object containing your document fields
        console.log('Document data:', data);
        this.setState({
          fname: data.Fname,
          studentid: data.studentid,
          phone: data.phone,
        });
        // ...
      } else {
        console.log('Document does not exist');
      }
    }, (error) => {
      console.error('Error getting document:', error);
    });
  }


  render(){
    const {navigation} = this.props
    const {route} = this.props
    if (!this.state.sportname) {
      this.setState({
        sportname: route.params.name,
        day: route.params.date,
        court: route.params.court,
        time: route.params.time,
      });
    }
    return (
      <>
      <View style={styles.screen}>
        <Text style={styles.title}>CONFIRM</Text>
        <Image style={styles.pic} source={require("../assets/CorrectSymbol.png")}></Image>
      </View>


      <Button title="Confirm"
          onPress={() => {    
          this.addhistory()
          navigation.popToTop()
          console.log(this.state.sportname)
          console.log(route.params.name)
          console.log(route.params.date)
          console.log(route.params.court)
          console.log(route.params.time)
          }}/>    


      </>
    );
  }
  };

  const styles = StyleSheet.create({
    screen: {
   
      padding: 50,
      paddingBottom: 120,
      alignItems: "center",
      justifyContent: "center"
    },

    title: {fontSize: 60, marginVertical: 100, fontWeight:"100"},

    pic:{width: 130, height: 130},

  });
  
  export default Confirmscreen;