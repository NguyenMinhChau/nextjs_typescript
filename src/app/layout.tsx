'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/globals.css';
import React, { useEffect, Suspense } from 'react';
import LazyLoader from './components/LazyLoader/LazyLoader';
export const metadata = {
  title: 'Trang chủ • Nguyễn Minh Châu',
};

const LazyHeaderCP = React.lazy(() => import('./components/Header/Header'));
const LazyFooterCP = React.lazy(() => import('./components/Footer/Footer'));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          defer
          src="https://kit.fontawesome.com/cc3041f69f.js"
          crossOrigin="anonymous"
        ></script>
        <title>Trang chủ • Nguyễn Minh Châu</title>
      </head>
      <body>
        <div className="container">
          <LazyLoader>
            <LazyHeaderCP />
          </LazyLoader>
          <div className="content">{children}</div>
          <LazyLoader>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <LazyFooterCP />
          </LazyLoader>
        </div>
      </body>
    </html>
  );
}
