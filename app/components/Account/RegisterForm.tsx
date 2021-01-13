import React, { useEffect, useState, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { validateEmail, validatePassword } from '../../utils/validations';
import { AuthService } from '../../services/AuthService';
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';


const RegisterForm: FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', repeatedPassword: '' });
    const [validForm, setValidForm] = useState(true);
    const [sendingForm, setSendingForm] = useState(false);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const onSumbit = async () => {
        try {
            setSendingForm(true);
            await AuthService.getInstance().registerUser(formData.email, formData.password);
            setSendingForm(false);
            navigation.navigate('account');
        } catch (error) {
            setSendingForm(false);
            Toast.show({ type: 'error', text1: t('account.register.ERROR_EMAIL_ALREADY_REGISTERED'), position: 'bottom' });
        }
    }

    const checkValidForm = () => setValidForm(!(validateEmail(formData.email) &&
        formData.password === formData.repeatedPassword && validatePassword(formData.password)));
    useEffect(() => checkValidForm(), [formData])


    return (
        <View style={styles.formContainer}>
            <Input
                placeholder={t('account.register.EMAIL')}
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
                placeholder={t('account.register.PASSWORD')}
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
            <Input
                secureTextEntry={!showRepeatedPassword}
                placeholder={t('account.register.REPEAT_PASSWORD')}
                style={styles.inputForm}
                onChange={e => {
                    setFormData({ ...formData, ...{ repeatedPassword: e.nativeEvent.text } });
                    checkValidForm();
                }}
                rightIcon={
                    <Icon
                        type="font-awesome"
                        name={showRepeatedPassword ? 'unlock-alt' : 'lock'}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowRepeatedPassword(!showRepeatedPassword)}
                    />
                }
            />

            <Button
                buttonStyle={styles.btn}
                containerStyle={styles.buttonContainer}
                title={t('account.register.SUBMIT')}
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

export default RegisterForm
