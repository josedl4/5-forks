import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favourites from '../screens/Favourites';
import { useTranslation } from 'react-i18next';
import { SECTIONS } from '../configuration/constants';

const Stack = createStackNavigator();

const FavouritesStack = () => {
    const { t } = useTranslation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="favourites" component={Favourites}
                options={{ title: t(`SECTIONS.${SECTIONS.favs.id}.TITLE`) }} />
        </Stack.Navigator>
    );
}

export default FavouritesStack;