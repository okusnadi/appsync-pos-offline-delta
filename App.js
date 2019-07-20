import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Checkout from './screens/Checkout';
import Catalog from './screens/Catalog';
import Orders from './screens/Orders';

const CheckoutNavigator = createStackNavigator({
  Catalog: {
    screen: Catalog,
  },
  Checkout: {
    screen: Checkout,
  }
});

const OrdersNavigator = createStackNavigator({
  Orders: {
    screen: Orders,
  }
});

const App = createBottomTabNavigator({
    Checkout: {
      screen: CheckoutNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="ios-cart" size={22} color={tintColor} />;
        }
      }
    },
    Orders: {
      screen: OrdersNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name="ios-archive" size={22} color={tintColor} />;
        }
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(App);