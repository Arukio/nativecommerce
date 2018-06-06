import { createStackNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import Product from "../screens/Product";
import ProductDetail from "../screens/ProductDetail";

const Root = createStackNavigator(
  {
    ProductDetail: ProductDetail,
    Product: Product,
    Profile: Profile
  },
  {
    headerMode: "none"
  }
);

export default Root;
