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
