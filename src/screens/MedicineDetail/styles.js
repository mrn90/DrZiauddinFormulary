import { StyleSheet } from 'react-native';
// import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // width: 100 * vw,
    // backgroundColor: 'red',
    overflow: 'scroll',
    // paddingBottom: 30 * vh,
  },
  scrollViewContentContainer: {
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '100%'
  },
  mainView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  scrollContainer: {
    // width: 100 * vw,
    marginBottom: 10 * vh
  },
  serachFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3 * vh,
    // backgroundColor: 'red',
    // marginTop: 2 * vh,
    // marginBottom: 2 * vh
  },
  search: {
    alignSelf: 'center',
    borderWidth: 0.1 * vh,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderRadius: 1 * vh,
    paddingVertical: 1.2 * vh,
    width: '85%',
    paddingLeft: 2 * vh,
    // marginTop: 2 * vh,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    fontFamily: fonts.CenturyGothic.CenturyGothicBold
  },
  iconContainer: {
    // height: 4 * vh,
    width: 5 * vh,
    // paddingVertical: 1.1 * vh,
    // backgroundColor: colors.darkBackground,
    // right: 4 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.9 * vh,
    position: 'relative',
    // marginTop: 2 * vh,
    right: 5.1 * vh
  },
  searchIcon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    // position: 'absolute',
    // marginTop: 2 * vh,
    // backgroundColor: 'red',
    // alignSelf: 'flex-end',
  },
  iconFilter: {
    height: 4 * vh,
    width: 4 * vh,
    resizeMode: 'contain',
  },
  services: {
    // marginLeft: 2 * vh,
    paddingBottom: 3 * vh,
    // alignSelf: 'center'
    // backgroundColor: 'red',
    // alignItems: 'center'
    // padding: 2 * vh
    // margin: 2 * vh
  },
  listContainer: {
    top: 2 * vh
    // width: '94%'
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  detailsContainer: {
    margin: 3 * vh
  },
  mainHeading: {
    marginTop: 2 * vh,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginHorizontal: 2 * vh
  },
  mainHeadingText1: {
    fontSize: 2.5 * vh
  },
  mainHeadingText: {
    color: colors.red,
    fontSize: 2.5 * vh,
    left: 1 * vh
  },
  text: {
    marginTop: 2 * vh,
    fontSize: 2 * vh,
    fontFamily: fonts.CenturyGothic.CenturyGothic
  }
});

export default styles;
