import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import MyBanner from './components/MyBanner';

const food_data = [
    {
      id: 0,
      title: 'Soups',
      desc: 'Delicious and warm',
      color: '#e57373',
      isActive: false,
    },
    {
      id: 1,
      title: 'Appetizers',
      desc: 'Many different options',
      color: '#81d4fa',
      isActive: true,
    },
    {
      id: 2,
      title: 'Main deal',
      desc: 'Delicious Tastes',
      color: '#ffd54f',
      isActive: false,
    },
    {
      id: 3,
      title: 'Light Beverages',
      desc: 'Cool drinks',
      color: '#cfd8dc',
      isActive: false,
    },
    {
      id: 4,
      title: 'Desserts',
      desc: 'Sweet options',
      color: '#98B336',
      isActive: true,
    },
  ];

const App = () => {
    return (
    <SafeAreaView style={{flex:1}}>
        <View>
        {food_data.map((food) => {
            return (
            <MyBanner 
            title={food.title}
            desc={food.desc}
            color={food.color}
            isActive = {food.isActive}
            />
            )
        })}

        <TouchableOpacity
            style={styles.container}
            onPress={()=> alert('This is PRESS')}
            onLongPress={()=> alert('This is longpress')}
        >
            <Text style={styles.text}>Refresh</Text>
        </TouchableOpacity>

        </View>
    </SafeAreaView>
    )
};


export default App;

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#76ff03",
        padding: 16,
        margin: 10,
        borderRadius: 12,
        width: 200,
        alignSelf:'center',
    },

    text : {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
    }
});