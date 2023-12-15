import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { sizes, spacings } from '../utils/size';

const timeFormat = (time) => (time < 10 ? `0${time}` : time);
const minuteToMillis = (min) => min * 1000 * 60;
export const CountDown = ({ minutes = 0.1, isPause, onEnd, setProgress }) => {
  const [milli, setMilli] = useState(null);
  const interval = useRef(null);

  const reset = () => setMilli(minuteToMillis(minutes));

  const count = () => {
    console.log('hi');
    setMilli((time) => {
      if (time == 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeleft = time - 1000;
      return timeleft;
    });
  };

  useEffect(() => {
    setMilli(minuteToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    setProgress(milli / minuteToMillis(minutes));
  }, [milli]);

  useEffect(() => {
    if (isPause) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(count, 1000);

    return () => clearInterval(interval.current);
  }, [isPause]);

  const minute = Math.floor(milli / 1000 / 60) % 60;
  const second = Math.floor(milli / 1000) % 60;
  return (
    <View>
      <View style={style.container}>
        <Text style={style.text}>
          {timeFormat(minute)}:{timeFormat(second)}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacings.lg,
    alignItems: 'center',
    borderRadius: sizes.md,
  },
  text: {
    fontSize: sizes.xxl,
  },
});
