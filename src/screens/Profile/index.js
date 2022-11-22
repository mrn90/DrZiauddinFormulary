import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { icons, images } from '../../assets'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import styles from './styles';
import { vh } from '../../utils/units';
import MainButton from '../../components/Buttons/MainButton'
import DropDownPicker from 'react-native-dropdown-picker';

const Profile = props => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Anesthesiology', value: 'anesthesiology' },
        { label: 'Dermatology', value: 'dermatology' },
        { label: 'Neurology', value: 'neurology' },
        { label: 'Pathology', value: 'pathology' },
        { label: 'Allergy and Immunology', value: 'allergy' }
    ]);

    return (
        <View style={styles.mainView}>
            <ScrollView style={{ marginBottom: 10 * vh }}>
                <CenturyGothic style={styles.textHeading}>Personal Information</CenturyGothic>
                <View style={styles.fieldContainer}>

                    <TextInput
                        style={styles.field}
                        placeholder='First Name'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'default'}
                    ></TextInput>
                    <TextInput
                        style={styles.field}
                        placeholder='Last Name'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'default'}
                    ></TextInput>
                    <TextInput
                        style={styles.field}
                        placeholder='Email'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'email-address'}
                    ></TextInput>
                    <DropDownPicker
                        placeholder="Speciality"
                        placeholderStyle={styles.placeholderStyle}
                        zIndex={3}
                        listMode='MODAL'
                        // zIndexInverse={2 * vh}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.dropdown}
                        dropDownContainerStyle={{
                            backgroundColor: colors.white,
                            width: '90%',
                            alignSelf: 'center',
                            margin: 2 * vh,
                            // paddingBottom: 5 * vh,
                            borderWidth: 0.1 * vh,
                            borderRadius: 2 * vh,
                            borderColor: colors.lightGray
                        }}
                        listItemLabelStyle={{
                            color: colors.black
                        }}

                    />
                </View>
                <View style={styles.btnContainer}>
                    <MainButton
                        text="Save"
                        style={styles.loginBtn}
                        // icon={icons.doctor}
                        onPress={() => { props.navigation.navigate('DrawerNavigator') }}
                    />
                    <MainButton
                        text="Cancel"
                        style={styles.loginBtn}
                        // icon={icons.doctor}
                        onPress={() => { props.navigation.navigate('DrawerNavigator') }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;
