import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content, Button } from "native-base";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import { LogingIn } from "../actions/auth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeText = (data, target) => {
    this.setState({
      [target]: data
    });
  };

  handleSubmit = () => {
    console.log("pressed");
    this.props.dispatch(LogingIn(this.state));
  };

  render() {
    return (
      <Container style={styles.Container}>
        <Content>
          <Icon name="shopping-cart" type="FontAwesome" style={styles.Icon} />
          <LoginForm handleChangeText={this.handleChangeText} />
          <Button
            primary
            rounded
            style={styles.LoginButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.LoginButtonText}>Login</Text>
          </Button>
          <Text style={styles.SignupText}>
            Don't Have an Account?
            <Text onPress={() => this.props.navigation.navigate("Signup")}>
              {" "}
              Signup
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

export default connect()(Login);
