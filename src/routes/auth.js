import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Auth = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    headerMode: "none"
  }
);

export default Auth;
