import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Form, Item, Label, Input } from "native-base";

export default ({ handleChangeText }) => (
  <Form>
    <Item style={styles.Input} floatingLabel>
      <Icon name="user" type="FontAwesome" style={{ color: "white" }} />
      <Label style={{ color: "white" }}>Email</Label>
      <Input onChangeText={email => handleChangeText(email, "email")} />
    </Item>
    <Item style={styles.Input} floatingLabel>
      <Icon name="lock" type="FontAwesome" style={{ color: "white" }} />
      <Label style={{ color: "white" }}>Password</Label>
      <Input
        secureTextEntry
        onChangeText={password => handleChangeText(password, "password")}
      />
    </Item>
    <Item style={styles.Input} floatingLabel>
      <Icon name="lock" type="FontAwesome" style={{ color: "white" }} />
      <Label style={{ color: "white" }}>Password Confirmation</Label>
      <Input
        secureTextEntry
        onChangeText={passwordConfirmation =>
          handleChangeText(passwordConfirmation, "passwordConfirmation")
        }
      />
    </Item>
  </Form>
);

const styles = StyleSheet.create({
  Input: {
    marginHorizontal: 20
  }
});
