import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const InputPanel = (props) => {
  const [inputText, setInputtext] = useState('');

  return (
    <View style={myStyles.container}>
      <TextInput
        onChangeText={(value) => setInputtext(value)}
        style={myStyles.inputContainer}
        placeholder="Enter here..."></TextInput>

      <TouchableOpacity
        style={myStyles.buttonContainer}
        // onPress={() => alert(inputText)}
        onPress={() => props.sendText(inputText)}>
        <Text style={myStyles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPanel;

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
  },

  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    margin: 10,
    borderRadius: 16,
    alignItems: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: '#ecef11',
    padding: 15,
    margin: 10,
    borderRadius: 16,
    width: 150,
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
