import React from 'react';
import {View, Text, Button} from 'react-native';
//REDUX
import {useSelector, useDispatch} from 'react-redux';

const Component_A = (props) => {
  const myCounter = useSelector((globalState) => globalState.counter);
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: '#eceff1', flex: 1}}>
      <Text>Component_A</Text>
      <Text style={{fontSize: 40}}>Counter: {myCounter}</Text>
      <Button title="INC" onPress={() => dispatch({type: 'INC_COUNTER'})} />
      <Button title="DEC" onPress={() => dispatch({type: 'DEC_COUNTER'})} />
      <Button
        title="SET NAME"
        onPress={() =>
          dispatch({type: 'SET_USERNAME', payload: {newUserName: 'Ezran'}})
        }
      />
    </View>
  );
};

export default Component_A;
