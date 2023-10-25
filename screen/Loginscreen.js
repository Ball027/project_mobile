import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ route, navigation }) => {
  const { prev } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.positionpic}>
      <Image 
          style={styles.loginpic}
          source={require('../assets/user-login.png')}
        />
      </View>
      <Ionicons name="ios-person-outline" size={30} color="green" style={{marginRight: 270}}/>
      <TextInput
        style={styles.txtinput}
        placeholder="Username"
        keyboardType="email-address"
        placeholderTextColor={"green"}
      />
      <Ionicons name="ios-lock-closed-outline" size={30} color="gold" style={{marginRight: 270}}/>
      <TextInput
        style={styles.txtinput}
        placeholder="Password"
        placeholderTextColor={"gold"}
        secureTextEntry={true}
      />
      <View style={styles.btnOption}>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("S3");
        }}>
          <Text style={{textAlign: 'center', 
          marginVertical: 10, 
          fontWeight: 700, fontSize: 20, color: '#fff'}}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  content: {
    fontSize: 20,
    paddingBottom: 10,
    paddingRight: 210,
    color: 'green',
  },
  btnOption: {
    backgroundColor: "blue",
    width: 300,
    height: 50,
    marginVertical: 40,
    borderRadius: 10
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
    paddingTop: 50,
    paddingBottom: 50,
  },
  txtinput: {
    width: 300,
    height: 40,
    margin: 15,
    padding: 10,
    borderWidth: 2,
  },
});

export default LoginScreen;
