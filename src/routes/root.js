import { createStackNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import Product from "../screens/Product";
import ProductDetail from "../screens/ProductDetail";
import Cart from "../screens/Cart";
import Shipping from "../screens/Shipping";
import Seller from "../screens/Seller";

const Root = createStackNavigator(
  {
    Shipping: Shipping,
    ProductDetail: ProductDetail,
    Product: Product,
    Profile: Profile,
    Cart: Cart,
    Seller: Seller
  },
  {
    headerMode: "none",
    initialRouteName: "Product"
  }
);

export default Root;
