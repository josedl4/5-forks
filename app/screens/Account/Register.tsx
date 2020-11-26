import React, { FC, } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import RegisterForm from '../../components/Account/RegisterForm';

const Register: FC = () => {
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/5-forks-icon-logo.png')}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <RegisterForm />
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewForm: {
        marginLeft: 40,
        marginRight: 40
    }
});

export default Register
