import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'green', flex:1}}>
      <View style= {styles.container1}>
        <Text>Line-1</Text>
        <Text>Line-1</Text>
        <Text>Line-1</Text>
      </View> 
      <View style= {styles.container2}>
          <View style={styles.mini_view}/>
          <View style={styles.mini_view} />
          <View style={styles.mini_view} />
      </View>  
      <View style= {styles.container3}>
        <Text>Item-1</Text>
        <Text>Item-2</Text>
        <Text>Item-3</Text>
      </View>  
    </SafeAreaView>
  );
};


export default App;


const styles = StyleSheet.create ({
  container1: {
    backgroundColor: '#e0e0e0', 
    paddingTop: 10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  container2: {
    backgroundColor: 'cyan', 
    flex:2,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  container3: {
    backgroundColor: 'salmon', 
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mini_view: {
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
  }
});