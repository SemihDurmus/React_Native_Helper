import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Part_1 = () => {
    return (
        <View style={styles.container}>
            <Text>This is an imported component</Text>
            <Text>name = MyComponent_part </Text>
            <View>
                <Text>from MyComponent.js file </Text>
            </View>
        </View>
    )
}

export default MyComponent_part;

const styles = StyleSheet.create({
    container : {
        margin: 15, 
        marginTop: 10,
        padding: 10,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#828282",
    }
})




