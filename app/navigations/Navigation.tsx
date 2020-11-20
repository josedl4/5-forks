// Imports
import React from 'react';
import { NavigationContainer, Route, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import AccountStack from './AccountStack';
import FavouritesStack from './FavouritesStack';
import RestaurantsStack from './RestaurantsStack';
import SearchStack from './SearchStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import { Icon } from 'react-native-elements';


const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = '#00a680';
const INACTIVE_COLOR = '#646464';

const SECTIONS: { [any: string]: { id: string, iconName: string } } = {
    restaurants: {
        id: 'restaurants',
        iconName: 'compass-outline'
    },
    top: {
        id: 'top',
        iconName: 'star-outline'
    },
    favs: {
        id: 'favs',
        iconName: 'heart-outline'
    },
    search: {
        id: 'search',
        iconName: 'magnify'
    },
    account: {
        id: 'account',
        iconName: 'home-outline'
    }
};

const screenOptions = (route: Route<string, object | undefined>, color: string) => (
    <Icon type="material-community" name={SECTIONS[route.name] ? SECTIONS[route.name].iconName : ''} size={22} color={color}></Icon>
)

const Navigation = () => (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="restaurants"
            tabBarOptions={{
                inactiveTintColor: ACTIVE_COLOR,
                activeTintColor: INACTIVE_COLOR
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}>
            <Tab.Screen name={SECTIONS.restaurants.id} component={RestaurantsStack} options={{ title: 'Restaurants' }} />
            <Tab.Screen name={SECTIONS.top.id} component={TopRestaurantsStack} options={{ title: 'Top 5' }} />
            <Tab.Screen name={SECTIONS.favs.id} component={FavouritesStack} options={{ title: 'Favourites' }} />
            <Tab.Screen name={SECTIONS.search.id} component={SearchStack} options={{ title: 'Search' }} />
            <Tab.Screen name={SECTIONS.account.id} component={AccountStack} options={{ title: 'Account' }} />
        </Tab.Navigator>
    </NavigationContainer >
);

export default Navigation;