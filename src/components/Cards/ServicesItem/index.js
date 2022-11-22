import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../assets';
// import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';

const ServicesItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.serviceContainer}>
      <TouchableOpacity onPress={() => { navigation.navigate('MedicineDetailScreen'), { details: item } }}>
        <View style={styles.medicineNameContainer}>
          <CenturyGothic>{item?.name}</CenturyGothic>
          <CenturyGothic style={styles.medicineMaker}>{item?.medicineMaker}</CenturyGothic>
        </View>
      </TouchableOpacity>


    </View>

  );
};

export default ServicesItem;
