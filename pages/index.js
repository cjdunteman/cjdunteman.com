import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex-col max-w-3xl mx-auto">
        <p>
          I am interested in web development, cloud computing, artificial
          intelligence, blockchain technology, and investing! I also love to
          ski! ⛷️
        </p>
        <br />
        <p>
          You can find me on{" "}
          <a
            id="twitter"
            className="text-purple"
            href="https://www.twitter.com/cjdunteman"
          >
            Twitter
          </a>
          , scrutinize my code on{" "}
          <a
            id="github"
            className="text-purple"
            href="https://www.github.com/cjdunteman"
          >
            GitHub
          </a>
          , or get in touch with me on{" "}
          <a
            id="linkedin"
            className="text-purple"
            href="https://www.linkedin.com/in/cjdunteman"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </>
  );
}
