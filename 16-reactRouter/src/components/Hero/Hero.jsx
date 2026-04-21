
import React from 'react'

function Hero() {
    return (
        <section className="bg-gray-100 h-[80vh] flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl font-bold mb-4">
                Welcome to My Website
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                This is a simple hero section using Tailwind CSS
            </p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Get Started
            </button>
        </section>
    )
}

export default Hero
