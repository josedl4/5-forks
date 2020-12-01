import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import { useTranslation } from 'react-i18next';
import { SECTIONS } from '../configuration/constants';

const Stack = createStackNavigator();

const SearchStack = () => {
    const { t } = useTranslation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="search" component={Search}
                options={{ title: t(`SECTIONS.${SECTIONS.search.id}.TITLE`) }} />
        </Stack.Navigator>
    );
}

export default SearchStack;