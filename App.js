import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colours } from './src/utils/colours';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  // Remember to change 'test' to null for app to operate correctly
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history}/>
        </>
      ) : (
        <Timer 
        focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([...history, subject])
        }}
        clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colours.background,
  },
});
