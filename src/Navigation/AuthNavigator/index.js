import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login'
import OTP from '../../screens/OTP'
import Profile from '../../screens/Profile'
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
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="OTPscreen" component={OTP} />
            <AuthStack.Screen name="ProfileScreen" component={Profile} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
