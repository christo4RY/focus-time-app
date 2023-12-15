import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
export const RoundButton = ({ size, title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={style(size).radius} onPress={onPress}>
        <Text style={style(size).text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = (size) => ({
  text: {
    color: colors.white,
    fontSize: 25,
  },
  radius: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
  },
});
