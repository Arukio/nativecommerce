import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "native-base";

export default ({ data, handleRemove, handleDetail }) => (
  <View style={styles.CartItem}>
    <View style={styles.CartItemProduct}>
      <Image
        source={{
          uri: data.image[0]
        }}
        style={styles.CartItemImage}
      />
      <Text style={styles.CartItemName}>{data.title}</Text>
      <Text style={styles.CartItemRemove} onPress={() => handleRemove(data.id)}>
        x
      </Text>
    </View>
    <View style={styles.CartItemPrice}>
      <Text style={styles.CartItemPriceTag}>${data.price}</Text>
      <View style={styles.CartItemFooter}>
        <View style={styles.CartItemQuantity} />
        <Text style={styles.CartItemDetail} onPress={() => handleDetail(data)}>
          View Details
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  CartItem: {
    flex: 1,
    height: 160,
    backgroundColor: "white",
    margin: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    borderWidth: 1,
    borderColor: "#DFDFE2"
  },
  CartItemProduct: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  CartItemImage: {
    height: 100,
    width: 100,
    margin: 10
  },
  CartItemName: {
    width: "60%",
    paddingVertical: 10,
    fontWeight: "bold"
  },
  CartItemRemove: {
    marginRight: 10,
    fontSize: 20
  },
  CartItemPrice: {
    alignItems: "flex-end"
  },
  CartItemPriceTag: {
    paddingHorizontal: 20,
    color: "#3E92CC",
    fontSize: 20,
    bottom: 40
  },
  CartItemFooter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  CartItemDetail: {
    fontSize: 15,
    marginRight: 20,
    bottom: 20,
    color: "blue"
  }
});
