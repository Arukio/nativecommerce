import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Icon } from "native-base";

export default () => (
  <View style={styles.ItemContainer}>
    <View style={styles.OrderTop}>
      <View style={styles.OrderTopText}>
        <Text style={{ fontWeight: "bold" }}>OrderID: 19232334</Text>
        <Text style={{ fontSize: 13 }}>Placed at: 21 april 2018</Text>
      </View>
      <Button style={styles.Button}>
        <Text>Track</Text>
      </Button>
    </View>
    <View style={styles.OrderBody}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.OrderImage}
          source={{
            uri:
              "https://cdn.shopify.com/s/files/1/0660/7355/products/Royal-Enfield-Urban-Scout-Jacket-Khakhi-Brown-1_800x.jpg?v=1521699915"
          }}
        />
        <View>
          <Text style={styles.ProductTitle}>
            Jacket Bulletproof ultra edition
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.Status}>Status:</Text>
              <Text style={[styles.Status, { color: "green" }]}>On Proces</Text>
              <Text style={styles.Status}>Expected at: 25 July 2018</Text>
              <Text style={styles.Status}>Last Update at: 25 July 2018</Text>
            </View>
            <Button transparent>
              <Icon name="refresh" style={{ height: 20, width: 20 }} />
            </Button>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  ItemContainer: {
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 5
  },
  OrderTop: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  Button: {
    backgroundColor: "#C2C2C2",
    height: 40,
    width: 60,
    justifyContent: "center"
  },
  OrderBody: {
    marginTop: 5,
    backgroundColor: "white",
    padding: 12,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    borderWidth: 1,
    borderColor: "#DFDFE2"
  },
  OrderImage: {
    height: 100,
    width: 100
  },
  ProductTitle: {
    fontWeight: "bold",
    marginBottom: 10
  },
  Status: {
    fontSize: 12,
    color: "grey"
  }
});
