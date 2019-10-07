import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Profile from "../Components/Profile";
import Login from "../Components/Login";

import { Icon } from "native-base";

const AuthTab = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name="home" size={20} />
      )
    },
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    }
  }
);

export default AuthTab;
