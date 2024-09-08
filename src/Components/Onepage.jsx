'use client';
import React from 'react'
import Instruction from './instruction';
import Login from './login';
import Registration from './Registration';
import OTPVerification from './OtpVerify';

const Onepage = () => {
  return (
    <div className="bg-white">
      {/* Header */}


      {/* Main Content */}
      <main className="flex w-full p-5">
        {/* Heading and Guidelines */}
        <Instruction />


        {/* Login Form */}
        <Login />
        {/* <Registration/> */}


      </main>
    </div>
  );
}

export default Onepage
