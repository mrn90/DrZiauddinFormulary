import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { icons } from '../../../assets';
// import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';

const MedicinesItem = ({ item }) => {
  const navigation = useNavigation();
  console.log('ITEM mdeicines', item)
  return (
    <View style={styles.serviceContainer}>
      <TouchableOpacity onPress={() => { navigation.navigate('MedicineDetailScreen'), { details: item } }}>
        <View style={styles.medicineNameContainer}>
          <CenturyGothic style={styles.medicineName}>{item?.ITEM_NAME}</CenturyGothic>
          <CenturyGothic style={styles.medicineMaker}>{item?.MANUFACTURER_NAME}</CenturyGothic>
        </View>
      </TouchableOpacity>


    </View>

  );
};

export default MedicinesItem;
