import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, FlatList} from 'react-native';

const Main = (props) => {
  const [userData, setUserData] = useState([]);

  const fetchData_Then = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      //response.data yerine {data}
      console.log(data);
      setUserData(data);
    });
  };

  const fetchData_Await = async () => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUserData(data);
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="Fetch Data w Then" onPress={fetchData_Then} />
        <Button title="Fetch Data w Await" onPress={fetchData_Await} />
      </View>
      <FlatList
        data={userData}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default Main;
