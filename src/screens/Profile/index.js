import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Platform, Keyboard, ScrollView, ToastAndroid, Alert, ActivityIndicator } from 'react-native';
import { icons, images } from '../../assets'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import styles from './styles';
import { vh } from '../../utils/units';
import MainButton from '../../components/Buttons/MainButton'
import DropDownPicker from 'react-native-dropdown-picker';
import { UserApi } from '../../api/user-api';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ route }) => {

    const navigation = useNavigation()
    // const { phoneNumber } = route?.params;
    // console.log('PHONE NUMEBR in profile screen', route?.params?.phoneNumber)

    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Anesthesiology', value: 'anesthesiology' },
        { label: 'Dermatology', value: 'dermatology' },
        { label: 'Neurology', value: 'neurology' },
        { label: 'Pathology', value: 'pathology' },
        { label: 'Allergy and Immunology', value: 'allergy' }
    ]);

    const enterProfile = async () => {
        try {
            setError('')
            if (firstName == '') {
                if (Platform.OS == 'android') {
                    ToastAndroid.show(
                        'Enter your First Name',
                        ToastAndroid.LONG,
                    );
                    setLoader(false)
                }
                if (Platform.OS == 'ios') {
                    Alert.alert('Enter your First Name')
                    setLoader(false)
                }
            }
            if (lastName == '') {
                if (Platform.OS == 'android') {
                    ToastAndroid.show(
                        'Enter your Last Name',
                        ToastAndroid.LONG,
                    );
                    setLoader(false)
                }
                if (Platform.OS == 'ios') {
                    Alert.alert('Enter your Last Name')
                    setLoader(false)
                }
            }
            if (email == '') {
                if (Platform.OS == 'android') {
                    ToastAndroid.show(
                        'Enter your Email Address',
                        ToastAndroid.LONG,
                    );
                    setLoader(false)
                }
                if (Platform.OS == 'ios') {
                    Alert.alert('Enter your Email Address')
                    setLoader(false)
                }
            }
            if (value == null) {
                if (Platform.OS == 'android') {
                    ToastAndroid.show(
                        'Enter your speciality',
                        ToastAndroid.LONG,
                    );
                    setLoader(false)
                }
                if (Platform.OS == 'ios') {
                    Alert.alert('Enter your speciality')
                    setLoader(false)
                }
            }

            if (firstName && lastName && email && value) {
                Keyboard.dismiss();

                let data = {
                    fname: firstName,
                    lname: lastName,
                    email: email,
                    phone: route?.params?.phoneNumber,
                    speciality: value
                }

                const User = new UserApi()

                let resultHandle = await User.EnterProfile(data)

                console.log('resultHandle', resultHandle)
                if (resultHandle?.status == true) {
                    setLoader(false)
                    navigation.navigate('DrawerNavigator', { screen: 'Home' })
                } else {
                    setError(JSON.stringify(resultHandle?.msg))
                    setLoader(false)
                }
            }

        } catch (err) {
            console.error('ERROR HERE', err.message);
            setError(err.message);
            setLoader(false)
        }
    }

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
                        onChangeText={firstName => {
                            setFirstName(firstName);
                        }}
                    ></TextInput>
                    <TextInput
                        style={styles.field}
                        placeholder='Last Name'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'default'}
                        onChangeText={lastName => {
                            setLastName(lastName);
                        }}
                    ></TextInput>
                    <TextInput
                        style={styles.field}
                        placeholder='Email'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'email-address'}
                        onChangeText={email => {
                            setEmail(email);
                        }}
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
                        text={loader ? <ActivityIndicator size={'small'} color={colors.white} /> : 'Save'}
                        style={styles.loginBtn}
                        // icon={icons.doctor}
                        onPress={() => { enterProfile() }}
                    // onPress={() => { props.navigation.navigate('DrawerNavigator') }}
                    />
                    <MainButton
                        text="Cancel"
                        style={styles.loginBtn}
                        // icon={icons.doctor}
                        onPress={() => { navigation.navigate('DrawerNavigator', { screen: 'Home' }) }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;
