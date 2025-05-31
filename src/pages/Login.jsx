
import React, { useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);
    const login = authContext?.login || (() => { alert('Login function not available. Please check AuthContext.Provider.'); });

	function handleSubmit(event) {
		event.preventDefault();
		login(email, password);
	}

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="bg-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center p-0 md:p-8 max-w-3xl w-full">
                {/* Illustration */}
                <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-blue-900  rounded-tl-[80px]  rounded-br-[80px] p-10 w-1/2 h-full shadow-lg">
                    <div className="w-60 h-80 rounded-2xl shadow-md overflow-hidden flex items-center justify-center bg-gray-800">
                        <img
                            src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?semt=ais_hybrid&w=740"
                            alt="Sign In Illustration"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <h3 className="text-white text-2xl font-bold mt-6 text-center drop-shadow">
                        Welcome Back!
                    </h3>
                    <p className="text-gray-200 text-center mt-3 text-base opacity-90">
                        Sign in to continue your journey.
                    </p>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-purple-300">Sign In</h2>
                    <p className="text-gray-400 text-center mb-6">Enter your credentials to access your account</p>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-purple-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-300 mb-2 font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-purple-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-purple-800 hover:to-blue-800 transition-colors shadow-md"
                    >
                        Sign In
                    </button>
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Don't have an account? 
                        <Link to="/Signup" className="text-purple-300 font-medium hover:underline">
                            Sign up
                        </Link>
                        {/* <a href="../pages/Signup" className="text-purple-300 font-medium hover:underline">Sign Up</a> */}
                    </p>
                </form>
            </div>
        </div>
    );
}
