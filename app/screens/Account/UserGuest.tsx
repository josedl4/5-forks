import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const UserGuest: FC = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                source={require('../../../assets/img/user-guest.jpg')}
                resizeMode="contain" style={styles.image}
            />
            <Text style={styles.title}>{t('account.user_guest.TITLE')}</Text>
            <Text style={styles.description}>
                {t('account.user_guest.DECRIPTION')}
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    buttonStyle={styles.btn}
                    containerStyle={styles.buttonContainer}
                    title={t('account.user_guest.LOGIN_BTN')}
                    onPress={() => navigation.navigate('login')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        marginBottom: 20,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#00a680'
    },
    buttonContainer: {
        width: '70%'
    },
    viewBtn: {
        flex: 1,
        alignItems: 'center'
    }
});


export default UserGuest;
