import React from 'react';
import { View, Text, Image, TextInput} from 'react-native';
import { images } from '../../assets'
import { colors } from '../../utils/theme';
import styles from './styles';

const Welcome = props => {
    return (
        <View style={styles.mainView}>
            <Image source={images.logo} style={styles.logo} />
            <TextInput
                style={styles.field}
                placeholder='Phone Number'
                placeholderTextColor={colors.lightGray}
                placeholderStyle={styles.placeholder}
                keyboardType={'number-pad'}
            ></TextInput>
        </View>
    );
};

export default Welcome;
