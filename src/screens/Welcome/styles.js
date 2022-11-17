import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'red'
    },
    logo: {
        height: 2,
        width: 2,
        resizeMode: 'contain'
    },
    field: {
        alignSelf: 'center',
        borderWidth: 0.1 * vh,
        backgroundColor: '#EAECF0',
        borderColor: colors.lightGray,
        borderRadius: 4 * vh,
        paddingVertical: 1.2 * vh,
        width: '90%',
        paddingLeft: 2 * vh,
        marginTop: 2 * vh,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
        // shadowRadius: 0.4 * vh,
        // zIndex: 2 * vh
        fontFamily: fonts.CenturyGothic.CenturyGothic

    },
    placeholder: {
        fontFamily: fonts.CenturyGothic.CenturyGothic
    }
});

export default styles;
