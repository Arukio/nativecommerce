import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Auth from "./routes/auth";
import Root from "./routes/root";

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin
});

class App extends Component {
  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      return <Root />;
    }
    return <Auth />;
  }
}

export default connect(mapStateToProps)(App);
