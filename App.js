import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from './components/Header'
import Main from './components/Main';
import styles from './styles'

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Main />
            <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}