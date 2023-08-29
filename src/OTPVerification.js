import React from 'react';
import { useForm } from 'react-hook-form';

function OTPVerification({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Correct usage of register */}
      <input type="text" name="otp" placeholder="Enter OTP" ref={register({ required: true })} />
      <button type="submit">Verify OTP</button>
    </form>
  );
}

export default OTPVerification;
