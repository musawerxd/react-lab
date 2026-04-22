import React from 'react';
import UserContext from '../../context/UserContext'
import { useContext } from 'react';


function Dashboard() {

    const { user } = useContext(UserContext)
    if (!user) {
        return (<div className="min-h-screen bg-zinc-950 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-white text-2xl font-bold mb-4">Access Denied</h2>
                <p className="text-zinc-500 mb-6">You need to login to see how many bugs you've created.</p>
                <button className="text-indigo-400 hover:underline">Go to Login</button>
            </div>
        </div>)
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 flex">
            {/* Sidebar - because every "pro" app has one */}
            <aside className="w-64 border-r border-zinc-800 p-6 hidden md:block">
                <h1 className="text-xl font-bold text-white mb-10">Welcome {user.email?.split('@')[0] || "user"}</h1>
                <nav className="space-y-4">
                    <div className="text-indigo-400 bg-indigo-400/10 px-4 py-2 rounded-lg font-medium">Overview</div>
                    <div className="px-4 py-2 hover:text-white cursor-pointer transition-colors">Analytics</div>
                    <div className="px-4 py-2 hover:text-white cursor-pointer transition-colors">Projects</div>
                    <div className="px-4 py-2 hover:text-white cursor-pointer transition-colors">Settings</div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-white">Dashboard Overview</h2>
                        <p className="text-sm text-zinc-500">Welcome back, {user.email?.split('@')[0] || "user"}. Try not to break anything.</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                        M
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[
                        { label: 'Total Tasks', value: '42', change: '+12%' },
                        { label: 'Hours Coded', value: '1.5', change: '-80%' },
                        { label: 'Bugs Created', value: '99+', change: '+400%' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                            <p className="text-sm text-zinc-500">{stat.label}</p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                <span className={`text-xs ${i === 2 ? 'text-red-400' : 'text-emerald-400'}`}>{stat.change}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Section */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0">
                                <div className="flex gap-4 items-center">
                                    <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                                    <p className="text-sm">Updated `Login.jsx` to actually work</p>
                                </div>
                                <span className="text-xs text-zinc-600">2h ago</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard; 