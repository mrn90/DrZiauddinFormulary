import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
import HeaderBackground from '../../components/HeaderBackground';
import { vh, vw } from '../../utils/units';
import MedicinesItem from '../../components/Cards/MedicinesItem';
import GenericsItem from '../../components/Cards/GenericsItem'
import Modal from "react-native-modal";


const services = [
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
  {
    name: 'Acetaminophen',
    medicineMaker: '(GSK)',
  },
];

const genericMedicines = [
  {
    name: 'Alendronate Tablet',
    id: 1,
    isSelected: false
  },
  {
    name: 'Acyclovir Capsule',
    id: 2,
    isSelected: false
  },
  {
    name: 'Albuterol inhalation solution',
    id: 3,
    isSelected: false
  },
  {
    name: 'Alendronate Tablet',
    id: 4,
    isSelected: false
  },


];

const Home = props => {
  const [showFilters, setShowFilters] = useState(false)
  const [genericBox, setGenericBox] = useState(false)
  const [brandsBox, setBrandsBox] = useState(false)
  const [specialityBox, setSpecialityBox] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [selectedGenericItems, setSelectedGenericItems] = useState(genericMedicines)

  useEffect(() => {
    console.log('pnCLikc')
  }, [JSON.stringify(selectedGenericItems)]);

  const addToGeneric = (id) => {
    var newArray = selectedGenericItems
    // .map((item) => {
    //   if (item?.id === id) {
    //     console.log('ITEM', item)
    //     item?.isSelected = true
    //   }
    //   return item
    // }
    // )

    // if (newArray.filter((e) => e === id).length) {
    //   newArray = newArray.filter((e) => e !== id);
    // }
    // else {
    //   newArray.push(id)

    // }

    const index = selectedGenericItems.findIndex((item) => {
      return item?.id == id
    })


    newArray[index]['isSelected'] = !newArray[index]['isSelected']
    console.log('INDEX', index)
    setSelectedGenericItems([...newArray])
    console.log('newArray -----', newArray, selectedGenericItems)

  }


  const changeColor = (obj) => {
    console.log('hello', obj)
    if (obj === 'generic') {
      setGenericBox(!genericBox)
      // toggleModal()
    }
    if (obj === 'brands') {
      setBrandsBox(!brandsBox)
    }
    if (obj === 'speciality') {
      setSpecialityBox(!specialityBox)
    }

  }


  const toggleModal = (obj) => {
    // setModalVisible(!isModalVisible);
    if (obj === 'generic') {
      // setGenericBox(!genericBox)
      setModalVisible(!isModalVisible);
      // changeColor(obj)
      // toggleModal()
    }
    // if (obj === 'brands') {
    //   setGenericBox(!genericBox)
    //   setModalVisible(!isModalVisible);
    //   changeColor(obj)
    //   // toggleModal()
    // }
    // if (obj === 'speciality') {
    //   setGenericBox(!genericBox)
    //   setModalVisible(!isModalVisible);
    //   changeColor(obj)
    //   // toggleModal()
    // }
  };


  const renderMedicines = ({ item }) => {
    return <MedicinesItem item={item} />;
  };

  const renderGenericMedicines = ({ item }) => {
    return <GenericsItem item={item} onItemSelect={addToGeneric} selectedGenericItems={selectedGenericItems} isSelected={item?.isSelected} />;
  };

  return (

    <View style={styles.mainView}>
      <HeaderBackground heading={'Home'} />


      <View style={styles.serachFilterContainer}>
        <View style={styles.searchContainer}>

          <TextInput placeholder='Search..'
            placeholderTextColor={colors.grayText6}
            style={styles.search}>

          </TextInput>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Image source={icons.iconSearch} style={styles.searchIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { setShowFilters(!showFilters) }}>
          <View style={styles.iconContainer}>
            <Image source={icons.iconFilter} style={styles.iconFilter} />
          </View>
        </TouchableOpacity>

      </View>
      {showFilters === true ? <View style={styles.filterContainer}>
        {/* <TouchableOpacity
          style={styles.box}
          onPress={() => { toggleModal('generic') }}>
          <CenturyGothic style={styles.text}>Generic</CenturyGothic>
        </TouchableOpacity> */}
        {genericBox === false ? <TouchableOpacity
          style={styles.box}
          onPress={() => { toggleModal('generic') }}>
          <CenturyGothic style={styles.text}>Generic</CenturyGothic>
        </TouchableOpacity> : <TouchableOpacity
          style={styles.coloredBox}
          onPress={() => { toggleModal('generic') }}>
          <CenturyGothic style={styles.text}>Generic</CenturyGothic>
        </TouchableOpacity>}
        {brandsBox === false ? <TouchableOpacity
          style={styles.box}
          onPress={() => { toggleModal('brands') }}>
          <CenturyGothic style={styles.text}>Brands</CenturyGothic>
        </TouchableOpacity> : <TouchableOpacity
          style={styles.coloredBox}
          onPress={() => { toggleModal() }}>
          <CenturyGothic style={styles.text}>Brands</CenturyGothic>
        </TouchableOpacity>}
        {specialityBox === false ? <TouchableOpacity
          style={styles.box}
          onPress={() => { toggleModal('speciality') }}>
          <CenturyGothic style={styles.text}>Speciality</CenturyGothic>
        </TouchableOpacity> : <TouchableOpacity
          style={styles.coloredBox}
          onPress={() => { toggleModal() }}>
          <CenturyGothic style={styles.text}>Speciality</CenturyGothic>
        </TouchableOpacity>}

      </View> : null}


      <FlatList
        // horizontal
        nestedScrollEnabled
        data={services}
        style={styles.services}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.id}
        renderItem={renderMedicines}
        showsHorizontalScrollIndicator={false}

      />


      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >

        <View style={{
          height: '55%',
          width: '100%',
          marginTop: 'auto',
          backgroundColor: '#EAECF0',
          // flexDirection: 'row',
          // marginTop: 2 * vh,
          // margin: 2 * vh,
          // alignSelf: 'center',
          // alignItems: 'center',
          // justifyContent: 'center',
          borderTopLeftRadius: 2 * vh,
          borderTopRightRadius: 2 * vh,
        }}>
          <CenturyGothic style={styles.modalHeading}>Generic</CenturyGothic>
          <View style={styles.searchContainer}>

            <TextInput placeholder='Search..'
              placeholderTextColor={colors.grayText6}
              style={styles.search}>

            </TextInput>
            <TouchableOpacity>
              <View style={styles.iconContainer}>
                <Image source={icons.iconSearch} style={styles.searchIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {selectedGenericItems.map((item) => {

            return <GenericsItem item={item} onItemSelect={addToGeneric} selectedGenericItems={selectedGenericItems} isSelected={item?.isSelected} />;

          })}
          {/* <FlatList
            // horizontal
            nestedScrollEnabled
            data={genericMedicines}
            style={styles.services}
            contentContainerStyle={styles.listContainer}
            keyExtractor={item => item.id}
            renderItem={renderGenericMedicines}
            extraData={selectedGenericItems}
          // showsHorizontalScrollIndicator={false}
          /> */}
        </View>

      </Modal>





    </View>

  );
};

export default Home;
