import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('testing')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Search podcast"
        onChangeText={(text) => setOutputText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
