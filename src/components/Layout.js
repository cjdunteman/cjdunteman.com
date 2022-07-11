import React from "react"
import { Header } from './Header'
import { Nav } from './Nav'

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto text-dark">
            <Header />
            <Nav />
            <main>{children}</main>
        </div>
    )
}

export default Layout