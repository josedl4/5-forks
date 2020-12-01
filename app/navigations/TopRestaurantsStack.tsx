import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurants from '../screens/TopRestaurants';
import { useTranslation } from 'react-i18next';
import { SECTIONS } from '../configuration/constants';

const Stack = createStackNavigator();

const TopRestaurantsStack = () => {
    const { t } = useTranslation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="top-restaurants" component={TopRestaurants}
                options={{ title: t(`SECTIONS.${SECTIONS.top.id}.TITLE`) }} />
        </Stack.Navigator>
    );
}

export default TopRestaurantsStack;