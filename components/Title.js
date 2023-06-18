import { Text, StyleSheet } from "react-native";
function Title({ children, size }) {
  return <Text style={[styles.title, { fontSize: size }]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
