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
  Thumbnail
} from "native-base";
import ImageSlider from "react-native-image-slider";
import StarRating from "react-native-star-rating";

class ProductDetail extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={styles.BackIcon} />
            </Button>
          </Left>
          <Body>
            <Text>Details</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <ImageSlider
            images={[
              "https://s7d2.scene7.com/is/image/dkscdn/17ADIWCLDFMQTRCRCLFS_Black_White_is/",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovmhKf2G1pUbks8W7quhv2JXKYokrEVlF2Nmp5FKscKMMbKsg"
            ]}
            style={{ width: "100%", height: 200 }}
            loopBothSides
          />

          <View style={styles.ProductInfo}>
            <H3>Adidas Shoe Extreme Edition</H3>
            <View style={styles.ProductInfoFooter}>
              <Text style={styles.ProductPrice}>$12.5</Text>
              <StarRating disabled maxStars={5} rating={2} starSize={21} />
            </View>
          </View>

          <View style={styles.ProductDesc}>
            <Text style={{ padding: 5, color: "grey" }}>Description : </Text>
            <View style={styles.ProductDescContent}>
              <Text>
                sdkjfhakjsdhfksjdahflkjdshfkhsdklfjhslakfhksdjh khdsk jfhksdjh
                kjhs kasdh kdhs ksdhkfha ksjdk hskjdh a
              </Text>
              <Text style={{ color: "green" }} onPress={() => alert("pressed")}>
                Read more
              </Text>
            </View>
          </View>

          <View style={styles.ProductSeller}>
            <Text style={{ padding: 5, color: "grey" }}>Seller </Text>
            <View style={styles.ProductSellerDetail}>
              <Thumbnail
                source={{
                  uri:
                    "https://www.cloud66.com/assets/testimonials/websummit-f1647e69d145ceb2f4e123268ee48aa72c572ddf62c0e57de4cf35d09ce9ee19.jpg"
                }}
              />
              <View style={styles.ProductSellerContainer}>
                <Text style={styles.ProductSellerName}>Adidas Seller</Text>
                <StarRating disabled maxStars={5} rating={2} starSize={20} />
              </View>
            </View>
          </View>

          <View style={styles.ProductReview}>
            <Text style={{ padding: 5, color: "grey" }}>Review </Text>
          </View>
        </Content>
        <TouchableOpacity>
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

export default ProductDetail;
