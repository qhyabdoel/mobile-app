import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Link href="/">View index</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
