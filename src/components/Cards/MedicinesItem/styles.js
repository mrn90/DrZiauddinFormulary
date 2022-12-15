import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
import { fonts } from '../../../assets/index';

const styles = StyleSheet.create({
  serviceContainer: {
    // margin: 2 * vh,
    marginTop: 2 * vh,
    borderWidth: 0.1 * vh,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderRadius: 0.8 * vh,
    paddingVertical: 2 * vh,
    // paddingHorizontal: 2 * vh,
    // marginHorizontal: 2 * vh,
    // backgroundColor: 'red'
    width: '90%',
    alignSelf: 'center',
    // alignItems: 'center',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1 * vh
    // paddingLeft: 2 * vh,
  },
  medicineNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 1 * vh,
    // width: '100%',
    // backgroundColor: 'green',
    // paddingHorizontal: 1 * vh
  },
  medicineName: {
    fontSize: 1.5 * vh
  },
  medicineMaker: {
    color: colors.red,
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    left: 1 * vh,
    fontSize: 1.2 * vh
  },
});

export default styles;
