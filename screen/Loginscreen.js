import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity } from "react-native";

const Loginscreen = ({route, navigation}) => {
  // const { prev } = route.params;
  return (
    <SafeAreaView style={styles.container}>
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
      <Text style={styles.content}>Username</Text>
      <TextInput
        style={styles.txtinput}
        placeholder="Username"
        keyboardType="email-address"
      />
      <Text style={styles.content}>Password</Text>
      <TextInput
        style={styles.txtinput}
        placeholder="Password"
        keyboardType="email-address"
      />
      <View style={styles.btnOption}>
        <Button 
          title="Log in"
          onPress={() => {
            navigation.navigate("Draw", {screen:"Home"});
          }}
        />
      </View>
        <TouchableOpacity style={styles.sign} onPress={()=>{navigation.navigate("Signin")}}>
          <Text>Don't have any account?sign in</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  content: {
    fontSize: 20,
    paddingBottom: 10,
    paddingRight: 210,
    color: 'black',
    fontWeight:"bold"
  },
  btnOption: {
    width: 300,
    paddingTop: 25,
    paddingBottom: 25,
  },
  btnBack: {
    width: 100,
    paddingTop: 370,
    justifyContent: "flex-end",
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
  txtinput: {
    width: 300,
    height: 40,
    margin: 15,
    padding: 10,
    borderWidth: 2,
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
  sign:{
    color:"#DDDDDD",
  }
});

export default Loginscreen;