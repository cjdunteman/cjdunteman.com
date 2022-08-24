import { Link } from "gatsby"
import React from "react"

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center py-6">
            <div>
                <h1 className="text-darkPurple">CJ</h1>
            </div>
            <div className="flex gap-4">
                <Link to="/" activeClassName="font-semibold">Home</Link>
                <Link to="/blog" activeClassName="font-semibold">Blog</Link>
                {/* <Link to="/projects">Project</Link> */}
            </div>
            <div className="">
                <a href="mailto: hello@cjdunteman.com">Contact</a>
            </div>
        </nav>
    )
}