import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  console.log('rendering...')

  const updateCounter = () => setCounter(counter + 1);

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 150, textAlign: 'center'}}>{counter}</Text>
        <Button title="Up" onPress={updateCounter} />
        <Button title="Reset" onPress={() => setCounter(0)} />
      </View>
    </SafeAreaView>
  );
};

export default App;
