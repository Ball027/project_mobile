
import React,{ Component,useState } from "react";
import {View,Text,Button,StyleSheet,Animated, SafeAreaView} from "react-native";
import firebase from "../database/firebaseDB";

class Profilescreen extends Component {
  
  constructor() {
    super();

    this.state = {
      Fname: "",
      Lname: "",
      email: "",
      phone: "",
      studentid:"",
      faculty: "",
    };
  };

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
          Fname: data.Fname,
          Lname: data.Lname,
          email: data.email,
          phone: data.phone,
          studentid: data.studentid,
          faculty: data.faculty,
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Your Name</Text>
        <Text style={styles.text}>{this.state.Fname} {this.state.Lname}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{this.state.email}</Text>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.text}>{this.state.phone}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>StudentId</Text>
        <Text style={styles.text}>{this.state.studentid}</Text>
        <Text style={styles.label}>Faculty</Text>
        <Text style={styles.text}>{this.state.faculty}</Text>
      </View>
      <Button title="Edit Profile" onPress={()=>{
        this.props.navigation.navigate("Edit Profile");
      }}></Button>
    </SafeAreaView>
  )};
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box:{
      margin:20,
      padding:10,
      width:"80%",
      backgroundColor:"gold",
      borderRadius:20,
      elevation:6,
    },
    label:{
      fontSize:20,
      fontWeight:"bold",
      margin:3
    },
    text:{
      fontSize:18,
      margin:3,
    }
  });
  
  export default Profilescreen;