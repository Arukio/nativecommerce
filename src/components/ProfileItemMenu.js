import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default ({ name, handlePress, redirectTo }) => (
  <TouchableOpacity onPress={() => handlePress(redirectTo)}>
    <View style={styles.ItemMenu}>
      <Text style={styles.TextMenu}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ItemMenu: {
    height: 50,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "white",
    elevation: 2,
    justifyContent: "center"
  },
  TextMenu: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 20,
    color: "black"
  }
});
