import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  Dimensions,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

const App = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    Alert.alert(
      'CLARUSWAY',
      `Email is : ${email}
    Pass is : ${password}`,
    );
    setPassword('');
    setEmail('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{margin: 20, fontSize: 150}}>🌍</Text>

          <View style={styles.input}>
            <TextInput
              value={email}
              placeholder="E-mail.."
              keyboardType="email-address"
              onChangeText={(userText) => {
                console.log('Email : ', userText);
                setEmail(userText);
              }}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              value={password}
              placeholder="Password.."
              secureTextEntry={true}
              onChangeText={(userPass) => {
                console.log('Pass : ', userPass);
                setPassword(userPass);
              }}
            />
          </View>

          <Button title="LOG IN" onPress={login} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.85,
  },
});
