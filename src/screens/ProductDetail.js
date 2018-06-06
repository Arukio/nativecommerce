import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
  Content
} from "native-base";
import ImageSlider from "react-native-image-slider";

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
        </Content>
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

export default ProductDetail;
