import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native'

const App = () => {

    //Spread operator-----------
    const pressFunction = () => {
        console.log("Hi !");
    }

    const user = {
        name : 'John',
        age : 28,
        isAdmin : false
    }

    const member = {
        ...user, 
        password : '012345',
        type : null,
    }

    const myArray = [1,2,3,4];
    const newArray = ["izmir", "kars", ...myArray];

    //Destruction operator works only with objects

    const myObj = {
        url : "www.google.com",
        data : 500,
        config : "Empty"
    }

    const {config, url} = myObj;

    console.log(config);
    console.log(url);


    return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Clarusway</Text>
        <Button  title='Log' onPress={pressFunction}/>
    </SafeAreaView>
    )
}

export default App