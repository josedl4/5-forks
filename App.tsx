import React from 'react';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';

LogBox.ignoreLogs(['Setting a timer']);

import Navigation from './app/navigations/Navigation';
import './app/utils/firebase';
import './app/i18n';
import { AppearanceProvider } from 'react-native-appearance';

export default function App() {
  return (
    <>
      <AppearanceProvider>
        <Navigation></Navigation>
        <Toast ref={(ref: any) => Toast.setRef(ref)} />
      </AppearanceProvider>
    </>
  );
}

