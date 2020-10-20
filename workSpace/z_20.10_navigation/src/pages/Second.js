import React from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';

const Second = (props) => {
  const userNumber = props.route.params.myNumber; //route.params is a fixed expression
  const userValue = props.route.params.selectedValue; //route.params is a fixed expression

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40}}>Second </Text>
        <Text style={{fontSize: 40}}>{userNumber} </Text>
        <Text style={{fontSize: 30, color: 'green'}}>Value: {userValue} </Text>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default Second;
