import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { GlobalProvider } from "@/global-provider";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    BrandonGrotesqueRegular: require("@/assets/fonts/Brandon-Grotesque-Regular.otf"),
    BrandonGrotesqueBold: require("@/assets/fonts/Brandon-Grotesque-Bold.otf"),
    BrandonGrotesqueMedium: require("@/assets/fonts/Brandon-Grotesque-Medium.otf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="details" />
      </Stack>
    </GlobalProvider>
  );
}
