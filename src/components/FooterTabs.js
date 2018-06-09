import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default ({ navigator }) => (
  <Footer>
    <FooterTab>
      <Button vertical>
        <Icon name="home" onPress={() => navigator.navigate("Product")} />
        <Text>Home</Text>
      </Button>
      <Button vertical>
        <Icon name="favorite" type="MaterialIcons" />
        <Text>Whistlist</Text>
      </Button>
      <Button vertical onPress={() => navigator.navigate("Cart")}>
        <Icon active name="cart" />
        <Text>My Cart</Text>
      </Button>
      <Button vertical onPress={() => navigator.navigate("Profile")}>
        <Icon name="person" />
        <Text>Profile</Text>
      </Button>
    </FooterTab>
  </Footer>
);
