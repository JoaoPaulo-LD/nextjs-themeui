import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <title>Rocketseat Login</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument