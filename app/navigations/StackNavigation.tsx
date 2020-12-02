import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { SectionScreen, TabSection } from './Sections';

const Stack = createStackNavigator();

const StackNavigation: FC<{ section: TabSection }> = ({ section }) => {
    const { t } = useTranslation();

    const getStackScreens = (screens: SectionScreen[]) => screens.map((screen: SectionScreen) =>
        (
            <Stack.Screen key={`screen_${screen.id}`} name={screen.id} component={screen.screen}
                options={{
                    title: t(screen.header),
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
        ))

    return (
        <Stack.Navigator>
            {getStackScreens(section.screens)}
        </Stack.Navigator>
    )
};

export default StackNavigation;