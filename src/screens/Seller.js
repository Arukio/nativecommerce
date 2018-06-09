import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Thumbnail,
  Tabs,
  Tab,
  Content
} from "native-base";
import { connect } from "react-redux";
import StarRating from "react-native-star-rating";
import ProductItem from "../components/ProductItem";

const mapStateToProps = state => ({
  seller: state.seller.seller
});

class Seller extends Component {
  renderProduct = () => (
    <FlatList
      data={this.props.seller.products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  render() {
    return (
      <Container>
        <ImageBackground
          source={{
            uri:
              "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&h=350"
          }}
          style={{ width: "100%", height: 120 }}
        >
          <Header style={styles.Header}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" style={styles.BackIcon} />
                <Title> Seller</Title>
              </Button>
            </Left>
            <Body />
          </Header>
        </ImageBackground>
        <View style={styles.ProductSeller}>
          <View style={styles.ProductSellerDetail}>
            <Thumbnail
              source={{
                uri: this.props.seller.avatar
              }}
            />
            <View style={styles.ProductSellerContainer}>
              <Text style={styles.ProductSellerName}>
                {this.props.seller.name}
              </Text>
              <View style={{ width: 100 }}>
                <StarRating
                  disabled
                  maxStars={5}
                  rating={this.props.seller.rating}
                  starSize={21}
                />
              </View>
            </View>
          </View>
        </View>
        <Tabs>
          <Tab heading="Product">
            <Content>{this.renderProduct()}</Content>
          </Tab>
          <Tab heading="Review">
            <Text>Under construction</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "transparent",
    elevation: 0
  },
  BackIcon: {
    color: "black"
  },
  ProductSeller: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomColor: "#f0f0",
    borderBottomWidth: 1
  },
  ProductSellerDetail: {
    flexDirection: "row",
    paddingHorizontal: 5
  },
  ProductSellerContainer: {
    paddingHorizontal: 30,
    justifyContent: "space-between"
  },
  ProductSellerName: {
    fontSize: 17
  }
});

export default connect(mapStateToProps)(Seller);
