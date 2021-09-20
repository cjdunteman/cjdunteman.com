import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { withPrefix } from "gatsby-link"

function Http() {
  return (
    <p>This website is also hosted on <a id="ipfs" href="https://cjdunteman.eth.link">IPFS</a>! 😮</p>
  )
}

function Ipfs() {
  return (
    <p>This version of the site is hosted on <a id="ipfs" href="https://ipfs.io/">IPFS</a> using Fleek and ENS! The site is also available via <a id="http" href="https://cjdunteman.com">HTTPS</a></p>
  )
}

function Host() {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    console.log("in browser")
    const url = window.location.href;

    if (url === "https://cjdunteman.com/" || url === "http://localhost:8000/") {
      return <Http />;
    }

    if (url === "https://cjdunteman.eth.link" || url === "https://cjdunteman.eth") {
      return <Ipfs />;
    }
  }
  return null;
}

export default function Home() {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <h1>I'm CJ Dunteman 👋</h1>
      <br />
      <p>
        I'm a student at UW - Madison studying Computer Science. 🧑‍🎓
      </p>
      <br />
      <p>
        I am interested in blockchain, cybersecurity, web development, machine learning, investing, and startups. I also love to ski! ⛷️
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
      {<Host />}
    </ >
  )
}
