// Imports
import React, { FC } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import SECTIONS_MODULES from './Sections';

const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = '#00a680';
const INACTIVE_COLOR = '#646464';

const Navigation: FC = () => {

    const { t } = useTranslation();

    const getTabSections = () => Object.values(SECTIONS_MODULES).map(section => (
        <Tab.Screen key={section.id} name={section.id} component={section.componentView}
            options={{ title: t(`SECTIONS.${section.id}.TAB_LABEL`) }} />
    ));

    const screenOptions = (route: Route<string, object | undefined>, color: string) => (
        <Icon type="material-community" name={SECTIONS_MODULES[route.name] ? SECTIONS_MODULES[route.name].iconName : ''} size={22} color={color}></Icon>
    )
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={SECTIONS_MODULES.restaurants.id}
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