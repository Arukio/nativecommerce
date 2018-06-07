import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Content,
  Textarea
} from "native-base";

class Shipping extends Component {
  state = {
    text: ""
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
            <Title>Shipping</Title>
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

          <View style={styles.ShippinAddress}>
            <Text>Your Shipping Address</Text>
            <Text style={{ color: "grey", marginTop: 5 }}>Primary Address</Text>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <Button style={styles.Button} primary>
            <Text style={styles.ButtonText}>Proceed Payments</Text>
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
  ShippinAddress: {
    backgroundColor: "white",
    marginHorizontal: 20,
    height: 200,
    padding: 10
  },
  Button: {
    alignSelf: "center",
    backgroundColor: "#6944B9",
    marginVertical: 20
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 100
  }
});

export default Shipping;
