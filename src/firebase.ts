import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAsnGSaibe1WUhJqjSy69Bvt6xdBS3QWcQ',
  authDomain: 'isthesecsopen.firebaseapp.com',
  databaseURL: 'https://isthesecsopen.firebaseio.com',
  projectId: 'isthesecsopen',
  storageBucket: 'isthesecsopen.appspot.com',
  messagingSenderId: '593931235568',
  appId: '1:593931235568:web:21393f85fc40984830d235',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
