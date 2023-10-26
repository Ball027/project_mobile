
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated, FlatList} from "react-native";
import SportItem from "../components/SportItem";
import { SPORTS } from "../data/data";
const Homescreen = ({route,navigation}) => {
  const renderSportItem = (itemData) => {
    return (
      <SportItem
        name={itemData.item.name}
        image={itemData.item.imageurl}
        onSelectSport={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Calendar",{name:itemData.item.name})
        }}
      />
    );
  };
  // const catId = route.params.categoryid;
  // const availableMeals = useSelector(state => state.meals.filteredMeals)

  // const displayedMeals = availableMeals.filter(
  //   (meal) => meal.categoryIds.indexOf(catId) >= 0
  // );

  return(
    <View style={styles.container}>
    <FlatList
      style={{ width: "100%" }}
      data={SPORTS}
      renderItem={renderSportItem}
    />
  </View>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      elevation:4,
    },
  });
  
  export default Homescreen;
