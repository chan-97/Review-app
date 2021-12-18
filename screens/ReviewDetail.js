import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetail() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetail</Text>
      <Text style={globalStyles.paragraph}>Lorem Ipsum ...</Text>
    </View>
  )
}