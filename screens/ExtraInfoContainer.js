import { View, Text, StyleSheet } from "react-native";

function ExtraInfoContainer({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{duration}M</Text>
      <Text style={[styles.text, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default ExtraInfoContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
  },
  text: {
    fontSize: 12,
    marginVertical: 4,
  },
});
