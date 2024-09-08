'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const PMSSSLogin = () => {
  const router = useRouter();
  const openForget = () => {
    // Navigate to forget password page
    router.push('/forget-password'); // Assuming you have a forget password route
  }
  const openOtp = () => {
    // Navigate to OTP page
    router.push('/OtpVerify'); // Assuming you have a otp verification route
  }
  const goRegister = () => {
    // Navigate to Registration page
    router.push('/Register'); // Assuming you have a registration route
  }
  return (


    <form className="w-[40rem] p-5 m-3 mx-auto border-2 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-medium flex justify-center m-2">Login as Candidate</h1>
      <hr className="border border-slate-800" />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        className="w-full p-2 outline-none bg-blue-50"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your registered email"
      />
      <br />
      <br />

      <label htmlFor="password">Password</label>
      <br />
      <input
        className="w-full p-2 outline-none bg-blue-50"
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
      />
      <br />
      <br />

      {/* Captcha Section */}
      
      <label htmlFor="captcha">Captcha</label>
      <br />
      <div className="flex my-5 gap-4">
        <div className="w-1/2 p-3 bg-gray-700">123</div>
        <input
          className="w-1/2 p-3 border-slate-600 border-2 rounded-md outline-none bg-blue-50"
          type="text"
          name="captcha"
          id="captcha"
          placeholder="Enter Captcha"
        />
        <br />
        <br />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button onClick={openForget} className="w-1/2 p-2 bg-orange-100 hover:bg-orange-100" type="button">
          Forgot Password?
        </button>
        <button onClick={openOtp} className="w-1/2 p-2 bg-[#274897] text-white rounded-md hover:bg-[#274997e8]" type="submit">
          Get OTP
        </button>
      </div>
      <br />
      <button onClick={goRegister} className="p-2 w-full bg-[#22A927] text-white rounded-md hover:bg-[#22a926e8]" type='button'>
        Click Here for New Registration
      </button>
    </form>

  );
};

export default PMSSSLogin;
