import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Text, List, Card, IconButton, MD3Colors, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../Redux-Store/Order.Reducer";
import { useNavigation } from '@react-navigation/native';
import CustomCard from "../Components/CustomCard.components";
function Menu() {
  const stateOrder = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 10, }}>
          <List.AccordionGroup>
            {
              Object.keys(stateOrder.items).map((name, i) => (

                <List.Accordion title={name} titleStyle={{ textTransform: 'capitalize', fontSize: 18 }} id={i} keys={i}>
                  <View style={{ paddingHorizontal: '2%' }}>
                    {
                      stateOrder.items[name].map((item, j) => {
                        
                        let qty = stateOrder.cart.filter(x => x.name === item.name)[0]?.qty;
                        return (<CustomCard qty={qty} item={item} keys={j}/>)
                       
                      })
                    }
                  </View>
                </List.Accordion>
              ))
            }
          </List.AccordionGroup>
        </ScrollView>

      </View>
      {
        stateOrder.cart.length > 0 && (
          <View>
            <View style={{ padding: '5%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <Button icon="cart-arrow-right" mode="contained" onPress={() => navigation.navigate('Cart')} style={{ borderRadius: 5 }}>
                View cart
              </Button>
            </View>
          </View>
        )
      }

    </React.Fragment>
  );
}

export default Menu;
