import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "@/styles";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/global-provider";

export default function StartScreen() {
  const [name, setName] = useState("");
  const { firstName, setFirstName } = useContext(GlobalContext);
  useEffect(() => setFirstName(name), [name]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{ height: "55%", justifyContent: "flex-end", paddingBottom: 32 }}
      >
        <Image
          source={require("@/assets/images/fruit-bag.png")}
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
          What is your firstname?
        </Text>
        <TextInput
          style={{ marginTop: 8, ...styles.textInput }}
          placeholder="Type here to translate!"
          onChangeText={(newName) => setName(newName)}
          defaultValue={name}
        />

        <Link href={"/list"} asChild>
          <Pressable style={{ marginTop: 40, ...styles.buttonFullWidth }}>
            <Text style={styles.buttonTextWhite}>Start Ordering</Text>
          </Pressable>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
