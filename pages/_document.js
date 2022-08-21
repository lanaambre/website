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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9b9a0b" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#fff3d7" media="(prefers-color-scheme: light)"></meta>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
