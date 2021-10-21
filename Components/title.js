import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Quizzier</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
    fontWeight: "600",
  },
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
