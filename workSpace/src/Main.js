// Overall - 1
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import Button from './components/Button';
import InputPanel from './components/InputPanel';

const App = () => {
  const [userName, setuserName] = useState('');
  function sayHello() {
    alert('Hei hei');
  }

  const todoArray = [];

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50, textAlign: 'center'}}>
          Hello {userName}
        </Text>
      </View>

      <InputPanel
        sendText={(myValue) => {
          setuserName(myValue);
          console.log(myValue);
          todoArray.push(myValue);
          console.log(todoArray);
        }}
      />

      <Button banner="Say hello" color="cyan" sayingHello={() => sayHello()} />
      <Button
        banner="Press me"
        sayingHello={() => {
          Alert.alert('CLARUWAY', 'You pressed');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
