import { useState } from 'react';
import { useRouter } from 'next/router';

const PMSSSRegistration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
    captcha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    // Add further form validation or submit logic here
    console.log(formData);
  };

  const backLogin = () => {
    // Navigate to login page
    router.push('/login'); // Assuming you have a login route
  };

  const getOtp = () => {
    // Logic to request OTP (possibly an API call)
    alert("OTP sent to your phone number.");
  };

  return (
    <form onSubmit={handleSubmit} className="w-[40rem] p-5 m-3 mx-auto border-2 rounded-lg shadow-lg bg-white">
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
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Your Name"
        required
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
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Your Phone"
        required
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
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Your Email"
        required
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
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password"
        required
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
        value={formData.confirm_password}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      <br />
      <br />

      {/* Captcha Section */}
      <label htmlFor="captcha">Captcha</label>
      <br />
      <div className="flex my-5 gap-4">
        <div className="w-1/2 p-3 bg-gray-700 text-white text-center">123</div>
        <input
          className="w-1/2 p-3 border-slate-600 border-2 rounded-md outline-none bg-blue-50"
          type="text"
          name="captcha"
          id="captcha"
          value={formData.captcha}
          onChange={handleChange}
          placeholder="Enter Captcha"
          required
        />
        <br />
        <br />
      </div>

      {/* Buttons */}
      <button
        className="p-3 w-full bg-[#274897] text-white rounded-md hover:bg-[#274997e8]"
        type="button"
        onClick={getOtp}
      >
        Get OTP
      </button>
      <br />
      <br />
      <button
        type="submit"
        className="p-3 w-full bg-[#22A927] text-white rounded-md hover:bg-[#22a926e8]"
      >
        Register
      </button>
      <br />
      <br />
      <button
        onClick={backLogin}
        type="button"
        className="p-3 w-full bg-[#22A927] text-white rounded-md hover:bg-[#22a926e8]"
      >
        Back To Login
      </button>
    </form>
  );
};

export default PMSSSRegistration;
