import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCUrFw9JS9ru1RUFK-1Ul8PiquTZbboGZE',
      authDomain: 'manager-fa71a.firebaseapp.com',
      databaseURL: 'https://manager-fa71a.firebaseio.com',
      projectId: 'manager-fa71a',
      storageBucket: '',
      messagingSenderId: '309622865161'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        <View>
          <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
        </View>
      </Provider>
    );
  }
}

