import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  FlatList,
  Text,
} from 'react-native';
import { colors } from './src/utils/colors';
import { sizes } from './src/utils/size';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSub, setCurrentSub] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSub ? (
        <View>
          <Focus addSubject={setCurrentSub} />
          <View style={styles.focusContainer}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList
              data={history}
              renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      ) : (
        <Timer
          focusSubject={currentSub}
          onEndSubject={(subject) => setHistory([...history, subject])}
          clearSubject={() => setCurrentSub(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.blackBlue,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  focusContainer: {
    marginHorizontal: sizes.lg,
    gap: 10,
  },
  text: {
    color: 'yellow',
    fontSize: 18,
  },
});
