import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" dir="ltr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index,follow,all,noodp"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
