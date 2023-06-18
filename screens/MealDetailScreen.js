import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/data";
import ExtraInfoContainer from "./ExtraInfoContainer";
import Title from "../components/Title";
import ItemList from "../components/MealItemComponents/ItemList";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id == mealId);

  function save() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <IconButton icon="star" size={24} color="white" onPress={save} />
        );
      },
    });
  }, [mealId, navigation, save]);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image}></Image>
      <Title size={24}>{meal.title}</Title>

      <ExtraInfoContainer
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        style={{ color: "white" }}
      />
      <View style={styles.contentWidthLimiter}>
        <View style={styles.subtitleContainer}>
          <Title size={18}>Ingredients</Title>
        </View>
        <ItemList array={meal.ingredients} />
        <View style={styles.subtitleContainer}>
          <Title size={18}>Steps</Title>
        </View>
        <ItemList array={meal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 6,
    width: "100%",
    marginVertical: 4,
  },
  contentWidthLimiter: {
    marginHorizontal: "10%",
    width: "80%",
    alignItems: "center",
  },
});
