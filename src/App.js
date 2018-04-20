import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
