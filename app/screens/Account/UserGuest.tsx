import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const UserGuest: FC = () => {
    const navigation = useNavigation();
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                source={require('../../../assets/img/user-guest.jpg')}
                resizeMode="contain" style={styles.image}
            />
            <Text style={styles.title}>Check out your 5-Forks profile</Text>
            <Text style={styles.description}>
                How would you describe your best restaurant?
                Search and view the best restaurants in a simple way,
                vote which one you liked the most and comment on how
                your experience has been.
            </Text>
            <View style={styles.viewBtn}>
                <Button buttonStyle={styles.btn} containerStyle={styles.buttonContainer} title="Login" onPress={() => navigation.navigate('login')}></Button>
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
