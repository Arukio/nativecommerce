import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Card, CardItem, Text } from "native-base";

export default () => (
  <TouchableOpacity style={styles.ProductContainer}>
    <Card>
      <CardItem header>
        <Image
          source={{
            uri:
              "https://s7d2.scene7.com/is/image/dkscdn/17ADIWCLDFMQTRCRCLFS_Black_White_is/"
          }}
          style={styles.ProductImage}
          resizeMode="contain"
        />
      </CardItem>
      <CardItem style={{ flexDirection: "column" }}>
        <Text style={styles.ProductName}>Adidas</Text>
        <Text style={styles.ProductPrice}>$12</Text>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ProductContainer: {
    marginTop: 5
  },
  ProductImage: {
    height: 180,
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
