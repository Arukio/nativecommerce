import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Button,
  Content
} from "native-base";
import OrderItem from "../components/OrderItem";

class Order extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" style={styles.blackIcon} />
            </Button>
          </Left>
          <Body>
            <Title>My Order</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <OrderItem />
          <OrderItem />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#3E92CC"
  },
  blackIcon: {
    color: "black"
  }
});

export default Order;
