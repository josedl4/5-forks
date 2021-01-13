// Imports
import React, { FC } from 'react';
import { NavigationContainer, Route, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';

import SECTIONS_MODULES from './Sections';
import { lightColors, darkColors } from '../configuration/colorThemes';
import { useColorScheme } from 'react-native-appearance';
import StackNavigation from './StackNavigation';
import { THEMES } from '../configuration/constants';
import { ThemeService } from '../services/ThemeService';

const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = '#00a680';
const INACTIVE_COLOR = '#646464';

const Navigation: FC = () => {

    const { t } = useTranslation();
    const isDark = useColorScheme() === 'dark';
    const myTheme: Theme = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors
    }

    ThemeService.getInstance().setColorTheme(isDark ? THEMES.dark : THEMES.light);

    const getTabSections = () => Object.values(SECTIONS_MODULES).map(section => (
        <Tab.Screen key={section.id} name={section.id}
            options={{ title: t(`SECTIONS.${section.id}.TAB_LABEL`) }}>
            {props => <StackNavigation {...props} section={section}></StackNavigation>}
        </Tab.Screen>
    ));

    const screenOptions = (route: Route<string, object | undefined>, color: string) => (
        <Icon type="material-community" name={SECTIONS_MODULES[route.name] ? SECTIONS_MODULES[route.name].iconName : ''} size={22} color={color}></Icon>
    )
    return (
        <NavigationContainer theme={myTheme}>
            <Tab.Navigator
                initialRouteName={SECTIONS_MODULES.restaurants.id}
                tabBarOptions={{
                    inactiveTintColor: ACTIVE_COLOR,
                    activeTintColor: INACTIVE_COLOR,
                    activeBackgroundColor: myTheme.colors.background,
                    inactiveBackgroundColor: myTheme.colors.background,

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