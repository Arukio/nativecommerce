import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Text,
  Content
} from "native-base";
import CartItem from "../components/CartItem";

class Cart extends Component {
  render() {
    const navigator = this.props.navigation;
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={() => navigator.goBack()}>
              <Icon name="arrow-back" style={styles.BackIcon} />
            </Button>
          </Left>
          <Body>
            <Text>Shopping Cart</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            data={[
              { key: "1" },
              { key: "2" },
              { key: "3" },
              { key: "4" },
              { key: "5" },
              { key: "6" }
            ]}
            renderItem={({ item }) => <CartItem />}
          />
        </Content>
        <TouchableOpacity>
          <View style={styles.OrderContainer}>
            <Text style={styles.OrderText}>Order Details</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#3E92CC"
  },
  BackIcon: {
    color: "black"
  },
  OrderContainer: {
    backgroundColor: "#3E92CC",
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  OrderText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700"
  }
});

export default Cart;
