import React from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
import HeaderBackground from '../../components/HeaderBackground';
import { vh, vw } from '../../utils/units';
import ServicesItem from '../../components/Cards/ServicesItem';

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
];

const Home = props => {

  const renderServices = ({ item }) => {
    return <ServicesItem item={item} />;
  };

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

        <FlatList
          // horizontal
          nestedScrollEnabled
          data={services}
          style={styles.services}
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id}
          renderItem={renderServices}
          showsHorizontalScrollIndicator={false}
        />





      </ScrollView>



    </View>
  );
};

export default Home;
