import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import AnimatedSplash from 'react-native-animated-splash';
// import AuthNavigator from '../AuthNavigator';
// import DrawerNavigator from '../DrawerNavigator';
import HomeScreen from '../../screens/HomeScreen'
import MedicineDetail from '../../screens/MedicineDetail'
// import Message from '../../screens/Message';
// import {options} from '../NavigationHeader';
import { vw, vh } from '../../utils/units';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { icons, images } from '../../assets';
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
                                    <Image source={icons.leftArrow} style={styles.iconBack} />
                                    <View style={styles.notificationBackground}>
                                        <Image source={icons.bell} style={styles.bell} />
                                    </View>
                                </View>

                                <View style={styles.profileImageContainer}>
                                    <Image source={images.logo4} style={styles.profileImage} />
                                </View>
                                <CenturyGothic style={styles.userName}>+92 1234 5678 900</CenturyGothic>



                                {/* drawer screen names component */}

                                <DrawerContent />


                            </View>

                        </View>
                    </ScrollView>
                )
            }}
        >
            <DrawerStack.Screen name="Home" component={HomeScreen} />
            <DrawerStack.Screen name="MedicineDetailScreen" component={MedicineDetail} />
            {/* <Drawer.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      /> */}
            {/* <RootStack.Screen name="Message" component={Message} options={options} /> */}
        </DrawerStack.Navigator >
    );
};

export default DrawerNavigator;
