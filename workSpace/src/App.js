import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
  Platform,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const AddToList = (a) => {
    a === ''
      ? alert('You should write something')
      : setTodos(() => {
          return [{desc: a, id: todos.length}, ...todos];
        });
  };

  const delButton = (index) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          setTodos((order) => {
            order.splice(index, 1);
            for (let i = 0; i < order.length; i++) {
              order[i].id = i;
            }
            return [...order];
          });
          setCounter(todos.length);
        }}>
        <Text style={styles.deleteButtonText}>{'❌'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>TODO</Text>
            <Text style={styles.headerText}>{counter}</Text>
          </View>

          <FlatList
            style={styles.main}
            data={todos}
            keyExtractor={(item, index) => item.id}
            renderItem={(data) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{data.item.desc}</Text>
                <>{delButton(data.item.id)}</>
              </View>
            )}
          />

          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              onChangeText={(val) => setText(val)}
              placeholder={'Enter a ToDo item..'}
              value={text}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                AddToList(text);
                setText('');
                setCounter(todos.length == undefined ? 0 : todos.length + 1);
              }}>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default App;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#36474F',
  },
  container: {
    flex: 1,
    backgroundColor: '#36474F',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 80,
    padding: 5,
    marginHorizontal: 10,
  },
  headerText: {
    color: '#FFA827',
    fontSize: 33,
    fontWeight: 'bold',
  },
  main: {
    flex: 5,
  },
  input: {
    flex: 2,
    backgroundColor: '#B0BFC6',
    margin: 10,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 110,
    maxHeight: 170,
  },
  inputText: {
    backgroundColor: '#EBEFF2',
    width: '90%',
    minHeight: 55,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: '#546F7A',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#FFA827',
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FCFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#546F7A',
    marginHorizontal: 10,
    marginVertical: 6,
    alignItems: 'center',
    paddingRight: 15,
    borderRadius: 10,
    borderColor: '#B0BFC6',
    borderWidth: 1,
  },
  listText: {
    backgroundColor: '#546F7A',
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 8,
    color: '#FCFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  deleteButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
