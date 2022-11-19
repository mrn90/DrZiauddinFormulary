import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { icons, images } from '../../assets'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import styles from './styles';
import { vh } from '../../utils/units';
import MainButton from '../../components/Buttons/MainButton'

const Login = props => {
    const [checkBox, setCheckBox] = useState(false)

    return (
        <View style={styles.mainView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.fieldContainer}>
                <TextInput
                    style={styles.field}
                    placeholder='Phone Number'
                    placeholderTextColor={colors.lightGray}
                    placeholderStyle={styles.placeholder}
                    keyboardType={'number-pad'}
                ></TextInput>
            </View>

            <View style={styles.termsContainer}>
                {checkBox == true ? <TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={{ padding: 0.5 * vh, }}><View style={styles.checkContainer}>
                    <Image source={icons.iconCheck} style={styles.iconCheck} />
                </View></TouchableOpacity> : <TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={{ padding: 0.5 * vh, }}><View style={styles.unCheckContainer}>
                    {/* <Image source={icons.iconCheck} style={styles.iconCheck} /> */}
                </View></TouchableOpacity>}


                <CenturyGothic style={styles.text}>I agree to </CenturyGothic>
                <CenturyGothic>Terms of Service</CenturyGothic>
            </View>

            <MainButton
                text="Next"
                style={styles.loginBtn}
                // icon={icons.doctor}
                onPress={() => { props.navigation.navigate('OTPscreen') }}
            />

        </View>
    );
};

export default Login;
