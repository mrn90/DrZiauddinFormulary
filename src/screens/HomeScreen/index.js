import React from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
import HeaderBackground from '../../components/HeaderBackground';
import { vh, vw } from '../../utils/units';




const Home = props => {



  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'Home'} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 * vh, }}
        style={styles.scrollView}
      >
        <View style={styles.searchContainer}>
          <TextInput placeholder='Search..' placeholderTextColor={colors.grayText6} style={styles.search}>

          </TextInput>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Image source={icons.searchIcon} style={styles.searchIcon} />
            </View>
          </TouchableOpacity>
        </View>



      </ScrollView>



    </View>
  );
};

export default Home;
