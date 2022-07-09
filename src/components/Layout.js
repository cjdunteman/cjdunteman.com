import React from "react"
import { Header } from './Header'

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto text-fontColor">
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout