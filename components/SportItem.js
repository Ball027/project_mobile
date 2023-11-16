import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const SportItem = (props) => {
  return (
    <View style={styles.SportItem}>
      <TouchableOpacity onPress={props.onSelectSport}>
        <View>
          <View style={{ ...styles.SportRow, ...styles.SportHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.name}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SportItem: {
    height: 300,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 0,
    overflow: "hidden",
    padding:15,
    elevation:4,
  },
  SportHeader: {
    height: "90%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(255,165,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default SportItem;
