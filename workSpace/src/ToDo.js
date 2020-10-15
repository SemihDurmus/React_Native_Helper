import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';

import {Header} from './components/Header';
import {AddArea} from './components/AddArea';

const Todo = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#38474F'}}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Header />
          <AddArea />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Todo;
