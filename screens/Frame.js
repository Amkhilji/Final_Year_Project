import React from "react";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    flex: 1,
    width: "100%",
    height: 826,
    justifyContent: "center",
  },
});

export default Frame;
