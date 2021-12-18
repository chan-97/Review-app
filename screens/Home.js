import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Home</Text>
      <Text style={styles.bodyText}>Lorem Ipsum ...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  headText: {
    fontFamily: "Inconsolata_900Black"
  },
  bodyText: {
    fontFamily: "Nunito_400Regular_Italic"
  }
})