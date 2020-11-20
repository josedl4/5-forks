import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favourites from '../screens/Favourites';

const Stack = createStackNavigator();

const FavouritesStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="favourites" component={Favourites} options={{ title: 'Favourites' }} />
    </Stack.Navigator>
);

export default FavouritesStack;