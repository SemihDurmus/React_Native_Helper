import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

// "id": 5673,
// "uid": "76e944b6-5527-4b07-be18-7a6b0a28491f",
// "name": "Salty Curry",
// "type": "Caribbean",
// "description": "SVIs mission is to deliver quality products at affordable prices to our independent retailers, wholesalers and food service partners around the world by providing international procurement, distribution, marketing and supply chain management.",
// "review": "This particular location like the many other restaurants down the block has ample seating and a second floor.",
// "logo": "https://loremflickr.com/500/500/restaurant",
// "phone_number": "1-779-732-4390",
// "address": "2864 Stephan Land, Charissahaven, DE 76494-1459",

const RestaurantCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salty Curry</Text>
      </View>
      <View style={styles.type}>
        <Text style={styles.typeText}>Carribean</Text>
      </View>
      <Image
        style={styles.img}
        source={{uri: 'https://loremflickr.com/500/500/restaurant'}}
      />
      <Text style={styles.desc}>
        SVIs mission is to deliver quality products at affordable prices to our
        independent retailers, wholesalers and food service partners around the
        world by providing international procurement, distribution, marketing
        and supply chain management.
      </Text>
      <Text style={styles.review}>
        This particular location like the many other restaurants down the block
        has ample seating and a second floor.
      </Text>
    </View>
  );
};

export {RestaurantCard};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
  },
  type: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'yellowgreen',
  },
  typeText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  img: {
    height: Dimensions.get('window').height * 0.3,
    margin: 10,
  },
  desc: {
    margin: 10,
    textAlign: 'justify',
  },
  review: {
    margin: 10,
    color: 'brown',
    textAlign: 'justify',
    fontStyle: 'italic',
  },
});
