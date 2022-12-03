export default async function Head() {
    return (
      <>
        <title>CJ Dunteman</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CJ Dunteman's personal website." />

        <meta property='og:title' content="CJ Dunteman" />
        <meta property='og:description' content="CJ's personal website" />
        <meta property='og:url' content={`https://cjdunteman.com`} />
        <meta
            property="og:image"
            content={`https://cjdunteman.com/api/og?title=${post.title}`}
        />
      </>
    )
  }
  