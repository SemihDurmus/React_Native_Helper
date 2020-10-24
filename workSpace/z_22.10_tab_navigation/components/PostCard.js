import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

const PostCard = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onSelect()}>
      <View>
        <Image source={{uri: props.post.img}} style={styles.image} />
        <View style={styles.text_container}>
          <Text style={styles.title}>{props.post.userName.toUpperCase()}</Text>
          <Text numberOfLines={2}>{props.post.description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
  },
  text_container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
});

// id: 0,
// userName: 'tesla_nikola',
// img:
//   'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg',
// description:
//   'Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.',
// isLiked: false,
