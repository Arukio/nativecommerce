import { createStackNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import Product from "../screens/Product";

const Root = createStackNavigator(
  {
    Product: Product,
    Profile: Profile
  },
  {
    headerMode: "none"
  }
);

export default Root;
