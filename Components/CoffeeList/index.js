import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("CartScreen")}>
        <Icon
          style={{ color: "white" }}
          type="FontAwesome"
          name="shopping-cart"
          fontSize="large"
        />
      </Button>
    ),
    headerTintColor: "white"
  };
};

export default observer(CoffeeList);
