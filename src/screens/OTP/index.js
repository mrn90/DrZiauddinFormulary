import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, Keyboard, ToastAndroid, Alert } from 'react-native';
import { icons, images } from '../../assets'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import styles from './styles';
import { vh } from '../../utils/units';
import MainButton from '../../components/Buttons/MainButton'
import { UserApi } from '../../api/user-api';
import { useNavigation } from '@react-navigation/native';

const OTP = ({ route }) => {

    const navigation = useNavigation()
    const [checkBox, setCheckBox] = useState(false)
    const [otp, setOtp] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const { phoneNumber } = route?.params;
    console.log('PHONE NUMEBR', route?.params)

    const verifyOtp = async () => {
        setLoader(true)
        setError('')
        if (otp === '') {
            if (Platform.OS == 'android') {
                ToastAndroid.show(
                    'Enter the OTP sent to your phone',
                    ToastAndroid.LONG,
                );
                setLoader(false)
            }
            if (Platform.OS == 'ios') {
                Alert.alert('Enter the OTP sent to your phone')
                setLoader(false)
            }
        }

        if (otp) {
            // props.navigation.navigate('OTPscreen')
            Keyboard.dismiss();

            let data = {
                otp: otp,
                phonenumber: route?.params?.phoneNumber
            }
            // console.log('data in screen', data.phonenumber)

            //   setLoader(true)
            try {
                // let enviornment =  withEnvironment(this)
                const User = new UserApi()

                let resultHandle = await User.VerifyOtp(data)

                console.log('resultHandle', resultHandle)
                if (resultHandle?.status == true) {
                    setLoader(false)
                    navigation.navigate('ProfileScreen', { phoneNumber: phoneNumber })
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
            <CenturyGothic style={styles.textHeading}>Please verify yourself</CenturyGothic>
            <CenturyGothic style={styles.text}>Please enter the verification code to Login</CenturyGothic>
            <View style={styles.fieldContainer}>

                <TextInput
                    style={styles.field}
                    placeholder='Code'
                    placeholderTextColor={colors.lightGray}
                    placeholderStyle={styles.placeholder}
                    keyboardType={'number-pad'}
                    onChangeText={otp => {
                        setOtp(otp);
                    }}
                ></TextInput>
            </View>

            <MainButton
                text={loader ? <ActivityIndicator size={'small'} color={colors.white} /> : 'Verify'}
                style={styles.loginBtn}
                // icon={icons.doctor}
                onPress={() => { verifyOtp() }}
            // onPress={() => { props.navigation.navigate('ProfileScreen') }}
            />
            <CenturyGothic style={styles.errorText}>{error}</CenturyGothic>
        </View>
    );
};

export default OTP;
