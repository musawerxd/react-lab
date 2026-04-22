import React from 'react';

function Todo() {
    const dummyTasks = [
        "Finish homework (unlikely)",
        "Stop procrastinating",
        "Actually learn React"
    ];

    return (
        <main className="min-h-[70vh] bg-[#212121] p-10">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">My Mid To-Do List</h2>

                <div className="space-y-3">
                    {dummyTasks.map((task, i) => (
                        <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="h-5 w-5 rounded-full border-2 border-indigo-50 mr-3"></div>
                            <p className="text-slate-600">{task}</p>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                    Add Task
                </button>
            </div>
        </main>
    );
}

export default Todo;