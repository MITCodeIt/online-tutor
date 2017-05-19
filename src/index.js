import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDOkCxrEl0jc_An1q0YFMAZp3HQ7tY82Do",
  authDomain: "codeit-online-tutor.firebaseapp.com",
  databaseURL: "https://codeit-online-tutor.firebaseio.com",
  projectId: "codeit-online-tutor",
  storageBucket: "codeit-online-tutor.appspot.com",
  messagingSenderId: "638070970590"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
