import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Result = ({ navigation }) => {
  return (
    <View>
      <Text>Result</Text>
      <View style={styles.bannercontainer}>
        <Image
          source={{
            uri: "https://media.gettyimages.com/vectors/isometric-video-conference-online-conference-work-online-vector-id1262900238",
          }}
          style={styles.banner}
          resizeMode="container"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.naviate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannercontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
