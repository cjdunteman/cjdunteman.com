import React from "react"
import Layout from "../components/layout"

function Http() {
  return (
    <p>This website is also hosted on <a id="ipfs" href="https://cjdunteman.on.fleek.co/">IPFS</a>! 😮</p>
  )
}

function Ipfs() {
  return (
    <p>You're currently on IPFS. The site is also available via <a id="http" href="https://cjdunteman.com">HTTPS</a></p>
  )
}

function Host() {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    const url = window.location.href;

    if (url === "https://cjdunteman.com" || url === "http://localhost:8000/") {
      return <Http />;
    }

    if (url === "https://cjdunteman.on.fleek.co") {
      return <Ipfs />;
    }
  }
  return null;
}

export default function Home() {

  return (
    <Layout>
      <h1>I'm CJ Dunteman 👋</h1>
      <br />
      <p>
        I'm a student at UW - Madison studying Computer Science. 🧑‍🎓
      </p>
      <br />
      <p>
        I am interested in web dev, blockchain, artificial intelligence, investing, and startups. I also love skiing. ⛷️
      </p>
      <br />
      <p>
        You can find me on <a id="twitter" href="https://www.twitter.com/cjdunteman">Twitter</a>, scrutinize my code on <a id="github" href="https://www.github.com/cjdunteman">GitHub</a>, or get in touch with me on <a id="linkedin" href="https://www.linkedin.com/in/cjdunteman">LinkedIn</a>.
      </p>
      <br></br>
      {<Host />}
    </Layout >
  )
}