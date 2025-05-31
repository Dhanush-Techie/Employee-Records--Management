import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router';
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [username, setUsername] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const authContext = useContext(AuthContext);
    const register = authContext?.register || (() => { alert('Register function not available. Please check AuthContext.Provider.'); });

    function handleSubmit(event) {
		event.preventDefault();
		register(email, password);
	}
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="bg-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center p-0 md:p-8 max-w-3xl w-full">
                {/* Illustration */}
                <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-blue-900  rounded-tl-[80px] rounded-br-[80px] p-10 w-1/2 h-full shadow-lg">
                    <div className="w-60 h-80 rounded-2xl shadow-md overflow-hidden flex items-center justify-center bg-gray-800">
                        <img
                            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg"
                            alt="Sign Up Illustration"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <h3 className="text-white text-2xl font-bold mt-6 text-center drop-shadow">
                        Welcome!
                    </h3>
                    <p className="text-gray-200 text-center mt-3 text-base opacity-90">
                        Join us and start your journey.
                    </p>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-purple-300">Sign Up</h2>
                    <p className="text-gray-400 text-center mb-6">Create your account to get started</p>
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-gray-300 mb-2 font-medium">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-purple-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        />
                    </div>
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
                    <div className="mb-6">
                        <label htmlFor="mobile" className="block text-gray-300 mb-2 font-medium">
                            Mobile Number
                        </label>
                        <input
                            id="mobile"
                            type="tel"
                            name="mobile"
                            value={mobilenumber}
                            placeholder="Enter your mobile number"
                            onChange={e => setMobilenumber(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-purple-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="dob" className="block text-gray-300 mb-2 font-medium">
                            Date of Birth
                        </label>
                        <input
                            id="dob"
                            type="date"
                            name="dob"
                            value={dateofbirth}
                            placeholder="Enter your date of birth"
                            onChange={e => setDateofbirth(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-purple-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-purple-800 hover:to-blue-800 transition-colors shadow-md"
                    >
                        Create New Account
                    </button>
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Already have an account? 
                        <Link to="/Signin" className="text-purple-300 font-medium hover:underline">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
