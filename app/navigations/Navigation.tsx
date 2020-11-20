// Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import AccountStack from './AccountStack';
import FavouritesStack from './FavouritesStack';
import RestaurantsStack from './RestaurantsStack';
import SearchStack from './SearchStack';
import TopRestaurantsStack from './TopRestaurantsStack';


const Tab = createBottomTabNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="restaurants" component={RestaurantsStack} options={{ title: 'Restaurants' }} />
            <Tab.Screen name="top" component={TopRestaurantsStack} options={{ title: 'Top 5' }} />
            <Tab.Screen name="favs" component={FavouritesStack} options={{ title: 'Favourites' }} />
            <Tab.Screen name="search" component={SearchStack} options={{ title: 'Search' }} />
            <Tab.Screen name="account" component={AccountStack} options={{ title: 'Account' }} />
        </Tab.Navigator>
    </NavigationContainer >
);

export default Navigation;