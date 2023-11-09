import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossorigin="use-credentials"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="theme-color" content="#D1C1D7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Bibliomas"/>
        <title>Bibliomas</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
