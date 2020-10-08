import React from 'react';
//Code below brings modules
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Part_1 from './components/MyComponent';
// attribute={}

//Inline style
{
  /* <View style={{
  backgroundColor: '#c0392b',
  padding: 20,
  margin: 15,
  borderRadius: 18,
}}>
</View> */
}

const App = () => {
  const my_name = 'Semih';
  const isAdmin = true;

  function myFunction_1() {
    return 'This string comes from a function';
  }

  function myFunction_2() {
    return (
      <>
        <Text style={styles.hello}>
          This text comes from a function within tags (line-1)
        </Text>
        <Text style={styles.hello}>
          This text comes from a function within tags (line-2)
        </Text>
      </>
    );
  }

  function printName(userName) {
    return <Text>{userName}</Text>;
  }

  function printCityName() {
    const cityArray = ['izmir', 'istanbul', 'ankara'];
    return cityArray.map((city) => {
      return <Text style={{color: 'red'}}>{city}</Text>;
    });
  }

  function adminCheck_1() {
    // if (isAdmin) return <Text>-->User is Admin.</Text>;

    // return <Text>-->User is Customer.</Text>;

    return isAdmin ? <Text>-->User is Admin.</Text> : null;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
      <Part_1 />
      <Text style={styles.hello}>{myFunction_1()}</Text>
      {myFunction_2()}
      <Text style={styles.hello}>Hello {my_name} 🧑🏽‍💻</Text>
      <Text style={styles.hello}>Nr : {4 + 6}</Text>
      {adminCheck_1()}
      {isAdmin ? <Text>-->User is Admin.</Text> : null}
      {isAdmin && <Text>-->User is Admin.</Text>}
      {printName('Semih')}
      {printCityName()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mediumorchid',
    padding: 20,
    margin: 15,
    marginBottom: 10,
    borderRadius: 18,
  },
  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
  },
  hello: {
    fontSize: 16,
    marginLeft: 14,
    marginBottom: 16,
  },
});

export default App;
