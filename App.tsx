import React from 'react';
import Toast from 'react-native-toast-message';

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

