import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "@/styles";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/global-provider";

export default function ListPage() {
  const [name, setName] = useState("");
  const { firstName, setFirstName } = useContext(GlobalContext);

  return (
    <View style={styles.grayContainer}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ width: "50%" }}>
          <Image
            source={require("@/assets/images/sort-icon.png")}
            style={{ height: 16, width: 24, marginTop: 12 }}
          />
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "flex-end",
          }}
        >
          <Link href={"/basket"} asChild>
            <Pressable>
              <Image
                source={require("@/assets/images/basket-icon.png")}
                style={{ marginLeft: 8, marginBottom: 4 }}
              />
              <Text style={{ ...styles.textBrandon, fontSize: 10 }}>
                My Basket
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
      <View style={{ marginTop: 32 }}>
        <Text style={{ ...styles.textBrandon, fontSize: 20 }}>
          {`Hello ${firstName || "Kante"}, What fruit salad`}
        </Text>
        <Text style={{ ...styles.textBrandon, fontSize: 20 }}>
          combo do you want today?
        </Text>
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <Image source={require("@/assets/images/search-input.png")} />
      </View>
      <View>
        <Text style={{ fontSize: 24, ...styles.textBold }}>
          Recomended Combo
        </Text>
      </View>
      <View style={{ marginBottom: 20, marginTop: 12, flexDirection: "row" }}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "white",
            marginRight: 16,
            width: "45%",
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 20 }}>
              <Image source={require("@/assets/images/salad-1.png")} />
            </View>
            <View>
              <Image source={require("@/assets/images/heart-icon.png")} />
            </View>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ ...styles.textBold, fontSize: 15 }}>
              Honey Lime Combo
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Image source={require("@/assets/images/price-tag.png")} />
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image source={require("@/assets/images/add-icon.png")} />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "white",
            width: "45%",
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 20 }}>
              <Image source={require("@/assets/images/salad-2.png")} />
            </View>
            <View>
              <Image source={require("@/assets/images/heart-icon.png")} />
            </View>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ ...styles.textBold, fontSize: 15 }}>
              Berry Mango Combo
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Image source={require("@/assets/images/price-tag.png")} />
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image source={require("@/assets/images/add-icon.png")} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image source={require("@/assets/images/hottes-tag.png")} />
        <Image
          source={require("@/assets/images/label-group.png")}
          style={{ marginLeft: 40, marginTop: 6 }}
        />
      </View>
      <ScrollView
        horizontal={true}
        style={{ marginVertical: 20, flexDirection: "row", width: "100%" }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "#FFFAEB",
            marginRight: 8,
            width: 150,
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 20, marginRight: 4 }}>
              <Image source={require("@/assets/images/salad-3.png")} />
            </View>
            <View>
              <Image source={require("@/assets/images/heart-icon.png")} />
            </View>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ ...styles.textBold, fontSize: 15 }}>
              Quinoa Fruit Salad
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Image source={require("@/assets/images/price-tag.png")} />
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image source={require("@/assets/images/add-icon.png")} />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "#FEF0F0",
            marginRight: 8,
            width: 150,
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 20, marginRight: 4 }}>
              <Image source={require("@/assets/images/salad-3.png")} />
            </View>
            <View>
              <Image source={require("@/assets/images/heart-icon.png")} />
            </View>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ ...styles.textBold, fontSize: 15 }}>
              Quinoa Fruit Salad
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Image source={require("@/assets/images/price-tag.png")} />
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image source={require("@/assets/images/add-icon.png")} />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "#F1EFF6",
            marginRight: 8,
            width: 150,
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 20, marginRight: 4 }}>
              <Image source={require("@/assets/images/salad-3.png")} />
            </View>
            <View>
              <Image source={require("@/assets/images/heart-icon.png")} />
            </View>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ ...styles.textBold, fontSize: 15 }}>
              Quinoa Fruit Salad
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Image source={require("@/assets/images/price-tag.png")} />
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <Image source={require("@/assets/images/add-icon.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
