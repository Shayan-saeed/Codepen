import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Codepen</title>
        <meta name="description" content="This is an awesome app!" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
