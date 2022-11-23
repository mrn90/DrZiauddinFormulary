import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
import { fonts } from '../../../assets/index';
import { RollInLeft } from 'react-native-reanimated';

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 1.2 * vh,

    // alignSelf: 'center',
    // width: '100%',
    // flex: 1
    // backgroundColor: 'red',
    marginLeft: 4 * vh
  },
  medicineNameContainer: {
    // backgroundColor: 'red',
    // alignContent: 'flex-start',
    // alignItems: 'center',
    // alignSelf: 'flex-start',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    paddingBottom: 1 * vh
    // marginRight: 8 * vw,
    // marginLeft: 2 * vh
    // paddingHorizontal: 1 * vh
  },
  nameMedicineText: {
    fontFamily: fonts.CenturyGothic.CenturyGothic
    // alignSelf: 'flex-start'
  },
  separator: {
    height: 0.2 * vh,
    // display: 'flex',
    // width: 30 * vh,
    width: '80%',
    marginTop: 0.5 * vh,
    backgroundColor: colors.lightGray,

  }
});

export default styles;
