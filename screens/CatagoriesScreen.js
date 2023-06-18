import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CatagoryGridTile from "../components/CatagoryGridTile";

function CatagoriesScreen({ navigation }) {
  function renderCatagoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("Meals Overview Screen", { id: itemData.item.id });
    }
    return (
      <CatagoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatagoryItem}
      numColumns={2}
    />
  );
}

export default CatagoriesScreen;
