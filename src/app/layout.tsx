import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './styles/globals.css';
export const metadata = {
  title: 'My Portfolio',
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
          <section className="content">{children}</section>
          <Footer />
        </div>
        <div className="noSupport">
          <div className="noSupport__content">
            <p className="noSupport__title">This device is not supported</p>
            <p className="noSupport__text">
              Please use Chrome, Firefox, Safari, Edge or Opera on PC.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
