import React, { FC, useEffect, useState } from 'react';

import firebase from 'firebase';
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading from '../../components/Loading';


const Account: FC = () => {
    const [login, setLogin] = useState<boolean | null>(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setLogin((!!user));
        });
    }, []);

    if (login === null) return <Loading visible={true} text='Loading...'></Loading>;
    else return login ? <UserLogged /> : <UserGuest />;
}

export default Account;
