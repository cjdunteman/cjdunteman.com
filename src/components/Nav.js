import { Link } from "gatsby"
import React from "react"

export const Nav = () => {
    return (
        <nav className="flex justify-between">
            <h1 className="flex weight-bold">CJ.</h1>
            <div className="flex gap-4">
                <Link to="/" activeClassName="font-semibold">Home</Link>
                <Link to="/blog" activeClassName="font-semibold">Blog</Link>
                {/* <Link to="/projects">Project</Link> */}
            </div>
            <div className="flex gap-4">
                <a href="#">Test</a>
            </div>
        </nav>
    )
}