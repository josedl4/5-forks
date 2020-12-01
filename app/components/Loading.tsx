import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

export type LoadingProps = {
    visible: boolean,
    text?: string
};

const Loading: FC<LoadingProps> = ({ visible, text }) => {
    const { t } = useTranslation();
    return (
        <Overlay isVisible={visible} overlayStyle={styles.overlay}>
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#00a680" />
                {text && <Text style={styles.text}>{t(text)}</Text>}
            </View>
        </Overlay>
    )
}

Loading.defaultProps = {
    visible: false,
    text: 'common.LOADING'
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        borderColor: '#00a680',
        borderWidth: 2,
        borderRadius: 10
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#00a680',
        textTransform: 'uppercase',
        marginTop: 10
    }
});

export default Loading
