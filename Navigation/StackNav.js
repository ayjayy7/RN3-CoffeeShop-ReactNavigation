import { createStackNavigator } from "react-navigation-stack";

// Components
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    LoginScreen: Login,
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default StackNav;
