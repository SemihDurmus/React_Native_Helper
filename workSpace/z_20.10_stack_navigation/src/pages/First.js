import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, TextInput} from 'react-native';

const number = 15;

const First = (props) => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40}}>First</Text>
        <Text style={{fontSize: 40}}>{number}</Text>
        <Text style={{fontSize: 40}}>Entered value is : {userName}</Text>
        <View style={{backgroundColor: '#e0e0e0', padding: 10, margin: 15}}>
          <TextInput
            placeholder={'Enter a text'}
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <Button
          title={'GO'}
          onPress={
            () =>
              props.navigation.navigate('SecondPage', {
                myNumber: number,
                selectedValue: userName,
              }) //sending a variable to another page
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default First;
