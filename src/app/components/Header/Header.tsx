/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  const handleClickMenu = () => {
    handleShow();
    resizeWindow();
  };
  const resizeWindow = () => {
    if (
      window.innerWidth <= 600 ||
      (window.innerWidth > 600 && window.innerWidth <= 960)
    ) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    resizeWindow();
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);
  return (
    <div className={styles.header_container}>
      <Link href="/" className={styles.logo_container}>
        <img src="/svgs/logo_web_50x50.svg" alt="" className={styles.logo} />
      </Link>
      <div
        className={`${styles.nav_container} ${
          isShow ? styles.show : styles.hide
        }`}
      >
        <Link
          className={styles.nav_link}
          onClick={handleClickMenu}
          href="/skills"
        >
          Kỹ năng
        </Link>
        <Link
          className={styles.nav_link}
          onClick={handleClickMenu}
          href="/projects"
        >
          Dự án
        </Link>
        <Link
          className={styles.nav_link}
          onClick={handleClickMenu}
          href="/technologies"
        >
          Công nghệ
        </Link>
        <Link
          className={styles.nav_link}
          onClick={handleClickMenu}
          href="/timeline"
        >
          Mốc thời gian
        </Link>
        <Link
          className={styles.nav_link}
          onClick={handleClickMenu}
          href="/certificates"
        >
          Chứng chỉ
        </Link>
        <Link
          className={styles.nav_link}
          onClick={handleClickMenu}
          href="https://myblognmc.netlify.app/"
          target="_blank"
        >
          Tài liệu
        </Link>
      </div>
      <div className={styles.social_container}>
        <Link
          className={`${styles.github_social} ${styles.social_icon}`}
          href="https://github.com/NguyenMinhChau"
          target={'_blank'}
        >
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link
          className={`${styles.linkedln_social} ${styles.social_icon}`}
          href="https://www.linkedin.com/in/nguyen-minh-chau-87184320b/"
          target={'_blank'}
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link
          className={`${styles.facebook_social} ${styles.social_icon}`}
          href="https://www.facebook.com/nguyenminhchau2001"
          target={'_blank'}
        >
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link
          className={`${styles.phone_social} ${styles.social_icon}`}
          href="tel:0398365404"
          target={'_parent'}
        >
          <i className="fa-solid fa-phone"></i>
        </Link>
        <Link
          className={`${styles.email_social} ${styles.social_icon}`}
          href="mailto:chaunmtech@gmail.com"
          target={'_parent'}
        >
          <i className="fa-solid fa-envelope"></i>
        </Link>
        <div onClick={handleShow} className={styles.icon_menu_container}>
          {isShow ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
