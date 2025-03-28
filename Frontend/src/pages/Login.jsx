import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosePublic from '../Api';
import toast from 'react-hot-toast';
import AuthContext from '../Context/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosePublic();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: '', password: '' });
  const fetchDetails = useContext(AuthContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submitting data:', data);
    try {
      const userData = await axiosPublic.post('/api/login', data);
      console.log('Response from server:', userData);

      navigate('/');
      toast.success('Login Successfully');
      fetchDetails();
    } catch (error) {
      console.log('Error during login:', error);
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="text-center mt-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#009689]">
          Shop<span className="text-orange-600">Ease</span>
        </h2>
      </div>
      <div className="flex items-center justify-center my-4 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden w-full max-w-4xl">
          {/* Left Side - Image */}
          <div className="hidden md:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="E-commerce"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="px-4 md:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-orange-600 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
              </div>
              <div className="mb-1.5 relative">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                  name="password"
                  value={data.password}
                  placeholder="enter your password"
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border-orange-600 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
                <span>
                  {showPassword ? (
                    <FaEye
                      className="absolute right-4 top-10 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="absolute right-4 top-10 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </span>
              </div>
              <Link
                to={'/forget-password'}
                className="pb-3 block w-fit ml-auto hover:underline hover:text-orange-500"
              >
                Forget Password
              </Link>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:scale-105 transition-all cursor-pointer">
                Login
              </button>
            </form>
            <p className="text-sm mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-orange-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
