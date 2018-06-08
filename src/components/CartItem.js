import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "native-base";

export default ({
  data,
  handlePlus,
  handleMinus,
  handleRemove,
  handleDetail
}) => (
  <View style={styles.CartItem}>
    <View style={styles.CartItemProduct}>
      <Image
        source={{
          uri: data.product.image[0]
        }}
        style={styles.CartItemImage}
      />
      <Text style={styles.CartItemName}>{data.product.title}</Text>
      <Text style={styles.CartItemRemove} onPress={() => handleRemove(data.id)}>
        x
      </Text>
    </View>
    <View style={styles.CartItemPrice}>
      <Text style={styles.CartItemPriceTag}>${data.product.price}</Text>
      <View style={styles.CartItemFooter}>
        <View style={styles.CartItemQuantity}>
          <Icon
            name="plus"
            type="FontAwesome"
            onPress={() => handlePlus(data.id)}
            style={styles.CartItemButton}
          />
          <Text>{data.quantity}</Text>
          <Icon
            name="minus"
            type="FontAwesome"
            onPress={() => handleMinus(data.id)}
            style={styles.CartItemButton}
          />
        </View>
        <Text
          style={styles.CartItemDetail}
          onPress={() => handleDetail(data.product)}
        >
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
    marginRight: 10
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
  },
  CartItemQuantity: {
    flexDirection: "row",
    marginHorizontal: 10,
    bottom: 10
  },
  CartItemButton: {
    fontSize: 15,
    paddingHorizontal: 5
  }
});
