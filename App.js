import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRestore } from "react-relay-offline";
import { environment } from "./relay";

export default function App() {
  const isRehydrated = useRestore(environment);
  if (!isRehydrated) {
    console.log("loading");
    return <View><Text>loading</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
