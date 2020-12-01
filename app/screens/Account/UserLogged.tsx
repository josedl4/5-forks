import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthService } from '../../services/AuthService';

const UserLogged: FC = props => {
    const logout = () => {
        AuthService.getInstance().logout();
    }
    return (
        <View>
            <Text>UserLogged...</Text>
            <Button title="Logout" onPress={() => logout()} />
        </View>
    )
}

UserLogged.propTypes = {

}

export default UserLogged;
