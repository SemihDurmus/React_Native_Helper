import React from 'react';
import {View, Text} from 'react-native';
//REDUX
import {useSelector} from 'react-redux';

const Component_B = (props) => {
  const myCounterB = useSelector((myGlobalState) => myGlobalState.counter);
  const myUserNameB = useSelector((x) => x.userName);

  return (
    <View style={{backgroundColor: '#bdbdbd', flex: 1}}>
      <Text>Component_B</Text>
      <Text style={{fontSize: 40}}>Counter: {myCounterB}</Text>
      <Text style={{fontSize: 40}}>Name: {myUserNameB}</Text>
    </View>
  );
};

export default Component_B;
