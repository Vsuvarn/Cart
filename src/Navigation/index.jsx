import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Menu from '../Screen/Menu.screen';
import Cart from '../Screen/Cart.screen';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const stateOrder = useSelector(state => state.OrderReducer);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Menu"
        
      >
        <Tab.Screen name="Menu" component={Menu} 
        options={{
          tabBarLabel: 'Food menu',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="fastfood" size={size} color={color} />;
          },
        }}/>
        <Tab.Screen name="Cart" component={Cart} options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name={stateOrder.cart.length > 0 ?"cart-check":"cart"} size={size} color={color} />;
          },
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}