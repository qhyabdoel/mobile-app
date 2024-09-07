import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import styles from "@/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ height: "55%", justifyContent: "flex-end", paddingBottom: 32 }}
      >
        <Image
          source={require("@/assets/images/fruit-basket.png")}
          style={{ marginBottom: 16 }}
        />
        <Image source={require("@/assets/images/elipse.png")} />
      </View>

      <View
        style={{
          ...styles.topContainer,
          height: "45%",
        }}
      >
        <Text style={{ marginBottom: 10, ...styles.textHeader }}>
          Get The Freshest Fruit Salad Combo
        </Text>
        <Text style={styles.textContent}>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>

        <Link href={"/start"} asChild>
          <Pressable style={{ marginTop: 56, ...styles.buttonFullWidth }}>
            <Text style={styles.buttonTextWhite}>Let's Continue</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
