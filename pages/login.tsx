import React, { useState } from 'react';
import Link from 'next/link';

import { useAuth } from '../context/Auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const { login, loginState } = useAuth();

  const handleLogin = () => {
    login({ email });
  };

  return (
    <div className="md:w-[50%] md:mx-auto py-4 px-4">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="email-address-icon"
      >
        Your Email
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={loginState.loading}
          id="email-address-icon"
          placeholder="name@dom.com"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <Link href="/login">
        <button
          className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 my-2 w-full
              border  border-slate-400 
              bg-blue-500
              text-white 
              hover:bg-blue-700
              hover:border-slate-700
              "
          disabled={loginState.loading}
          onClick={handleLogin}
        >
          <span>Send</span>
        </button>
      </Link>
      <div className="my-8 ">
        {loginState.checkEmail && (
          <div
            className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Check your email </span> for the login link!
          </div>
        )}
        {loginState.errorMessage && (
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Error:!</span> {loginState.errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
