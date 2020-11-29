// Imports
import React, { FC } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

// Screens
import AccountStack from './AccountStack';
import FavouritesStack from './FavouritesStack';
import RestaurantsStack from './RestaurantsStack';
import SearchStack from './SearchStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import { Icon } from 'react-native-elements';

type TabSection = {
    id: string,
    iconName: string,
    componentView: FC
}

const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = '#00a680';
const INACTIVE_COLOR = '#646464';

const SECTIONS: { [key: string]: TabSection } = {
    restaurants: {
        id: 'restaurants',
        iconName: 'compass-outline',
        componentView: RestaurantsStack
    },
    top: {
        id: 'top',
        iconName: 'star-outline',
        componentView: TopRestaurantsStack
    },
    favs: {
        id: 'favs',
        iconName: 'heart-outline',
        componentView: FavouritesStack
    },
    search: {
        id: 'search',
        iconName: 'magnify',
        componentView: SearchStack
    },
    account: {
        id: 'account',
        iconName: 'home-outline',
        componentView: AccountStack
    }
};


const Navigation: FC = () => {

    const { t } = useTranslation();

    const getTabSections = () => Object.values(SECTIONS).map(section => (
        <Tab.Screen key={section.id} name={section.id} component={section.componentView}
            options={{ title: t(`SECTIONS.${section.id}.TAB_LABEL`) }} />
    ));

    const screenOptions = (route: Route<string, object | undefined>, color: string) => (
        <Icon type="material-community" name={SECTIONS[route.name] ? SECTIONS[route.name].iconName : ''} size={22} color={color}></Icon>
    )
    return (
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
                {getTabSections()}
            </Tab.Navigator>
        </NavigationContainer >
    );
};

export default Navigation;