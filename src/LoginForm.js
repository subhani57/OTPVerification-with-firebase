import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
      });

      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
      const verificationCode = window.prompt('Enter verification code:');
      const credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);

      console.log('Logged in successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <h2>OTP Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Send OTP</button>
      </form>
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default LoginForm;
