import react from 'react';
import {SafeAreView, View, Text} from 'react-native';

const First = (props) => {
  return (
    <SafeAreView>
      <View>
        <Text>First</Text>
      </View>
    </SafeAreView>
  );
};

export default First;
