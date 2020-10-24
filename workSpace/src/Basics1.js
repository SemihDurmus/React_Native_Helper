import axios from 'axios';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Main = (props) => {
  const fetchData_Then = () => {
    let myData = [];
    console.log('starting fetch with then..');

    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response);
      myData = response.data;
    });
    // .catch((error) => {
    //   console.log(error);
    // });
    console.log(myData);
    console.log('end fetch..');
  };

  const fetchData_Await = async () => {
    console.log('starting await fetch...');

    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    console.log(response);
    console.log('end await fetch...');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Main</Text>
        <Button title="Fetch Data w Then" onPress={fetchData_Then} />
        <Button title="Fetch Data w Await" onPress={fetchData_Await} />
      </View>
    </SafeAreaView>
  );
};

export default Main;
