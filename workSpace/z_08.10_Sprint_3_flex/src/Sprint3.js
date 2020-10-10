import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.red}>
        <View style={styles.gray}>
          <View style={styles.orange}>
            <Text style={styles.text}>Orange Circle</Text>
          </View>
          <View style={styles.yellow}>
            <Text style={styles.text}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.pink}>
        <View style={styles.black}>
          <Text style={[styles.text, {color: 'white'}]}>Black Box</Text>
        </View>
        <View style={styles.brown}>
          <Text
            style={[
              styles.text,
              {color: 'white'},
              {transform: [{rotate: '-90deg'}]},
            ]}>
            Brown Box
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  red: {
    flex: 2,
    backgroundColor: 'red',
  },
  pink: {
    flex: 3,
    backgroundColor: '#FFC0CA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#4F6475',
  },
  gray: {
    flex: 1,
    backgroundColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
  },
  orange: {
    backgroundColor: '#FEA500',
    borderRadius: 70,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellow: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    height: 60,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    flex: 5,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    alignSelf: 'stretch',
  },
  brown: {
    flex: 2,
    backgroundColor: '#A42A29',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    alignSelf: 'stretch',
  },
});