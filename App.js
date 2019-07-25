import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Rehydrated } from 'aws-appsync-react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import AWSAppSyncClient from 'aws-appsync';
import Checkout from './screens/Checkout';
import Catalog from './screens/Catalog';
import Orders from './screens/Orders';
import awsconfig from './aws-exports';
import store from './redux/store';

const appSyncClient = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
  }
});

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

const TabNavigator = createBottomTabNavigator({
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

const AppContainer = createAppContainer(TabNavigator);
const App = () => (
  <Root>
    <Provider store={store}>
      <ApolloProvider client={appSyncClient}>
        <Rehydrated>
          <AppContainer />
        </Rehydrated>
      </ApolloProvider>
    </Provider>
  </Root>
);

export default App;