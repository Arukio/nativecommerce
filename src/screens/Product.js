import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Content
} from "native-base";
import ProductItem from "../components/ProductItem";

class Product extends Component {
  handlePressItem = () => {
    console.log("pressed");
    this.props.navigation.navigate("ProductDetail");
  };

  render() {
    const navigator = this.props.navigation;
    return (
      <Container>
        <Header style={styles.Header}>
          <Left />
          <Body>
            <Title>Products</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigator.navigate("Cart")}>
              <Icon
                name="shopping-cart"
                type="FontAwesome"
                style={styles.BackIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content style={styles.Content}>
          <ProductItem handlePress={this.handlePressItem} />
          <ProductItem handlePress={this.handlePressItem} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#3E92CC"
  },
  Content: {
    paddingHorizontal: 10
  },
  BackIcon: {
    color: "black"
  }
});

export default Product;
