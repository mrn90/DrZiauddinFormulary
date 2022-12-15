import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, Platform, Alert, Keyboard, ActivityIndicator } from 'react-native';
import { icons, images } from '../../assets'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import styles from './styles';
import { vh } from '../../utils/units';
import MainButton from '../../components/Buttons/MainButton'
import { ApiConfig } from "../../api/api-config"
import { UserApi } from '../../api/user-api'
import { useNavigation } from '@react-navigation/native';


// import Toast from 'react-native-toast-message';
const Login = props => {

    const navigation = useNavigation()
    const [checkBox, setCheckBox] = useState(false)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const login = async () => {
        setLoader(true)
        setError('')
        if (phoneNumber === '' || checkBox === false) {
            if (Platform.OS == 'android') {
                ToastAndroid.show(
                    'Enter details properly.',
                    ToastAndroid.LONG,
                );
                setLoader(false)
            }
            if (Platform.OS == 'ios') {
                Alert.alert('Enter details properly')
                setLoader(false)
            }
        }

        if (checkBox === true && phoneNumber) {
            // props.navigation.navigate('OTPscreen')
            Keyboard.dismiss();

            let data = {
                phonenumber: phoneNumber,
            }
            console.log('data in screen', data.phonenumber)

            //   setLoader(true)
            try {
                // let enviornment =  withEnvironment(this)
                const User = new UserApi()

                let resultHandle = await User.AddPhoneNumber(data)

                console.log('resultHandle', resultHandle)
                if (resultHandle?.status == true) {
                    setLoader(false)
                    if (resultHandle?.profile_data?.OTP_VERIFIED_STATUS === '1') {
                        navigation?.navigate('DrawerNavigator', { screen: "Home" })
                    } else {
                        navigation?.navigate('OTPscreen', { phoneNumber: phoneNumber })
                    }

                } else {
                    setError(JSON.stringify(resultHandle?.msg))
                    setLoader(false)
                }

            } catch (err) {
                console.error('ERROR HERE', err.message);
                setError(err.message);
                setLoader(false)
            }

        }
    }
    return (
        <View style={styles.mainView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.field}
                    placeholder='03001234567'
                    placeholderTextColor={colors.gray12}
                    placeholderStyle={styles.placeholder}
                    keyboardType={'number-pad'}
                    onChangeText={phoneNumber => {
                        setPhoneNumber(phoneNumber);
                    }}
                ></TextInput>
            </View>

            <View style={styles.termsContainer}>
                {checkBox == true ? <TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={{ padding: 0.5 * vh, }}><View style={styles.checkContainer}>
                    <Image source={icons.iconCheck} style={styles.iconCheck} />
                </View></TouchableOpacity> : <TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={{ padding: 0.5 * vh, }}><View style={styles.unCheckContainer}>
                    {/* <Image source={icons.iconCheck} style={styles.iconCheck} /> */}
                </View></TouchableOpacity>}


                <CenturyGothic style={styles.text}>I agree to </CenturyGothic>
                <CenturyGothic style={styles.textTermService}>Terms of Service</CenturyGothic>
            </View>


            <MainButton
                text={loader ? <ActivityIndicator size={'small'} color={colors.white} /> : 'Next'}
                style={styles.loginBtn}
                // icon={icons.doctor}
                onPress={() => { login() }}
            />
            <CenturyGothic style={styles.errorText}>{error}</CenturyGothic>

        </View>
    );
};

export default Login;
