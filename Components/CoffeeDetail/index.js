import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Icon
} from "native-base";

// Style
import styles from "./styles";

// Data
import cafes from "../../data/cafes";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  render() {
    const cafeID = this.props.navigation.getParam("cafeID");
    if (!cafes) return <Content />;
    const cafe = cafes.find(cafeShop => cafeID === cafeShop.id);
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {cafe.name + "\n"}
                <Text note>{cafe.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: cafe.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => {
  const cafeID = navigation.getParam("cafeID");
  const cafe = cafes.find(cafeObj => cafeID === cafeObj.id);
  return {
    title: cafe.name,
    headerRight: (
      <Button transparent onPress={() => navigation.navigate("CartScreen")}>
        <Icon
          style={{ color: "white" }}
          type="FontAwesome"
          name="shopping-cart"
          fontSize="large"
        />
      </Button>
    )
  };
};

export default observer(CoffeeDetail);
