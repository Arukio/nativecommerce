import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
  Content,
  H3,
  Thumbnail,
  Toast
} from "native-base";
import { connect } from "react-redux";
import ImageSlider from "react-native-image-slider";
import StarRating from "react-native-star-rating";
import { addProduct } from "../actions/cart";
import { FetchSeller } from "../actions/seller";
import { addFavorite } from "../actions/favorite";

const mapStateToProps = state => ({
  product: state.product.productDetail
});

class ProductDetail extends Component {
  state = {
    showToast: false
  };

  handleAddToCart = product => {
    const data = {
      product: this.props.product
    };
    this.props.dispatch(addProduct(data));
    this.props.navigation.navigate("Cart");
  };

  handleGetSeller = data => {
    this.props.dispatch(FetchSeller(data));
    this.props.navigation.navigate("Seller");
  };

  handleAddtoFavorite = data => {
    this.props.dispatch(addFavorite(data));
    Toast.show({
      text: "Added To Favorite",
      buttonText: "Done"
    });
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={styles.BackIcon}
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>
          <Body>
            <Text>{product.title}</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <Icon
                name="shopping-cart"
                type="FontAwesome"
                style={styles.BackIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <ImageSlider
            images={product.image}
            style={{ width: "100%", height: 200 }}
            loopBothSides
          />
          <View style={styles.ProductInfo}>
            <H3>{product.title}</H3>
            <View style={styles.ProductInfoFooter}>
              <Text style={styles.ProductPrice}>${product.price}</Text>
              <StarRating
                disabled
                maxStars={5}
                rating={product.rating}
                starSize={21}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.Favorite}
            onPress={() => this.handleAddtoFavorite(product)}
          >
            <Icon name="heart" />
          </TouchableOpacity>
          <View style={styles.ProductDesc}>
            <Text style={{ padding: 5, color: "grey" }}>Description : </Text>
            <View style={styles.ProductDescContent}>
              <Text>{product.description}</Text>
              <Text style={{ color: "green" }} onPress={() => alert("pressed")}>
                Read more
              </Text>
            </View>
          </View>

          <View style={styles.ProductSeller}>
            <Text style={{ padding: 5, color: "grey" }}>Seller </Text>
            <TouchableOpacity
              style={styles.ProductSellerDetail}
              onPress={() => this.handleGetSeller(product)}
            >
              <Thumbnail
                source={{
                  uri: product.seller.avatar
                }}
              />
              <View style={styles.ProductSellerContainer}>
                <Text style={styles.ProductSellerName}>
                  {product.seller.name}
                </Text>
                <View style={{ width: 100 }}>
                  <StarRating
                    disabled
                    maxStars={5}
                    rating={product.seller.rating}
                    starSize={20}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.ProductReview}>
            <Text style={{ padding: 5, color: "grey" }}>Review </Text>
          </View>
        </Content>
        <TouchableOpacity onPress={this.handleAddToCart}>
          <View style={styles.AddToCartContainer}>
            <Text style={styles.AddToCartText}>Add To Cart</Text>
          </View>
        </TouchableOpacity>
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
  },
  Favorite: {
    position: "absolute",
    alignItems: "flex-end",
    width: 60,
    height: 60,
    backgroundColor: "#3E92CC",
    alignSelf: "flex-end",
    top: 170,
    left: 300,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  ProductInfo: {
    flex: 1,
    height: 120,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    opacity: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EFF0F1"
  },
  ProductInfoFooter: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ProductPrice: {
    color: "#724EBD",
    fontSize: 20,
    fontWeight: "600"
  },
  AddToCartContainer: {
    backgroundColor: "#3E92CC",
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  AddToCartText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700"
  },
  ProductDesc: {
    flex: 1,
    width: "100%",
    height: 120,
    backgroundColor: "white",
    marginTop: 10
  },
  ProductDescContent: {
    padding: 10,
    alignItems: "center"
  },
  ProductSeller: {
    flex: 1,
    width: "100%",
    height: 100,
    backgroundColor: "white",
    marginTop: 10
  },
  ProductSellerDetail: {
    flexDirection: "row",
    paddingHorizontal: 5
  },
  ProductSellerContainer: {
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  ProductSellerName: {
    fontSize: 17
  },
  ProductReview: {
    flex: 1,
    width: "100%",
    height: 200,
    backgroundColor: "white",
    marginTop: 10
  }
});

export default connect(mapStateToProps)(ProductDetail);
