
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated, FlatList} from "react-native";
import SportItem from "../components/SportItem";
import { SPORTS } from "../data/data";
const Homescreen = ({route,navigation}) => {
  const renderMealItem = (itemData) => {
    return (
      <SportItem
        name={itemData.item.name}
        // duration={itemData.item.duration}
        // complexity={itemData.item.complexity}
        // affordability={itemData.item.affordability}
        image={itemData.item.imageurl}
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม
          // navigation.navigate("MealDetail",{mealtitle:itemData.item.title,mealsteps:itemData.item.steps})
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
    <View style={styles.screen}>
    <FlatList
      style={{ width: "100%" }}
      data={SPORTS}
      renderItem={renderMealItem}
    />
    <Text>Hi</Text>
  </View>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      flex:1,
      width:1000,
      height:150
    },
    button:{
      flex:1,
      paddingHorizontal:20,
      margin:10,
    }
  });
  
  export default Homescreen;
