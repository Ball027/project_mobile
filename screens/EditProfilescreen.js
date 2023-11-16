import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class EditProfilescreen extends Component {
  constructor() {
    super();

    this.state = {
      key: "",
      Fname: "",
      Lname: "",
      password:"",
      conpass:"",
      faculty:"",
      phone:"",
    };
  }

  componentDidMount() {
    const userjDoc = firebase
  
      .firestore()
      .collection("user")
      .doc("0ZVyoJm7wXIQkwXVpR7P");
      // console.log("this.props.root.params()", this.props.route.params.key)
    userjDoc.get().then((res) => {
      if (res.exists) {
        const data = res.data();
        this.setState({
          key: "SuJ8vPQthHXsS8J5Fsnv",
          Fname: data.Fname,
          Lname: data.Lname,
          password:data.password,
          conpass:data.conpass,
          faculty:data.faculty,
          phone:data.phone,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateuser() {
    const updateuserjDoc = firebase
      .firestore()
      .collection("user")
      .doc("SuJ8vPQthHXsS8J5Fsnv");
    updateuserjDoc
      .set({
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        password: this.state.password,
        conpass: this.state.conpass,
        faculty: this.state.faculty,
        phone: this.state.phone
      })
      .then(() => {
        Alert.alert(
          "Editing Alert",
          "Edit Profile Success"
        );
      });
  }

  render() {
    return (
      <>
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
          placeholder={"Password"}
          value={this.state.password}
          onChangeText={(val) => this.inputValueUpdate(val, "password")}
        />
        <Input style={styles.input}
          placeholder={"Confirm Password"}
          value={this.state.conpass}
          onChangeText={(val) => this.inputValueUpdate(val, "conpass")}
        />
        <Input style={styles.input}
          placeholder={"Faculty"}
          value={this.state.faculty}
          onChangeText={(val) => this.inputValueUpdate(val, "faculty")}
        />
        <Input style={styles.input}
          placeholder={"Phone Number"}
          value={this.state.phone}
          onChangeText={(val) => this.inputValueUpdate(val, "phone")}
        />
        <View style={styles.button}>
          <Button 
            title="Confirm Edit"
            onPress={() => {
              this.updateuser();
              this.props.navigation.navigate("Your Profile");
            }}
          />
          </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  button:{
    margin:10,
    paddingHorizontal:20,
    gap:5,
  },
  input:{
    backgroundColor:"orange",
    color:"white",
    padding:10
  }
});

export default EditProfilescreen;