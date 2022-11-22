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
        borderRadius: 4 * vh,
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
    },
    bell: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain'
    },
    profileImageContainer: {
        borderRadius: 6 * vh,
        alignSelf: 'center',
        zIndex: 5 * vh,
        // backgroundColor: 'red',
        // bottom: 6.5 * vh,
    },
    profileImage: {
        // resizeMode: 'contain',
        height: vh * 10,
        width: vh * 10,
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
        // justifyContent: 'center',
        margin: 2 * vh,
        // paddingHorizontal: 2 * vh
    },
    screenContainer: {
        borderRadius: 1.5 * vh,
        borderColor: colors.grayText3,
        borderWidth: 0.2 * vh,
        width: 85 * vw,
        paddingVertical: 2.5 * vh,
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
        height: 2.5 * vh,
        width: 2.5 * vh,
        resizeMode: 'contain',
        right: 2 * vh
        // backgroundColor: 'red'
    },
    iconLogout: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain'
    },
    logoutText: {
        fontSize: 1.5 * vh,
        marginHorizontal: 0.8 * vh
    },
    versionLogoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: 40 * vh,
        // paddingHorizontal: 3 * vh
        // margin: 2 * vh,
        // backgroundColor: 'red'
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 2 * vh
        // backgroundColor: "red"
    }
});

export default styles;
