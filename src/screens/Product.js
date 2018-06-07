import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
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
import { connect } from "react-redux";
import ProductItem from "../components/ProductItem";
import { FetchProduct } from "../actions/product";

const mapStateToProps = state => ({
  isFetching: state.product.isFetching,
  products: state.product.products
});

class Product extends Component {
  componentDidMount = () => {
    this.props.dispatch(FetchProduct());
  };

  renderItemData = item => (
    <FlatList
      data={this.props.products}
      renderItem={({ item }) => (
        <ProductItem handlePress={this.handlePressItem} item={item} />
      )}
      keyExtractor={item => item.title.toString()}
    />
  );

  handlePressItem = () => {
    console.log("pressed");
    this.props.navigation.navigate("ProductDetail");
  };

  render() {
    const { isFetching, products } = this.props;
    const renderProduct = isFetching ? null : this.renderItemData();
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
        <Content style={styles.Content}>{renderProduct}</Content>
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

export default connect(mapStateToProps)(Product);
