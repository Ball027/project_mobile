
import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import { Button, Input, Image,Alert } from "react-native-elements";
import firebase from "../database/firebaseDB";

class Signinscreen extends Component {
  constructor() {
    super();

    this.adduserDoc = firebase.firestore().collection("user");

    this.state = {
      key: "",
      Fname: "",
      Lname: "",
      email:"",
      studentid:"",
      password:"",
      conpass:"",
      faculty:"",
      phone:"",
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  adduser() {
    this.adduserDoc
      .add({
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        email:this.state.email,
        studentid:this.state.studentid,
        password:this.state.password,
        conpass:this.state.conpass,
        faculty:this.state.faculty,
        phone:this.state.phone,
      })
      .then((res) => {
        this.setState({
          Fname: "",
          Lname: "",
          email:"",
          studentid:"",
          password:"",
          conpass:"",
          faculty:"",
          phone:"",
        });
        Alert.alert(
          "Signin Alert",
          "Sign in Success"
        );
      });
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.positionpic}>
          <Image
            style={styles.loginpic}
            source={require('../assets/kmitl.png')}
          />
          <View>
            <Text style={styles.head}>KMITL SPORT</Text>
            <Text style={styles.head2}>พระจอมเกล้าลาดกระบัง</Text>
          </View>
        </View>
        <View style={styles.container}>
        <Input style={styles.input}
            placeholder={"First Name"}
            value={this.state.Fname}
            onChangeText={(val) => this.inputValueUpdate(val, "Fname")}
          />
          <Input style={styles.input}
            placeholder={"Last Name"}
            value={this.state.Lname}
            onChangeText={(val) => this.inputValueUpdate(val, "Lname")}
          />
          <Input style={styles.input}
            placeholder={"Email"}
            value={this.state.email}
            onChangeText={(val) => this.inputValueUpdate(val, "email")}
          />
          <Input style={styles.input}
            placeholder={"StudentId"}
            value={this.state.studentid}
            onChangeText={(val) => this.inputValueUpdate(val, "studentid")}
          />
          <Input style={styles.input}
            placeholder={"Phone Number"}
            value={this.state.phone}
            onChangeText={(val) => this.inputValueUpdate(val, "phone")}
          />
          <Input style={styles.input}
            placeholder={"Faculty"}
            value={this.state.faculty}
            onChangeText={(val) => this.inputValueUpdate(val, "faculty")}
          />
          <Input style={styles.input}
            placeholder={"Password"}
            value={this.state.password}
            onChangeText={(val) => this.inputValueUpdate(val, "password")}
          />
          <Input style={styles.input}
            placeholder={"Confirm Password"}
            value={this.state.conpass}
            onChangeText={(val) => this.inputValueUpdate(val, "conpass")}
          />
          <View style={styles.button}>
          <Button 
            title="Sign in"
            onPress={() => {
              this.adduser();
              this.props.navigation.navigate("Login");
            }}
          />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginpic: {
    width: 100,
    height: 100,
  },
  positionpic: {
    justifyContent:"center",
    textAlign:"center",
    paddingTop: 50,
    paddingBottom: 50,
    flexDirection:"row"
  },
  head:{
    fontSize:24,
    color:"orange",
    fontWeight:"bold",
    marginTop:20
  },
  head2:{
    fontSize:18,
    color:"orange",
    fontWeight:"bold",
  },
  input:{
    backgroundColor:"orange",
    color:"white",
    padding:10
  },
  button:{
    margin:10,
    paddingHorizontal:20,
    gap:5,
  },
});

export default Signinscreen;