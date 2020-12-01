import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';
import { SECTIONS } from '../configuration/constants';

const Stack = createStackNavigator();

const AccountStack = () => {
    const { t } = useTranslation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="account" component={Account}
                options={{ title: t(`SECTIONS.${SECTIONS.account.id}.TITLE`) }} />
            <Stack.Screen name="login" component={Login} options={{ title: t('account.login.TITLE') }} />
            <Stack.Screen name="register" component={Register} options={{ title: t('account.register.TITLE') }} />
        </Stack.Navigator>
    );
}

export default AccountStack;