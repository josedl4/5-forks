import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { SECTIONS } from '../configuration/constants';
import Restaurants from '../screens/Restaurants';

const Stack = createStackNavigator();

const RestaurantsStack = () => {
    const { t } = useTranslation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="restaurants" component={Restaurants}
                options={{ title: t(`SECTIONS.${SECTIONS.restaurants.id}.TITLE`) }} />
        </Stack.Navigator>
    )
};

export default RestaurantsStack;