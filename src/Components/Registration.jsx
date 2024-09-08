import React from 'react';
const PMSSSRegistration = () => {
  const backLogin = () => {
    <>
      <OTPVerification />
    </>
  }
  return (

    <form className="w-[40rem] p-5 m-3 mx-auto border-2 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-medium flex m-2 justify-center">Registration</h1>
      <hr className="border border-slate-800" />
      <br />
      <label htmlFor="name">Name</label>
      <br />
      <input
        className="w-full p-2 outline-none bg-blue-50"
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
      />
      <br />
      <br />

      <label htmlFor="phone">Phone</label>
      <br />
      <input
        className="w-full p-2 outline-none bg-blue-50"
        type="tel"
        name="phone"
        pattern="[6-9]{1}[0-9]{9}"
        id="phone"
        placeholder="Enter Your Phone"
      />
      <br />
      <br />

      <label htmlFor="email">Email</label>
      <br />
      <input
        className="w-full p-2 outline-none bg-blue-50"
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
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
        placeholder="Enter Password"
      />
      <br />
      <br />

      <label htmlFor="confirm_password">Confirm Password</label>
      <br />
      <input
        className="w-full p-2 outline-none bg-blue-50"
        type="password"
        name="confirm_password"
        id="confirm_password"
        placeholder="Confirm Password"
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
      <button className="p-3 w-full bg-[#274897] text-white rounded-md hover:bg-[#274997e8]" type="button">
        Get OTP
      </button>
      <br />
      <br />
      <button onClick={backLogin} className="p-3 w-full bg-[#22A927] text-white rounded-md hover:bg-[#22a926e8]">Back To Login</button>
    </form>

  );
};

export default PMSSSRegistration;
