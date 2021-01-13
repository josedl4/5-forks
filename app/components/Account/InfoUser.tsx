import React, { useEffect, useState, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { Asset } from 'expo-asset';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const defaultAvatar = Asset.fromModule(require('../../../assets/img/avatar-default.jpg')).uri;


import { AuthService } from '../../services/AuthService';
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';
import { User } from 'firebase';
import { ThemeService } from '../../services/ThemeService';
import { EMPTY_FIELD } from '../../configuration/constants';
import { UsersService } from '../../services/UsersService';
const colors = ThemeService.getInstance().getColorTheme();


const InfoUser: FC<{ userInfo: User, setLoading: React.Dispatch<React.SetStateAction<boolean>> }> =
    ({ userInfo: { uid, photoURL, displayName, email }, setLoading }) => {
        const navigation = useNavigation();
        const { t } = useTranslation();

        const changeAvatar = async () => {
            const resultPermission = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            const resultPermissionMediaLibrary = resultPermission.permissions.mediaLibrary.status;
            if (resultPermissionMediaLibrary !== Permissions.PermissionStatus.GRANTED) {
                Toast.show({ type: 'error', text1: t('common.MEDIA_LIBRARY_PERMISSIONS_REQUIRED'), position: 'bottom' });
            } else {
                const result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [4, 3]
                });
                if (result.cancelled) return;
                setLoading(true);
                await uploadImage(result.uri);
                setLoading(false);
            }
        }

        const uploadImage = async (uri: string) => {
            const blob = await (await fetch(uri)).blob();
            try {
                await UsersService.getInstance().updateUserAvatar(uid, blob);
            } catch (error) {
                console.log(error);
                Toast.show({ type: 'error', text1: t('common.ERROR_UPLOAD'), position: 'bottom' });
            }
        }

        return (
            <View style={styles.viewUserInfo}>
                <Avatar
                    rounded
                    size="large"
                    containerStyle={styles.userInfoAvatar}
                    source={
                        { uri: photoURL ? photoURL : defaultAvatar }
                    }
                >
                    <Avatar.Accessory size={26} onPress={changeAvatar} />
                </Avatar>
                <View>
                    <Text style={styles.displayName}>{displayName || EMPTY_FIELD}</Text>
                    <Text>{email || EMPTY_FIELD}</Text>
                </View>
            </View >
        )
    }

const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.background,
        paddingTop: 30,
        paddingBottom: 30
    },
    userInfoAvatar: {
        marginRight: 20,
        backgroundColor: '#d4d4d4'
    },
    displayName: {
        fontWeight: 'bold',
        paddingBottom: 5
    }
});

export default InfoUser;
