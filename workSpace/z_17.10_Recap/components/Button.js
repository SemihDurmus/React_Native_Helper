import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  console.log(props);

  //   let selectedColor = props.color;

  //   if (props.color == undefined) selectedColor = '#a5d6a7';
  return (
    <TouchableOpacity
      //   style={[myStyles.buttonContainer, {backgroundColor: selectedColor}]}
      onPress={props.sayingHello}
      style={[
        myStyles.buttonContainer,
        {
          backgroundColor: props.color === undefined ? '#a5d6a7' : props.color,
        },
      ]}>
      <Text>{props.banner}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const myStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#a5d6a7',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
