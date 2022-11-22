import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

import { icons, images } from '../../assets';
import { vh, vw } from '../../utils/units';
// import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const DrawerContent = props => {
    const navigation = useNavigation();
    return (

        <View style={styles.drawerScreensContainer}>

            <TouchableOpacity style={styles.screenContainer} onPress={() => { navigation.navigate('AuthNavigator', 'ProfileScreen') }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.iconInformation} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Profile Information</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.iconTermsCondition} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Terms of Service</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.logout} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Exit</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </TouchableOpacity>


        </View>



    );
};

export default DrawerContent;
