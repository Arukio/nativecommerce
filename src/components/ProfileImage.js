import React from "react";
import { Thumbnail } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

export default ({ imageUrl, handlePress }) => (
  <TouchableOpacity
    onLongPress={() => handlePress()}
    style={styles.ImageContainer}
  >
    <Thumbnail
      large
      source={{
        uri: imageUrl
      }}
      style={styles.ProfileImage}
    />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  ProfileImage: {
    width: 150,
    height: 150
  },
  ImageContainer: {
    alignSelf: "center",
    position: "absolute",
    top: 110
  }
});
