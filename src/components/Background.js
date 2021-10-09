import React from 'react';
import {View} from 'react-native';
import {COLOR_PRINCIPAL_1, COLOR_PRINCIPAL_2} from '../utils/colors';

export default function Background({backGround = COLOR_PRINCIPAL_2}) {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: backGround,
        width: 1000,
        height: 1200,
        top: -450,
        transform: [{rotate: '-70deg'}],
      }}
    />
  );
}
