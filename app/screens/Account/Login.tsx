import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';

const CreateAccount: FC = () => (
    <Text style={styles.textRegister}>
        Do not you have an account yet?{' '}
        <Text style={styles.btnRegister} onPress={() => console.log('Register')}>Register</Text>
    </Text>
)

const Login: FC = () => {
    return (
        <ScrollView>
            <Image
                source={require('../../../assets/img/5-forks-icon-logo.png')}
                resizeMode="contain" style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <Text>Login Form</Text>
                <CreateAccount />
            </View>
            <Divider style={styles.divider} />
            <Text>Social Login</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: '#00a680',
        margin: 40
    }
});

export default Login;
