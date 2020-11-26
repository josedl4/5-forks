import React from 'react';
import Toast from 'react-native-toast-message';

import Navigation from './app/navigations/Navigation';
import './app/utils/firebase';

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Toast ref={(ref: any) => Toast.setRef(ref)} />
    </>
  );
}

