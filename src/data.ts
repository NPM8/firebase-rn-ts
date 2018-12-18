import * as firebase from 'firebase';

export interface IConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

export const config: IConfig = {
  apiKey: 'AIzaSyDeEt3r3gmECNKPLbG4Jwuf5bxHnvNsY9M',
  authDomain: 'school-react-native-fb.firebaseapp.com',
  databaseURL: 'https://school-react-native-fb.firebaseio.com',
  messagingSenderId: '278354405977',
  projectId: 'school-react-native-fb',
  storageBucket: 'school-react-native-fb.appspot.com',
};

export const fb = firebase.initializeApp(config);

export const database = () => fb.database().ref();
