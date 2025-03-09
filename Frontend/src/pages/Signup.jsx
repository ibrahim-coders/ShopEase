import { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdAddPhotoAlternate } from 'react-icons/md';
import imageUpload from '../components/UploadeImage/ImageUploade';

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image Upload
  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (file) {
      const image = await imageUpload(file);
      setData(prev => ({ ...prev, image: image }));
    }
  };

  // Click icon to trigger file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  // Form Submit
  const handleSubmit = e => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password) {
      alert('সব ইনপুট পূরণ করুন!');
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup Data:', data);
  };

  return (
    <>
      <div className="text-center mt-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#009689]">
          Shop<span className="text-orange-600">Ease</span>
        </h2>
      </div>

      <div className="flex items-center justify-center my-4 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden w-full max-w-4xl shadow-lg rounded-lg">
          {/* Left Side - Image */}
          <div className="hidden md:block my-auto">
            <img
              src="https://media.istockphoto.com/id/2159075829/photo/cybersecurity-concept-user-privacy-security-and-encryption-secure-internet-access-future.jpg?s=612x612&w=0&k=20&c=8xkNBbaHu45Un0WLA5_9SNYhif9xkPDejnxqdOYN1GA="
              alt="E-commerce"
              className="w-full h-96 object-cover rounded-md"
            />
          </div>

          {/* Right Side - Signup Form */}
          <div className="px-6 md:p-8 flex flex-col justify-center bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image Upload */}
              <div className="flex justify-center items-center relative">
                <div
                  className="relative border border-orange-600 rounded-full overflow-hidden w-24 h-24 flex items-center justify-center cursor-pointer"
                  onClick={triggerFileInput}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  {data.image ? (
                    <img
                      src={data.image}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <MdAddPhotoAlternate className="w-12 h-12 text-orange-600 opacity-50 hover:opacity-100 transition-all duration-200" />
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                />
                <span
                  className="absolute right-4 top-[2.4rem] cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter your confirm password"
                  className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                />
                <span
                  className="absolute right-4 top-[2.4rem] cursor-pointer text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              {/* Signup Button */}
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:scale-105 transition-all cursor-pointer font-semibold">
                Signup
              </button>
            </form>

            {/* Login Redirect */}
            <p className="text-sm mt-4 text-center text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-orange-500 hover:underline ml-1"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
