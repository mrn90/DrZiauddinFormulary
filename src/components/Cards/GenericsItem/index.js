import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../assets';
// import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';




const GenericsItem = ({ item, onItemSelect, selectedGenericItems }) => {
  const navigation = useNavigation();
  console.log('sleceted fkjashfkjashfaskfha', selectedGenericItems)
  console.log('item id', item)
  return (
    <View style={styles.mainContainer}>

      <TouchableOpacity style={styles.medicineNameContainer} onPress={() => onItemSelect(item?.id)}>
        <CenturyGothic style={styles.nameMedicineText}>{item?.name}</CenturyGothic>
        {selectedGenericItems?.includes(item?.id) ? <CenturyGothic style={styles.nameMedicineText}>'A'</CenturyGothic> : null}

        {/* <View style={styles.separator}></View> */}
      </TouchableOpacity>

    </View>


  );
};

export default GenericsItem;
