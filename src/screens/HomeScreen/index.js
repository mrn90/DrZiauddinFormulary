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
import BrandsItem from '../../components/Cards/BrandsItem';
import SpecialityItem from '../../components/Cards/SpecialityItem';


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

const brands = [
  {
    name: 'GlaxoSmithKline',
    id: 1,
    isSelected: false
  },
  {
    name: 'Getz Pharma (Private) Limited',
    id: 2,
    isSelected: false
  },
  {
    name: 'Abbott Laboratories Pakistan Limited',
    id: 3,
    isSelected: false
  },
];

const speciality = [
  {
    name: 'PULMONOLOGY (CHEST SPECIALIST)',
    id: 1,
    isSelected: false
  },
  {
    name: 'ENT SURGERY',
    id: 2,
    isSelected: false
  },
  {
    name: 'NEURO & SPINAL SURGEON',
    id: 3,
    isSelected: false
  },
  {
    name: 'GENERAL SURGERY & LAPAROSCOPY',
    id: 4,
    isSelected: false
  }
]

const Home = props => {
  const [showFilters, setShowFilters] = useState(false)
  const [genericBox, setGenericBox] = useState(false)
  const [brandsBox, setBrandsBox] = useState(false)
  const [specialityBox, setSpecialityBox] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [whichModal, setWhichModal] = useState('')
  const [selectedGenericItems, setSelectedGenericItems] = useState(genericMedicines)
  const [selectedBrandsItems, setSelectedBrandsItems] = useState(brands)
  const [selectedSpecialityItems, setSelectedSpecialityItems] = useState(speciality)

  useEffect(() => {
    console.log('onClick')
  }, [JSON.stringify(selectedGenericItems), JSON.stringify(selectedBrandsItems), JSON.stringify(selectedSpecialityItems)]);

  const addToGeneric = (id) => {
    var newArray = selectedGenericItems

    const index = selectedGenericItems.findIndex((item) => {
      return item?.id == id
    })


    newArray[index]['isSelected'] = !newArray[index]['isSelected']
    console.log('INDEX', index)
    setSelectedGenericItems([...newArray])
    console.log('newArray -----', newArray, selectedGenericItems)

  }

  const addToBrands = (id) => {
    var brandsArray = selectedBrandsItems

    const index = selectedBrandsItems.findIndex((item) => {
      return item?.id == id
    })

    brandsArray[index]['isSelected'] = !brandsArray[index]['isSelected']
    console.log('INDEX', index)
    setSelectedBrandsItems([...brandsArray])
    console.log('brandsArray -----', brandsArray, selectedBrandsItems)

  }

  const addToSpeciality = (id) => {
    var specialityArray = selectedSpecialityItems

    const index = selectedSpecialityItems.findIndex((item) => {
      return item?.id == id
    })

    specialityArray[index]['isSelected'] = !specialityArray[index]['isSelected']
    console.log('INDEX', index)
    setSelectedSpecialityItems([...specialityArray])
    console.log('specialityArray -----', specialityArray, selectedSpecialityItems)

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
      setWhichModal(obj)
      setModalVisible(!isModalVisible);
      // changeColor(obj)
      // toggleModal()
    }
    if (obj === 'brands') {
      // setGenericBox(!genericBox)
      setWhichModal(obj)
      setModalVisible(!isModalVisible);
      // changeColor(obj)
      // toggleModal()
    }
    if (obj === 'speciality') {
      // setGenericBox(!genericBox)
      setWhichModal(obj)
      setModalVisible(!isModalVisible);
      // changeColor(obj)
      // toggleModal()
    }
  };


  const renderMedicines = ({ item }) => {
    return <MedicinesItem item={item} />;
  };

  const renderGenericMedicines = ({ item }) => {
    return <GenericsItem item={item} onItemSelect={addToGeneric} selectedGenericItems={selectedGenericItems} isSelected={item?.isSelected} />;
  };

  const renderBrands = ({ item }) => {
    return <BrandsItem item={item} onItemSelect={addToBrands} selectedBrandsItems={selectedBrandsItems} isSelected={item?.isSelected} />;
  };

  const renderSpeciality = ({ item }) => {
    return <SpecialityItem item={item} onItemSelect={addToSpeciality} selectedSpecialityItems={selectedSpecialityItems} isSelected={item?.isSelected} />;
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
          onPress={() => { toggleModal('brands') }}>
          <CenturyGothic style={styles.text}>Brands</CenturyGothic>
        </TouchableOpacity>}
        {specialityBox === false ? <TouchableOpacity
          style={styles.box}
          onPress={() => { toggleModal('speciality') }}>
          <CenturyGothic style={styles.text}>Speciality</CenturyGothic>
        </TouchableOpacity> : <TouchableOpacity
          style={styles.coloredBox}
          onPress={() => { toggleModal('speciality') }}>
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

          {whichModal === 'generic' ?
            <CenturyGothic style={styles.modalHeading}>Generic</CenturyGothic> :
            whichModal === 'brands' ? <CenturyGothic style={styles.modalHeading}>Brands</CenturyGothic> :
              whichModal === 'speciality' ? <CenturyGothic style={styles.modalHeading}>Speciality</CenturyGothic> :
                null}

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
          {whichModal === 'generic' ? selectedGenericItems.map((item) => {

            return <GenericsItem item={item} onItemSelect={addToGeneric} selectedGenericItems={selectedGenericItems} isSelected={item?.isSelected} />;

          }) : whichModal === 'brands' ? selectedBrandsItems.map((item) => {

            return <BrandsItem item={item} onItemSelect={addToBrands} selectedBrandsItems={selectedBrandsItems} isSelected={item?.isSelected} />;
          }) : whichModal === 'speciality' ? selectedSpecialityItems.map((item) => {

            return <SpecialityItem item={item} onItemSelect={addToSpeciality} selectedSpecialityItems={selectedSpecialityItems} isSelected={item?.isSelected} />;
          }) : null}

        </View>

      </Modal>





    </View>

  );
};

export default Home;
