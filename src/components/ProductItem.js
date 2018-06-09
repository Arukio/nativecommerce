import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Card, CardItem, Text } from "native-base";

export default ({ handlePress, item }) => (
  <TouchableOpacity
    style={styles.ProductContainer}
    onPress={() => handlePress(item)}
  >
    <Card>
      <CardItem header>
        <Image
          source={{
            uri: item.image[0]
          }}
          style={styles.ProductImage}
        />
      </CardItem>
      <CardItem style={{ flexDirection: "column" }}>
        <Text style={styles.ProductName}>{item.title}</Text>
        <Text style={styles.ProductPrice}>${item.price}</Text>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ProductContainer: {
    marginTop: 5
  },
  ProductImage: {
    height: 200,
    width: "100%"
  },
  ProductName: {
    marginBottom: 2,
    fontSize: 17
  },
  ProductPrice: {
    color: "#724EBD"
  }
});
