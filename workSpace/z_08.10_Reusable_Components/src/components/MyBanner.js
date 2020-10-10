import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = (props) => {

    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text>{props.desc}</Text>
                </View>

                {!props.isActive && <Text>Not active</Text>}
            </View>
        </View>
    )
}

export default MyBanner;


const styles = StyleSheet.create({
    container : {
        backgroundColor: "#e0e0e0",
        padding: 16,
        margin: 10,
        borderRadius: 12,
    },

    text : {
        fontWeight: "800",
        fontSize: 20,
    }
});

