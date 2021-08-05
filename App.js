import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Header from './components/Header'
import Main from './components/Main';
import styles from './styles'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
            <Header />
            <Main />
            <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}