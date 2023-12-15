import React, { useState, useEffect, v } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { CountDown } from '../components/CountDown';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';
import { Control } from './Control';
import { colors } from '../utils/colors';
import { spacings, sizes } from '../utils/size';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onEndSubject, clearSubject }) => {
  useKeepAwake();
  const [isStart, setIsStart] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minute, setMinute] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStart(false);
    reset();
    onEndSubject(focusSubject);
    clearSubject();
    setProgress(1);
  };

  return (
    <View style={style.container}>
      <View>
        <CountDown
          isPause={!isStart}
          minutes={minute}
          setProgress={setProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={style.progressContainer}>
        <ProgressBar progress={progress} color={colors.white} />
      </View>
      <Timing setMinute={setMinute} />
      <View>
        <Control onPress={setIsStart} isStart={isStart} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // paddingTop: spacings.xl,
    paddingHorizontal: spacings.lg,
    // alignItems:'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  progressContainer: {
    marginVertical: 50,
  },
});
