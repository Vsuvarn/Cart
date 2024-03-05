import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Card, IconButton, MD3Colors, Snackbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../Redux-Store/Order.Reducer";
import { useNavigation } from '@react-navigation/native';

export default function CustomCard({item,qty}) {
  const stateOrder = useSelector(state => state.OrderReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Card style={Style.cardView}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: item.image }} style={Style.img} />
        <View style={Style.content}>
          <Text variant="titleMedium">{`${item.name}`}</Text>
          <Text variant="titleSmall">{`$${item.price}`}</Text>
          {
            item.description === '' ?
              (
                <React.Fragment>
                  <Text variant="labelLarge" numberOfLines={1}>{`Ingredients: `}</Text>
                  <Text variant="bodySmall" numberOfLines={2}>{`${item.ingredients.flat()}`}</Text>
                </React.Fragment>
              )
              :
              (
                <React.Fragment>
                  <Text variant="labelLarge" numberOfLines={1}>{`Description: `}</Text>
                  <Text variant="bodySmall" numberOfLines={2}>{`${item.description}`}</Text>
                </React.Fragment>
              )
          }
        </View>
        <View style={Style.leftButton}>
          <IconButton
            icon="plus-box"
            iconColor={MD3Colors.primary50}
            size={20}
            onPress={() => dispatch(ADD_TO_CART({ ...item }))} />
          <Text variant="labelLarge">{`${qty ? qty : 0}`}</Text>
          <IconButton
            icon="minus-box"
            iconColor={MD3Colors.primary50}
            size={20}
            onPress={() => dispatch(REMOVE_FROM_CART({ ...item }))} />
        </View>
      </View>
    </Card>
  )
}

const Style = StyleSheet.create({
  cardView: { padding: '3%', marginTop: '2%' },
  img: { aspectRatio: 1, height: 100, resizeMode: 'contain', backgroundColor: '#FFFFFF', borderRadius: 5, },
  leftButton: { flex: 1, alignItems: 'center', justifyContent: 'center', },
  content: { flex: 4, paddingLeft: '2%', alignSelf: 'flex-start', }
});