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
    container: {
        flex: 1
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
        color: colors.darkBackground,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 2.5 * vh,
        marginTop: 7 * vh
    },
    fieldContainer: {
        marginTop: 3 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    field: {
        alignSelf: 'center',
        borderWidth: 0.1 * vh,
        backgroundColor: 'white',
        borderColor: colors.lightGray,
        borderRadius: 4 * vh,
        paddingVertical: 2 * vh,
        width: '90%',
        paddingLeft: 2 * vh,
        marginTop: 2 * vh,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2 * vh
        // position: 'absolute'
        // zIndex: 2 * vhs
    },
    dropdown: {
        alignSelf: 'center',
        borderWidth: 0.1 * vh,
        backgroundColor: 'white',
        borderColor: colors.lightGray,
        borderRadius: 4 * vh,
        paddingVertical: 2 * vh,
        width: '90%',
        paddingLeft: 2 * vh,
        marginTop: 2 * vh,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        position: 'relative',
        elevation: 2 * vh
        // paddingBottom: 5 * vh
        // zIndex: 4 * vh,
        // top: 200
        // zIndex: 2 * vh
    },
    placeholderStyle: {
        fontFamily: fonts.CenturyGothic.CenturyGothicBold,
        color: colors.lightGray
    },
    btnContainer: {
        position: 'relative',
        // bottom: 7 * vh,
        marginBottom: 10 * vh,
        width: '90%',
        alignSelf: 'center',
    },
    loginBtn: {
        marginTop: 4 * vh,
        width: '90%',
        backgroundColor: colors.red,
        borderRadius: 4 * vh,
        // position: 'absolute',
        // alignSelf: 'flex-end'
    },
});

export default styles;
