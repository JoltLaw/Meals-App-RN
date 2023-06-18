import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/data";
import { FlatList, View, Text, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.id;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const mealItemProps = {
      name: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      id: itemData.item.id,
      onPress: () => {
        navigation.navigate("Meal Screen", { mealId: itemData.item.id });
      },
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(mealItem) => mealItem.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
