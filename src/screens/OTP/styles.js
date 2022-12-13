import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
    },
    logo: {
        height: 15 * vh,
        width: 35 * vh,
        resizeMode: 'contain',
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 7 * vh
    },
    textHeading: {
        color: colors.red,
        // alignItems: 'center',
        // justifyContent: 'center'
        alignSelf: 'center',
        fontSize: 2.8 * vh,
        marginTop: 2 * vh
    },
    fieldContainer: {
        marginTop: 3 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    field: {
        alignSelf: 'center',
        borderWidth: 0.04 * vh,
        backgroundColor: 'white',
        borderColor: colors.lightGray,
        borderRadius: 4 * vh,
        paddingVertical: 2 * vh,
        width: '90%',
        paddingLeft: 2 * vh,
        marginTop: 2 * vh,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        color: colors.black,
        elevation: 2 * vh
    },
    placeholder: {
        fontFamily: fonts.CenturyGothic.CenturyGothic
    },
    text: {
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        alignSelf: 'flex-start',
        marginLeft: 3 * vh,
        marginTop: 2 * vh
    },
    loginBtn: {
        marginTop: 4 * vh,
        width: '90%',
        backgroundColor: colors.red,
        borderRadius: 4 * vh,
    },
    errorText: {
        alignSelf: 'center',
        color: colors.red,
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        margin: 2 * vh
    }
});

export default styles;
