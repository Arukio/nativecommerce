import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Header,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Content
} from "native-base";
import { connect } from "react-redux";
import FooterTabs from "../components/FooterTabs";
import FavoriteItem from "../components/FavoriteItem";
import { getDetail } from "../actions/product";

const mapStateToProps = state => ({
  favorite: state.favorite.favorites
});

class Favorite extends Component {
  handleDetail = data => {
    this.props.dispatch(getDetail(data));
    this.props.navigation.navigate("ProductDetail");
  };

  handleRemove = data => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={styles.BackIcon} />
            </Button>
          </Left>
          <Body>
            <Text>Favorite Product</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            data={this.props.favorite}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <FavoriteItem
                data={item}
                handleDetail={this.handleDetail}
                handleRemove={this.handleRemove}
              />
            )}
          />
        </Content>
        <FooterTabs navigator={this.props.navigation} />
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
  }
});

export default connect(mapStateToProps)(Favorite);
