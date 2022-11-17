import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome'
// import TabNavigator from '../TabNavigator'
// import ForgetPassword from '../../screens/ForgetPassword';
// import SubscriptionPackages from '../../screens/SubscriptionPackages';
// import Payment from '../../screens/Payment';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{
            gestureDirection: 'vertical',
            headerShown: false
        }}>
            <AuthStack.Screen name="Welcome" component={Welcome} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
