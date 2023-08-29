import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import LoginForm from './LoginForm';

const firebaseConfig = {
  apiKey: "AIzaSyC66MFpPOIL34WyB0tz4Qg9U7Z0VgeKTxk",
  authDomain: "otp-verification-96430.firebaseapp.com",
  projectId: "otp-verification-96430",
  storageBucket: "otp-verification-96430.appspot.com",
  messagingSenderId: "759829702108",
  appId: "1:759829702108:web:2737c0d489d67765a4db19",
  measurementId: "G-8EDTX7V5SQ"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
