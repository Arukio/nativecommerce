import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Text,
  Content
} from "native-base";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import { removeProduct, addQuantity, removeQuantity } from "../actions/cart";

const mapStateToProps = state => ({
  carts: state.cart.carts
});

class Cart extends Component {
  handlePlus = id => {
    let index = this.props.carts.findIndex(item => item.id === id);
    this.props.dispatch(addQuantity(index));
  };
  handleMinus = id => {
    let index = this.props.carts.findIndex(item => item.id === id);
    this.props.dispatch(removeQuantity(index));
  };
  handleRemove = id => {
    let index = this.props.carts.findIndex(item => item.id === id);
    this.props.dispatch(removeProduct(index));
  };
  handleDetail = () => {
    this.props.navigation.navigate("ProductDetail");
  };

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
            keyExtractor={item => item.id.toString()}
            data={this.props.carts}
            renderItem={({ item }) => (
              <CartItem
                data={item}
                handleDetail={this.handleDetail}
                handleMinus={this.handleMinus}
                handlePlus={this.handlePlus}
                handleRemove={this.handleRemove}
              />
            )}
          />
        </Content>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Shipping")}
        >
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

export default connect(mapStateToProps)(Cart);
