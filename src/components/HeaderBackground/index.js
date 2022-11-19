import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import { icons } from '../../assets';
import { vh, vw } from '../../utils/units';
import { colors } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
// import JosefinSansSemiBold from '../Wrappers/Text/JosefinSansSemiBold';
import EurostileBold from '../Wrappers/Text/EurostileBold';
// import {vh, vw} from './Untis';
const HeaderBackground = props => {
  const navigation = useNavigation();
  console.log('headerBackground', props?.heading);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => { navigation.openDrawer() }}
        >
          <Image source={icons.iconDrawer} style={styles.iconDrawer}></Image>
        </TouchableOpacity>

        <EurostileBold style={styles.heading}>
          {props.heading}
        </EurostileBold>

        <View style={styles.notificationProfileContainer}>
          <TouchableOpacity>
            <Image
              source={icons.notificationIcon}
              style={styles.profileIcon}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.profileIcon}
              style={styles.profileIcon}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 14 * vh,
    // paddingVertical: 7 * vh,
    // width: '100%',
    backgroundColor: colors.white,
    // position: 'relative',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'green'
  },
  heading: {
    // alignSelf: 'center',
    justifyContent: 'center',
    // justifyContent: 'center',
    fontSize: 3 * vh,
    color: colors.white,
    // height: 4 * vh,
    // width: 4 * vw
  },
  iconDrawer: {
    resizeMode: 'contain',
    alignItems: 'center',
    height: 4 * vh,
    width: 4 * vh,
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
  },
  notificationProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: 11 * vh
  },
  profileIcon: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vh,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // position: 'relative',
  },
});
export default HeaderBackground;
