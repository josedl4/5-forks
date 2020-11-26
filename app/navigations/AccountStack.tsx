import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const Stack = createStackNavigator();

const AccountStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="account" component={Account} options={{ title: 'Account' }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="register" component={Register} options={{ title: 'Register' }} />
    </Stack.Navigator>
);

export default AccountStack;