import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundButton } from '../components/RoundButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View>
      <View style={style.inpuptContainer}>
        <TextInput
          style={style.textInput}
          label="What would like to focus?"
          value={subject}
          onChangeText={setSubject}
        />
        <RoundButton size={55} title="Go" onPress={() => addSubject(subject)} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inpuptContainer: {
    // flex:1,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textInput: {
    flex: 1,
  },
});
