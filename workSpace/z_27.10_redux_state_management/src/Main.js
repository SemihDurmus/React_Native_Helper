import React from 'react';
import {SafeAreaView} from 'react-native';
//REDUX
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Component_A from './pages/Component_A';
import Component_B from './pages/Component_B';
import {reducer, initialState} from './context';

const myStore = createStore(reducer, initialState);

const Main = (props) => {
  return (
    <Provider store={myStore}>
      <SafeAreaView style={{flex: 1}}>
        <Component_A />
        <Component_B />
      </SafeAreaView>
    </Provider>
  );
};

export default Main;
