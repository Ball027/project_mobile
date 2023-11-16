
import React, { useRef, Component } from "react";
import { View, Text, Button, StyleSheet, Animated, FlatList } from "react-native";
import SportItem from "../components/SportItem";
import { SPORTS } from "../data/data";
import firebase from "../database/firebaseDB";

class Homescreen extends Component {
  constructor() {
    super();
    this.sportcollect = firebase.firestore().collection("Sport")
    this.state = {
      sport_list: []
    };
  };
  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const { name, court, image } = res.data();
      all_data.push({ key: res.id, name, court, image });
    });
    this.setState({ sport_list: all_data, });
  };
  componentDidMount() {
    this.unsubscribe = this.sportcollect.onSnapshot(this.getCollection);

  }
  render() {
    const { navigation } = this.props
    const renderSportItem = (itemData) => {
      return (
        <SportItem
          name={itemData.item.name}
          image={itemData.item.image}
          court={itemData.item.court}
          onSelectSport={() => {
            navigation.navigate("Calendar", { name: itemData.item.name, havecourt: itemData.item.court })
          }}
        />
      );
    };
    return (
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.sport_list}
          renderItem={renderSportItem}
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
});

export default Homescreen;
