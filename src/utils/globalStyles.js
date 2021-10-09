import {Platform, StyleSheet} from 'react-native';
import {COLOR_PRINCIPAL_1, COLOR_PRINCIPAL_2} from './colors';

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginVertical: 20,
  },
  title: {
    color: COLOR_PRINCIPAL_2,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: COLOR_PRINCIPAL_1,
    fontSize: 14,
  },
  underlineText: {
    color: COLOR_PRINCIPAL_2,
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIOS: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 10,
  },
});
