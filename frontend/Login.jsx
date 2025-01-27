import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import googleLogo from './assets/chrome.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/Login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/Home');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-6 text-center bg-blue-500 text-white py-2 rounded">
          Log In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-52 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mx-auto block"
          >
            Login
          </button>
        </form>
        <div className="my-4 text-center">
                  <Link
                    to="#"
                    className="flex items-center justify-center text-blue-500 hover:underline"
                  >
                    <img
                      src={googleLogo} 
                      alt="Google logo"
                      className="mr-2 w-5 h-5"
                    />
                    Continue with Google
                  </Link>
                </div>
      </div>
    </div>
  );
}

export default Login;