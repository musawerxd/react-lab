import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

function layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default layout


