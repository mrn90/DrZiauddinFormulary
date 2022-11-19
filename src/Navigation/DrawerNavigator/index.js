import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import AnimatedSplash from 'react-native-animated-splash';
// import AuthNavigator from '../AuthNavigator';
// import DrawerNavigator from '../DrawerNavigator';
import HomeScreen from '../../screens/HomeScreen'
// import Message from '../../screens/Message';
// import {options} from '../NavigationHeader';
import { vw, vh } from '../../utils/units';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { icons } from '../../assets';
import DrawerContent from '../../components/DrawerContent';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = (props) => {


    return (
        <DrawerStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                drawerStyle: {
                    backgroundColor: 'white',

                    width: vw * 100,
                },

                // tabBarStyle: { position: 'absolute', backgroundColor: 'red' },
                // tabBarInactiveTintColor: '#fff',
                // tabBarBackground: () => renderTabBarBackground(),
            }}
            drawerContent={(props) => {
                return (
                    <ScrollView
                        style={{ overflow: 'scroll' }}
                        contentContainerStyle={{ paddingBottom: 60 * vh }}
                    >
                        <View style={styles.drawerContainer}>
                            <View style={styles.topContainer}>
                                <View style={styles.headingContainer}>
                                    <Image source={icons.iconCheck} style={styles.iconBack} />
                                    {/* <CenturyGothic style={styles.headingText}>Menu</CenturyGothic> */}
                                    <View style={styles.notificationBackground}>
                                        <Image source={icons.bell} style={styles.bell} />
                                    </View>
                                </View>

                                <View style={styles.profileImageContainer}>
                                    <Image source={icons.iconCheck} style={styles.profileImage} />
                                    {/* <TouchableOpacity>
                                    <View style={styles.cameraContainer}>
                                        <Image source={icons.iconCamera2} style={styles.IconCamera2} />
                                    </View>
                                </TouchableOpacity> */}
                                </View>
                                <CenturyGothic style={styles.userName}>Sheikh Bilal Bashir</CenturyGothic>
                                <View style={styles.location}>
                                    <Image source={icons.iconCheck} style={styles.pin} />
                                    <CenturyGothic style={styles.locationText}>Karachi, Pakistan</CenturyGothic>
                                </View>


                                {/* drawer screen names component */}

                                <DrawerContent />
                                <View style={styles.versionLogoutContainer}>
                                    <View style={styles.logoutContainer}>
                                        <Image source={icons.iconCheck} style={styles.iconLogout} />
                                        <CenturyGothic style={styles.logoutText}>Logout</CenturyGothic>
                                    </View>
                                    <CenturyGothic>v 1.0</CenturyGothic>
                                </View>
                                <View style={styles.separator}></View>

                            </View>

                        </View>
                    </ScrollView>
                )
            }}
        >
            <DrawerStack.Screen name="Home" component={HomeScreen} />
            {/* <Drawer.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      /> */}
            {/* <RootStack.Screen name="Message" component={Message} options={options} /> */}
        </DrawerStack.Navigator >
    );
};

export default DrawerNavigator;
