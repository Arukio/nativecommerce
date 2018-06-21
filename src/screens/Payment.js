import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Title,
  Right,
  Icon,
  Body,
  Content
} from "native-base";
import { connect } from "react-redux";
import { proccedOrder } from "../actions/order";

const mapStateToProps = state => ({
  carts: state.cart.carts
});

class Payment extends Component {
  handleOrder = () => {
    this.props.dispatch(proccedOrder(this.props.carts));
    this.props.navigation.navigate("Order");
  };

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
            <Title>Payment</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.Line} />
          <View style={styles.StatusContainer}>
            <View style={[styles.Icon, { backgroundColor: "#4DBD54" }]}>
              <Icon name="log-in" style={{ color: "white" }} />
            </View>
            <View style={[styles.Icon, { backgroundColor: "#6944B9" }]}>
              <Icon type="FontAwesome" name="car" style={{ color: "white" }} />
            </View>
            <View style={[styles.Icon, { backgroundColor: "#2F76CA" }]}>
              <Icon
                type="FontAwesome"
                name="dollar"
                style={{ color: "white" }}
              />
            </View>
          </View>
          <View style={styles.CreditCard}>
            <Text style={styles.CreditCardText}>Card Number</Text>
            <TextInput style={styles.Input} placeholder="xxxx-xxxx-xxxx-xxxx" />
            <Text style={styles.CreditCardText}>Card Name</Text>
            <TextInput style={styles.Input} placeholder="Jhon doe" />
            <View style={styles.CreditCardFooter}>
              <View>
                <Text style={styles.CreditCardText}>MM</Text>
                <TextInput style={[styles.Input, { width: 60 }]} />
              </View>
              <View>
                <Text style={styles.CreditCardText}>YY</Text>
                <TextInput style={[styles.Input, { width: 60 }]} />
              </View>
              <View>
                <Text style={styles.CreditCardText}>CVV</Text>
                <TextInput style={[styles.Input, { width: 60 }]} />
              </View>
            </View>
          </View>
          <Button style={styles.Button} primary onPress={this.handleOrder}>
            <Text style={styles.ButtonText}>Make Payment</Text>
          </Button>
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
  },
  StatusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20
  },
  Icon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  Line: {
    position: "absolute",
    alignSelf: "center",
    width: 200,
    borderBottomColor: "grey",
    borderBottomWidth: 4,
    top: 45,
    marginHorizontal: 20
  },
  CreditCard: {
    backgroundColor: "white",
    height: 230,
    marginHorizontal: 15
  },
  CreditCardText: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10
  },
  Input: {
    borderColor: "#E5E2E7",
    borderWidth: 2,
    height: 40,
    marginHorizontal: 10,
    fontSize: 15
  },
  CreditCardFooter: {
    flexDirection: "row"
  },
  Button: {
    alignSelf: "center",
    backgroundColor: "#6944B9",
    marginVertical: 20
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 120
  }
});

export default connect(mapStateToProps)(Payment);
