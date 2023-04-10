import {
  StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import * as Notifications from 'expo-notifications';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>app is working (but with error in terminal)!!!</Text>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
