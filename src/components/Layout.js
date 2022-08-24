import React from "react"
import { Nav } from './Nav'

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto text-dark">
            <Nav />
            <br></br>
            <main>{children}</main>
        </div>
    )
}

export default Layout