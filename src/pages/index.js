import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { withPrefix } from "gatsby-link"
import { Link } from "gatsby"

export default function Home() {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <h1>I'm CJ Dunteman 👋
        <span><Link to="/blog" style={{ color: "violet" }}>Blog</Link></span>
        {/* <span style={{ color: "skyblue" }}>Projects</span> */}
      </h1>
      <br />
      <p>
        I'm a student at UW - Madison studying Computer Science. 🧑‍🎓
      </p>
      <br />
      <p>
        I am interested in web3, cryptocurrencies, blockchain, and economics! I also love to ski! ⛷️
      </p>
      <br />
      <p>
        I am looking for internship opportunities for Summer '22. Please reach out if you think I'd be a good fit. Here is my resume.
      </p>
      <br />
      <p>
        You can find me on <a id="twitter" href="https://www.twitter.com/cjdunteman">Twitter</a>, scrutinize my code on <a id="github" href="https://www.github.com/cjdunteman">GitHub</a>, or get in touch with me on <a id="linkedin" href="https://www.linkedin.com/in/cjdunteman">LinkedIn</a>.
      </p>
      <br></br>
      <p>This website is hosted on <a id="ipfs" href="https://ipfs.io/">IPFS</a> using Fleek and ENS!</p>
    </ >
  )
}
