import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';

import { AuthService } from '../../services/AuthService';
import { ThemeService } from '../../services/ThemeService';
import Loading from '../../components/Loading';
import { User } from '../../models/User';
import InfoUser from '../../components/Account/InfoUser';
const colors = ThemeService.getInstance().getColorTheme();

const UserLogged: FC = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState<User | null>(null);

    useEffect(() => {
        (() => {
            const user = AuthService.getInstance().currentUser();
            console.log(user);
            setUserInfo(user);
        })()
    }, []);
    const logout = () => {
        AuthService.getInstance().logout();
    }
    return (
        <View style={styles.viewUserInfo}>
            {userInfo && <InfoUser userInfo={userInfo} setLoading={setLoading}></InfoUser>}
            <Text>AccountOptions...</Text>
            <Button
                title={t('account.user_logged.logout')}
                buttonStyle={styles.btnLogout}
                titleStyle={styles.btnLogoutText}
                onPress={() => logout()}
            />
            <Loading visible={loading}></Loading>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo: {
        minHeight: '100%',
        backgroundColor: colors.background
    },
    btnLogout: {
        marginBottom: 30,
        borderRadius: 0,
        backgroundColor: colors.default,
        borderTopWidth: 1,
        borderTopColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingTop: 10,
        paddingBottom: 10
    },
    btnLogoutText: {
        color: colors.primary
    }
})

export default UserLogged;
