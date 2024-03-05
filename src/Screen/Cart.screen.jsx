import React from "react";
import { View, ScrollView, Modal } from "react-native";
import { Text, Button, Card, IconButton, MD3Colors, Snackbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART,RESET_CART } from "../../Redux-Store/Order.Reducer";
import { useNavigation } from '@react-navigation/native';
import CustomCard from "../Components/CustomCard.components";
function Cart() {
  const stateOrder = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  
  function onPress() {
    setModalVisible(!modalVisible);
    navigation.navigate('Menu');
    setTimeout(()=>{dispatch(RESET_CART())},200)
  }
  var total;
  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: '3%', }}>
          {
            stateOrder.cart.length > 0 ? (
              stateOrder.cart.map((item, i) => {
                // let qty = stateOrder.cart.filter(x => x.name === _).length;
                // let item = newdata[_];
                let qty = item.qty;
                total = stateOrder.cart.reduce((a, c) => {
                  return a + c.qty * c.price;
                }, 0)
                return (<CustomCard qty={item.qty} item={item} keys={i} />)

              })
            )
              :
              (
                <Card>
                  <Card.Content>
                    <Text variant="titleLarge">No item</Text>
                  </Card.Content>
                </Card>
              )
          }
        </ScrollView>
      </View>
      {
        total && (
          <View>
            <View style={{ padding: '5%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <Text variant="titleLarge" >
                Total Order
              </Text>
              <Text variant="labelLarge" >
                {`$${total}`}
              </Text>
            </View>
            <Button mode="contained" onPress={() => setModalVisible(!modalVisible)} style={{ borderRadius: 0 }}>
              Order place
            </Button>
          </View>
        )
      }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <Card style={{ justifyContent:'center'}}>
            <Card.Content>
              <Text variant="titleLarge">Order place successfully</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={onPress}>Back to menu</Button>
            </Card.Actions>
          </Card>
        </View>

      </Modal>
    </React.Fragment>
  )
}

export default Cart