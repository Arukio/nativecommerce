import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Text,
  Content
} from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import ProfileImage from "../components/ProfileImage";
import ProfileItemMenu from "../components/ProfileItemMenu";

class Profile extends Component {
  state = {
    avatar: "https://avatars1.githubusercontent.com/u/8302633?s=88&v=4"
  };

  handleNavigation = page => {
    console.log(page);
  };

  handleChangeAvatar = () => {
    ImagePicker.showImagePicker(null, response => {
      if (response.didCancel) {
        return;
      }
      this.setState({
        avatar: response.uri
      });
    });
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#E4E3EB" }}>
        <ImageBackground
          source={{
            uri:
              "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&h=350"
          }}
          style={{ width: "100%", height: 200 }}
        >
          <Header style={styles.Header}>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
                <Title> Account</Title>
              </Button>
            </Left>
            <Body />
          </Header>
        </ImageBackground>
        <View style={styles.ProfileDesc}>
          <Text style={styles.ProfileName}>Irfan Marzuki</Text>
          <Text style={styles.ProfileName}>Ragnaboyx@gmail.com</Text>
        </View>
        <ProfileImage
          imageUrl={this.state.avatar}
          handlePress={this.handleChangeAvatar}
        />
        <Content>
          <ProfileItemMenu
            name="My order"
            handlePress={this.handleNavigation}
            redirectTo="Order"
          />
          <ProfileItemMenu
            name="My Whislist"
            handlePress={this.handleNavigation}
            redirectTo="Order"
          />
          <ProfileItemMenu
            name="Setting"
            handlePress={this.handleNavigation}
            redirectTo="Order"
          />
          <ProfileItemMenu
            name="Logout"
            handlePress={this.handleNavigation}
            redirectTo="Order"
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "transparent",
    elevation: 0
  },
  ProfileDesc: {
    backgroundColor: "white",
    height: 120,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10
  },
  ProfileName: {
    fontSize: 16,
    fontWeight: "300",
    color: "#000000"
  }
});

export default Profile;
