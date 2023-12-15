import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CountDown } from '../components/CountDown';
import { spacings, sizes } from '../utils/size';
import { RoundButton } from '../components/RoundButton';

export const Control = ({ onPress, isStart }) => {
  return (
    <View style={style.container}>
      <RoundButton
        title={!isStart ? 'Start' : 'Pause'}
        onPress={() => onPress(isStart ? false : true)}
        size={90}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginVertical: spacings.sm,
    alignItems: 'center',
  },
});
