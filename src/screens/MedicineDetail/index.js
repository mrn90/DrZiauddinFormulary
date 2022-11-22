import React from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
import HeaderBackground from '../../components/HeaderBackground';
import { vh, vw } from '../../utils/units';


const MedicineDetail = (props) => {


  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'Home'} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 * vh, }}
        style={styles.scrollView}
      >
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
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Image source={icons.iconFilter} style={styles.iconFilter} />
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.mainHeading}>
            <CenturyGothic style={styles.mainHeadingText1}>Panadol</CenturyGothic>
            <CenturyGothic style={styles.mainHeadingText}>(GSK)</CenturyGothic>
          </View>
          <CenturyGothic style={styles.text}>If the dose is too high or the recommended daily dose is exceeded,
            an ambulance should be called straight away by dialling triple zero
            (000). Overdose symptoms, listed below, usually only occur 24 hours
            after taking the drug. An antidote can be administered if the
            ambulance is called soon after taking paracetamol.</CenturyGothic>

          <View style={styles.mainHeading}>
            <CenturyGothic style={styles.mainHeadingText1}>Dosage</CenturyGothic>
            {/* <CenturyGothic style={styles.mainHeadingText}>(GSK)</CenturyGothic> */}
          </View>
          <CenturyGothic style={styles.text}>If the dose is too high or the recommended daily dose is exceeded,
            an ambulance should be called straight away by dialling triple zero
            (000). Overdose symptoms, listed below, usually only occur 24 hours
            after taking the drug. An antidote can be administered if the
            ambulance is called soon after taking paracetamol.</CenturyGothic>
          <View style={styles.mainHeading}>
            <CenturyGothic style={styles.mainHeadingText1}>Oral</CenturyGothic>
            {/* <CenturyGothic style={styles.mainHeadingText}>(GSK)</CenturyGothic> */}
          </View>
          <CenturyGothic style={styles.text}>If the dose is too high or the recommended daily dose is exceeded,
            an ambulance should be called straight away by dialling triple zero
            (000). Overdose symptoms, listed below, usually only occur 24 hours
            after taking the drug. An antidote can be administered if the
            ambulance is called soon after taking paracetamol.</CenturyGothic>
          <View style={styles.mainHeading}>
            <CenturyGothic style={styles.mainHeadingText1}>Rectal</CenturyGothic>
            {/* <CenturyGothic style={styles.mainHeadingText}>(GSK)</CenturyGothic> */}
          </View>
          <CenturyGothic style={styles.text}>If the dose is too high or the recommended daily dose is exceeded,
            an ambulance should be called straight away by dialling triple zero
            (000). Overdose symptoms, listed below, usually only occur 24 hours
            after taking the drug. An antidote can be administered if the
            ambulance is called soon after taking paracetamol.</CenturyGothic>

        </View>
      </ScrollView>





    </View>
  );
};

export default MedicineDetail;
