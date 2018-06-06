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
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={styles.BackIcon} />
            </Button>
          </Left>
          <Body>
            <Title>Products</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                name="shopping-cart"
                type="FontAwesome"
                style={styles.BackIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content style={styles.Content}>
          <ProductItem />
          <ProductItem />
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
