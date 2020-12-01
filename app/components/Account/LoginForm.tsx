import React, { useEffect, useState, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { validateEmail, validatePassword } from '../../utils/validations';
import { AuthService } from '../../services/AuthService';
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';


const LoginForm: FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [validForm, setValidForm] = useState(true);
    const [sendingForm, setSendingForm] = useState(false);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const onSumbit = async () => {
        try {
            setSendingForm(true);
            await AuthService.getInstance().login(formData.email, formData.password);
            setSendingForm(false);
            navigation.navigate('account');
        } catch (error) {
            setSendingForm(false);
            Toast.show({ type: 'error', text1: t('account.login.ERROR_INVALID_CREDENTIALS'), position: 'bottom' })
        }
    }

    const checkValidForm = () => setValidForm(!(validateEmail(formData.email) && validatePassword(formData.password)));
    useEffect(() => checkValidForm(), [formData])


    return (
        <View style={styles.formContainer}>
            <Input
                placeholder={t('account.login.EMAIL')}
                style={styles.inputForm}
                onChange={e => {
                    setFormData({ ...formData, ...{ email: e.nativeEvent.text } });
                    checkValidForm();
                }}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                secureTextEntry={!showPassword}
                placeholder={t('account.login.PASSWORD')}
                style={styles.inputForm}
                onChange={e => {
                    setFormData({ ...formData, ...{ password: e.nativeEvent.text } });
                    checkValidForm();
                }}
                rightIcon={
                    <Icon
                        type="font-awesome"
                        name={showPassword ? 'unlock-alt' : 'lock'}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />

            <Button
                buttonStyle={styles.btn}
                containerStyle={styles.buttonContainer}
                title={t('account.login.SUBMIT')}
                disabled={validForm}
                onPress={() => onSumbit()}
            />
            <Loading visible={sendingForm} />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    inputForm: {
        width: '100%',
        marginTop: 20
    },
    btn: {
        backgroundColor: '#00a680'
    },
    buttonContainer: {
        marginTop: 20,
        width: '95%'
    },
    iconRight: {
        color: '#c1c1c1'
    }
});

export default LoginForm;
