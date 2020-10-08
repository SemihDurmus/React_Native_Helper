import React from 'react';
import {
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity
} from 'react-native';


const App = () => {

  function selectDevice() {
    const platform = Platform.OS;
    const version = Platform.Version;

    if (platform == "ios") 
      return (
      <Text>Hello to Iphone {version}</Text>
      )
    else 
    return (
      <Text>Hello to Android {version}</Text>
      )
  }

  return (
    <SafeAreaView style={{backgroundColor: '#green', flex:1}}>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter an item name"
            keyboardType="email-address"
          />
        </View>

        <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
        </View>
        
        {selectDevice()}
      </View>
    </SafeAreaView>
  );
};


export default App;


const styles = StyleSheet.create ({
  container1: {
    flex:1,
    backgroundColor: "#e0e0e0"
  },

  inputContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    margin: 14,
    borderWidth: 2,
    borderColor: "seagreen",
    borderRadius: 8,
  },

  buttonContainer: {
    backgroundColor: "seagreen",
    padding: 10,
    margin: 14,
    borderWidth: 2,
    borderRadius: 20,
  },

  text: {
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
  }

});