import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
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
import { connect } from "react-redux";
import OrderItem from "../components/OrderItem";

const mapStateToProps = state => ({
  orderItem: state.order.data
});

class Order extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate("Product")}
              transparent
            >
              <Icon name="arrow-back" style={styles.blackIcon} />
            </Button>
          </Left>
          <Body>
            <Title>My Order</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            data={this.props.orderItem}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <OrderItem item={item} />}
          />
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

export default connect(mapStateToProps)(Order);
