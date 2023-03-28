import './styles/globals.css';
export const metadata = {
  title: 'Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          defer
          src="https://kit.fontawesome.com/cc3041f69f.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>Next.js TypeScript Header</h1>
          </div>
          <section className="content">{children}</section>
          <div className="footer">
            <h1>Next.js TypeScript Footer</h1>
          </div>
        </div>
      </body>
    </html>
  );
}
