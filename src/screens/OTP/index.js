import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { icons, images } from '../../assets'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import styles from './styles';
import { vh } from '../../utils/units';
import MainButton from '../../components/Buttons/MainButton'

const OTP = props => {
    const [checkBox, setCheckBox] = useState(false)

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
                ></TextInput>
            </View>

            <MainButton
                text="Verify"
                style={styles.loginBtn}
                // icon={icons.doctor}
                onPress={() => { props.navigation.navigate('ProfileScreen') }}
            />

        </View>
    );
};

export default OTP;
