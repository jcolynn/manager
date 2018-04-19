import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA3SSrEXIULvcg1LqvCLDhmev6PyDzqfxg",
      authDomain: "manager-aafc3.firebaseapp.com",
      databaseURL: "https://manager-aafc3.firebaseio.com",
      projectId: "manager-aafc3",
      storageBucket: "manager-aafc3.appspot.com",
      messagingSenderId: "481714152293"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
