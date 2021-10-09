import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLOR_PRINCIPAL_1} from '../utils/colors';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={50} color={COLOR_PRINCIPAL_1} />
    </View>
  );
}
