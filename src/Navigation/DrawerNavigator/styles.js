import { StyleSheet } from 'react-native';
// import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core';
// import { linear } from 'react-native/Libraries/Animated/Easing';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    drawerContainer: {
        // backgroundColor: 'red',
        width: 100 * vw,
        height: 100 * vh

    },
    topContainer: {
        width: 100 * vw,
        height: 45 * vh,
        // borderRadius: 4 * vh,
        backgroundColor: '#404558',
        // backgroundColor: linear-gradient('to bottom', '#404558', '#624b75', '#97477b', '#c93f65', '#e54e36')
        // width: 100 * vw,
        // height: 40 * vh,
        // borderTopColor: "#404558",
        // borderTopWidth: (50 * vh) / 2,
        // borderRightWidth: 100 * vw,
        // borderRightColor: '#E54E36'

    },
    headingContainer: {
        flexDirection: 'row',
        // alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5 * vh,
        margin: 2 * vh
    },
    iconBack: {
        height: 3 * vh,
        width: 3 * vh,
        resizeMode: 'contain',
        // backgroundColor: "red",
        left: 2 * vh
    },
    headingText: {
        color: colors.white,
        fontSize: 3 * vh,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    notificationBackground: {
        height: 3.5 * vh,
        width: 3.5 * vh,
        borderRadius: 4 * vh,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: 'center',
        right: 2 * vh,
        display: 'none'
    },
    bell: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain'
    },
    profileImageContainer: {
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // zIndex: 5 * vh,
        // backgroundColor: 'red',
        width: '100%'
        // bottom: 6.5 * vh,
    },
    profileImage: {
        resizeMode: 'contain',
        height: 15 * vh,
        width: 35 * vh,
        // position: 'absolute',
        // bottom: vh * 2,
    },
    cameraContainer: {
        borderRadius: 6 * vh,
        height: 4 * vh,
        width: 4 * vh,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
    },
    IconCamera2: {
        resizeMode: 'contain',
        height: 2 * vh,
        width: 2 * vh,
    },
    userName: {
        fontSize: 2.5 * vh,
        textAlign: 'center',
        color: colors.white,
        marginTop: 1 * vh,
        // fontFamily: fonts.CenturyGothic.CenturyGothicBold
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1 * vh
        // marginEnd: 2 * vh
    },
    pin: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain',
        marginHorizontal: 1 * vh
    },
    locationText: {
        fontSize: 1.5 * vh,
        color: colors.white,
        fontFamily: fonts.CenturyGothic.CenturyGothic
    },
    drawerScreensContainer: {
        backgroundColor: colors.white,
        borderRadius: 2 * vh,
        paddingVertical: 5 * vh,
        alignItems: 'center',
        margin: 2 * vh,
        // paddingHorizontal: 2 * vh
    },
    screenContainer: {
        borderRadius: 1.5 * vh,
        borderColor: colors.grayText3,
        borderWidth: 0.2 * vh,
        width: 85 * vw,
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // alignContent: "flex-start",
        marginVertical: 3,
        bottom: 2 * vh
        // marginBottom: 4 * vh
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: 'red',
        // marginHorizontal: 2 * vh
    },
    profileIcon: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain',
        // paddingHorizontal: 2 * vh
        // marginHorizontal: 2 * vh
    },
    text: {
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        marginHorizontal: 2 * vh
        // alignContent: 'flex-start',
        // alignItems: 'center',
        // justifyContent: 'flex-start'
        // textAlign: 'center',
        // alignSelf: 'center',
        // justifyContent: 'flex-start'
        // right: 6 * vh
    },
    arrow: {
        height: 6 * vh,
        width: 6 * vh,
        resizeMode: 'contain',
        // left: 3 * vh
        // backgroundColor: 'red'
    },
    iconLogout: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain',
        // alignSelf: 'flex-start'
    },
    logoutText: {
        fontSize: 1.5 * vh,
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        fontWeight: 'bold',
        marginHorizontal: 0.8 * vh,

    },
    versionLogoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 4.5 * vh,
        bottom: 10 * vh
        // marginVertical: 10 * vh
        // marginBottom: 10 * vh
        // paddingHorizontal: 5 * vh
        // marginHorizontal:15 * vh
        // margin: 2 * vh
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingRight: 10 * vh
        // rifht: 15 * vh
        // backgroundColor: 'red',
        // marginRight: 22 * vh
        // alignSelf: 'flex-start'
    },
    separator: {
        backgroundColor: colors.darkBackground,
        width: 85 * vw,
        height: 0.2 * vh,
        alignSelf: 'center',
        bottom: 13 * vh,

    },

});

export default styles;
