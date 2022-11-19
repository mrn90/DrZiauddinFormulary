import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AnimatedSplash from 'react-native-animated-splash';
import AuthNavigator from '../AuthNavigator';
import DrawerNavigator from '../DrawerNavigator';
// import DrawerNavigator from '../DrawerNavigator';
const RootStack = createNativeStackNavigator();

const MainNavigator = () => {
    // useEffect(() => {
    //   AnimatedSplash.hide();
    // }, []);

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
            <RootStack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
            />
        </RootStack.Navigator>
    );
};

export default MainNavigator;
