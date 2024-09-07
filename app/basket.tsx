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

export default function BasketPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={{ backgroundColor: "#FFA451", height: "17%" }}>
        <View
          style={{ paddingTop: 48, paddingHorizontal: 8, flexDirection: "row" }}
        >
          <Link asChild href={"/list"}>
            <Pressable>
              <Image source={require("@/assets/images/back-btn.png")} />
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
            My Basket
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", paddingTop: 32, height: "83%" }}>
        <Image source={require("@/assets/images/list-item.png")} />
        <Image source={require("@/assets/images/list-item.png")} />
        <Image source={require("@/assets/images/list-item.png")} />

        <View
          style={{
            paddingHorizontal: 32,
            position: "absolute",
            bottom: 80,
            zIndex: 10,
            width: "100%",
          }}
        >
          <Pressable
            style={{
              ...styles.buttonFullWidth,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonTextWhite}>Check Out</Text>
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="slide" // Animasi slide up
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Untuk menutup modal
      >
        {/* Dark background overlay */}
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setModalVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContainer}>
            <View style={{ paddingTop: 28, ...styles.modalContent }}>
              <Image
                source={require("@/assets/images/cart-input-group-1.png")}
                style={{ marginVertical: 12 }}
              />
              <Image
                source={require("@/assets/images/cart-input-group-2.png")}
                style={{ marginVertical: 12 }}
              />
              <Image
                source={require("@/assets/images/cart-input-group-3.png")}
                style={{ marginVertical: 12 }}
              />

              <View
                style={{ paddingHorizontal: 16, marginTop: 48, width: "100%" }}
              >
                <Link href={"/tracker"} asChild>
                  <Pressable
                    style={{
                      ...styles.buttonFullWidth,
                    }}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.buttonTextWhite}>Complete Order</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
