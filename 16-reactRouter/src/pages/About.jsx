import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
function About() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                    About Us
                </h1>

                {/* Intro */}
                <p className="max-w-2xl text-center text-gray-600 text-lg mb-10">
                    We’re not just another basic website. We focus on creating clean,
                    modern, and user-friendly experiences that actually make sense.
                    No clutter. No confusion. Just good design.
                </p>

                {/* Cards Section */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">

                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                        <p className="text-gray-600">
                            To build simple, powerful, and clean digital experiences that help
                            people and businesses grow without unnecessary complexity.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-3">What We Do</h2>
                        <p className="text-gray-600">
                            We design and develop modern web applications using the latest
                            technologies like React and Tailwind — fast, responsive, and clean.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
                        <p className="text-gray-600">
                            Because we don’t overcomplicate things. We focus on what actually
                            matters — performance, usability, and good design.
                        </p>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-16 text-center max-w-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Built with passion ⚡
                    </h3>
                    <p className="text-gray-600">
                        This project is a step towards mastering modern web development.
                        Clean code, clean UI, and no shortcuts.
                    </p>
                </div>

            </div>
        </>
    )
}

export default About