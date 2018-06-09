import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { Root } from "native-base";
import App from "./src";

export default () => (
  <Provider store={store}>
    <Root>
      <App />
    </Root>
  </Provider>
);
