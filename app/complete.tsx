import styles from "@/styles";
import { Link } from "expo-router";
import { View, Image, Pressable } from "react-native";

export default function CompletePage() {
  return (
    <View style={{ alignItems: "center", ...styles.whiteContainer, flex: 1 }}>
      <Image
        source={require("@/assets/images/complete-msg.png")}
        style={{ marginTop: 64 }}
      />
      <Link href={"/tracker"} asChild>
        <Pressable style={{ marginVertical: 64 }}>
          <Image source={require("@/assets/images/track-btn.png")} />
        </Pressable>
      </Link>
      <Link href={"/start"} asChild>
        <Pressable>
          <Image source={require("@/assets/images/shopping-btn.png")} />
        </Pressable>
      </Link>
    </View>
  );
}
