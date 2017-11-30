import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Ball from './src/Ball'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Ball></Ball>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
