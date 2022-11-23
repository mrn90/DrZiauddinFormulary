import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
import { fonts } from '../../../assets/index';

const styles = StyleSheet.create({
  serviceContainer: {
    // margin: 2 * vh,
    // marginTop: 2 * vh,
    borderWidth: 0.1 * vh,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderRadius: 0.5 * vh,
    paddingVertical: 1.4 * vh,
    // backgroundColor: 'red'
    width: '90%',
    alignSelf: 'center',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    // paddingLeft: 2 * vh,
  },
  medicineNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 2 * vh
    // paddingHorizontal: 1 * vh
  },
  medicineMaker: {
    color: colors.red,
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    left: 2 * vh
  },
});

export default styles;
