import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import { Outlet } from 'react-router'

export default function Home() {
    return (
        <>
            < Header />
            <Hero />
            <outlet />
            < footer />

        </>
    )
}
