import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossorigin="use-credentials"
        />
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
