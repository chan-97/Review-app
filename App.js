import React from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import { useFonts, Inconsolata_900Black } from "@expo-google-fonts/inconsolata";
import { Nunito_400Regular_Italic } from "@expo-google-fonts/nunito";

export default function App() {
  const [fontsLoaded] = useFonts({ Inconsolata_900Black, Nunito_400Regular_Italic });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  )
}