import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './styles/globals.css';
export const metadata = {
  title: 'Trang chủ • Nguyễn Minh Châu',
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
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
