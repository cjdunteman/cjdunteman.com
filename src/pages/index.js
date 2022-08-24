import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { withPrefix } from "gatsby-link"
import { Link } from "gatsby"

export default function Home() {
  const { title, description } = useSiteMetadata();

  return (
    <>
        <p>
          I am interested in web development, cloud computing, artificial intelligence, blockchain technology, and investing! I also love to ski! ⛷️
        </p>
        <br />
        {/* <p>
          I am looking for internship opportunities for Fall '22. Please reach out if you think I'd be a good fit.
        </p> */}
        <br />
        <p>
          You can find me on <a id="twitter" className="text-purple" href="https://www.twitter.com/cjdunteman">Twitter</a>, scrutinize my code on <a id="github" className="text-purple" href="https://www.github.com/cjdunteman">GitHub</a>, or get in touch with me on <a id="linkedin" className="text-purple" href="https://www.linkedin.com/in/cjdunteman">LinkedIn</a>.
        </p>
        <br></br>
    </ >
  )
}
