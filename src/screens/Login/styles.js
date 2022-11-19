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
    logosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10 * vh,
        // backgroundColor: 'red'
    },
    logo: {
        height: 15 * vh,
        width: 35 * vh,
        resizeMode: 'contain',
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 7 * vh
    },
    fieldContainer: {
        marginTop: 5 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    field: {
        alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
        // borderWidth: 0.04 * vh,
        backgroundColor: 'white',
        borderColor: colors.lightGray,
        borderRadius: 4 * vh,
        paddingVertical: 2 * vh,
        width: '90%',
        paddingLeft: 2 * vh,
        marginTop: 10 * vh,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        // shadowRadius: 0.4 * vh,
        // zIndex: 2 * vh
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        fontWeight: 'bold'

    },
    placeholder: {
        fontFamily: fonts.CenturyGothic.CenturyGothic
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 2 * vh,
        marginTop: 2 * vh
        // marginLeft: 2 
    },
    checkContainer: {
        height: 2.6 * vh,
        width: 2.6 * vh,
        backgroundColor: colors.red,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1 * vh
    },
    iconCheck: {
        height: 2.2 * vh,
        width: 2.2 * vh,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    unCheckContainer: {
        height: 2.6 * vh,
        width: 2.6 * vh,
        backgroundColor: colors.grayText2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1 * vh,
        // backgroundColor: 'green'
    },
    text: {
        fontFamily: fonts.CenturyGothic.CenturyGothic
    },
    loginBtn: {
        marginTop: 4 * vh,
        width: '90%',
        backgroundColor: colors.red,
        borderRadius: 4 * vh,
    },
});

export default styles;
