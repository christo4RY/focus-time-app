import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacings, sizes } from '../utils/size';
import { RoundButton } from '../components/RoundButton';

export const Timing = ({ setMinute }) => {
  return (
    <View style={style.container}>
      <RoundButton title="10" onPress={() => setMinute(10)} size={70} />
      <RoundButton title="15" onPress={() => setMinute(15)} size={70} />
      <RoundButton title="20" onPress={() => setMinute(30)} size={70} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginVertical: spacings.lg,
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
  },
});
