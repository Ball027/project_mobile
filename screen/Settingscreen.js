import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";

const Settingscreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnOption}>
        <Button
          title="Profile"
          onPress={() => {
            navigation.navigate("S3");
          }}
        />
      </View>
      <View style={styles.btnOption}>
        <Button
          title="Notification Setting"
          onPress={() => {
            navigation.navigate("S2", { prev: "Screen04", id: 30 });
          }}
        />
      </View>
      <View style={styles.btnOption}>
        <Button
          title="Log in"
          onPress={() => {
            navigation.navigate("S4", { prev: "LOGIN" });
          }}
        />
      </View>
      <View style={styles.btnOption}>
        <Button
          title="Policy"
          onPress={() => {
            navigation.navigate("S3");
          }}
        />
      </View>
      <View style={styles.btnOption}>
        <Button
          title="Score"
          onPress={() => {
            navigation.navigate("S3");
          }}
        />
      </View>
      <View style={styles.btnBack}>
        <Button
          title="Back"
          onPress={() => {
            navigation.navigate("S3");
          }}
        />
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
  },
  btnOption: {
    width: 300,
    paddingTop: 25,
    paddingBottom: 25,
  },
  btnBack: {
    width: 100,
    paddingTop: 230,
    justifyContent: "flex-end",
  },
});

export default Settingscreen;
