import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content, Button } from "native-base";
import SignupForm from "../components/SignupForm";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleChangeText = (data, target) => {
    this.setState({
      [target]: data
    });
  };

  render() {
    return (
      <Container style={styles.Container}>
        <Content>
          <Icon name="shopping-cart" type="FontAwesome" style={styles.Icon} />
          <SignupForm handleChangeText={this.handleChangeText} />
          <Button primary rounded style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Signup</Text>
          </Button>
          <Text style={styles.SignupText}>
            Already have an account?
            <Text onPress={() => this.props.navigation.navigate("Login")}>
              {" "}
              Login
            </Text>
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#3E92CC"
  },
  Icon: {
    fontSize: 150,
    color: "white",
    paddingTop: 100,
    paddingBottom: 20,
    alignSelf: "center"
  },
  LoginButton: {
    alignSelf: "center",
    height: 50,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  LoginButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    marginHorizontal: 40
  },
  SignupText: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "300",
    color: "white"
  }
});

export default Signup;
