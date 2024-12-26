import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Register from './screens/register';
import Login from './screens/login'
import Home from './screens/home';
import Registercustomer from './screens/registercustomer';
import Registerfarmer from './screens/registerfarmer';
import Index from './screens/index';
import Cart from './screens/cart';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Registercustomer" component={Registercustomer} />
      <Stack.Screen name="Registerfarmer" component={Registerfarmer} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default Navigation;