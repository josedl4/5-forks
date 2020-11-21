import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account/Account';

const Stack = createStackNavigator();

const AccountStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="account" component={Account} options={{ title: 'Account' }} />
    </Stack.Navigator>
);

export default AccountStack;