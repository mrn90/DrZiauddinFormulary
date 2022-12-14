import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../assets';
// import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';




const BrandsItem = ({ isSelected, item, onItemSelect, selectedBrandsItems }) => {

  useEffect(() => {

  }, [isSelected]);

  console.log('ITEM iN LIST', item)
  console.log('isSelected', item?.id, isSelected)
  const navigation = useNavigation();
  // console.log('sleceted fkjashfkjashfaskfha', selectedGenericItems)
  // console.log('item id', item)
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => onItemSelect(item?.id)}>
        <View style={styles.medicineNameContainer} >
          <CenturyGothic style={styles.nameMedicineText}>{item?.name}</CenturyGothic>
          {isSelected ? <Image source={icons.iconCheck2} style={styles.iconCheck}></Image> : null}

          {/* <View style={styles.separator}></View> */}
        </View>

      </TouchableOpacity>

    </View>


  );
};

export default BrandsItem;
