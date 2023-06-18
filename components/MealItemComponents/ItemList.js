import { View, Text, StyleSheet } from "react-native";

function ItemList({ array }) {
  return (
    <>
      {array.map((item) => {
        return (
          <View style={styles.textContainer} key={item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
    width: "100%",
  },
  text: {
    color: "#1f1f1f",
    textAlign: "center",
  },
});
