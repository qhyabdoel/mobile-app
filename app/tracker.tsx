import styles from "@/styles";
import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";

export default function TrackerPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={{ backgroundColor: "#FFA451", height: "17%" }}>
        <View
          style={{ paddingTop: 48, paddingHorizontal: 8, flexDirection: "row" }}
        >
          <Link asChild href={"/basket"}>
            <Pressable>
              <Image
                source={require("@/assets/images/back-btn.png")}
                style={{ width: 120, marginLeft: 24 }}
              />
            </Pressable>
          </Link>
          <Text
            style={{
              ...styles.textBold,
              fontSize: 28,
              marginTop: 24,
              color: "white",
            }}
          >
            Delivery Status
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          paddingTop: 40,
          paddingHorizontal: 24,
          height: "83%",
        }}
      >
        <Image source={require("@/assets/images/status-1.png")} />
        <Image
          source={require("@/assets/images/tracker-line.png")}
          style={{ marginLeft: 32 }}
        />
        <Image source={require("@/assets/images/status-2.png")} />
        <Image
          source={require("@/assets/images/tracker-line.png")}
          style={{ marginLeft: 32 }}
        />
        <Image source={require("@/assets/images/status-3.png")} />
        <Image
          source={require("@/assets/images/tracker-line.png")}
          style={{ marginLeft: 32 }}
        />
        <Image source={require("@/assets/images/tracker-map.png")} />
        <Image
          source={require("@/assets/images/tracker-line.png")}
          style={{ marginLeft: 32 }}
        />
        <Link href={"/complete"}>
          <Image source={require("@/assets/images/status-5.png")} />
        </Link>
      </View>
    </View>
  );
}
