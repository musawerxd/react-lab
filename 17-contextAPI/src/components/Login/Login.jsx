import React from 'react';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';

const Login = () => {

    const [email, SetEmail] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Fill it out, dont be lazy");
            return;
        }
        setUser({ email, password })
        console.log("Logged in as : ", email)
    }

    const { setUser } = useContext(UserContext)

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
                    <p className="text-zinc-400 mt-2 text-sm">Please enter your details to stay mid.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            type="email"
                            placeholder="musawer@example.com"
                            className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-zinc-300">Password</label>
                            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</a>
                        </div>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-all active:scale-[0.98]"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-8 text-center text-zinc-500 text-sm">
                    Don't have an account?
                    <a href="#" className="text-indigo-400 hover:underline ml-1">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;