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
    backgroundColor: '#EAECF0',
    borderColor: colors.lightGray,
    borderRadius: 1 * vh,
    paddingVertical: 1.2 * vh,
    width: '90%',
    paddingLeft: 2 * vh,
    // marginTop: 2 * vh,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  iconContainer: {
    // height: 4 * vh,
    width: 5 * vh,
    paddingVertical: 1.1 * vh,
    backgroundColor: colors.darkBackground,
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
});

export default styles;
