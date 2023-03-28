/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header_container}>
      <Link href="/" className={styles.logo_container}>
        <img src="/svgs/User_Card_ID.svg" alt="" className={styles.logo} />
        <span className={styles.name_app}>Portfolio</span>
      </Link>
      <div className={styles.nav_container}>
        <Link className={styles.nav_link} href="#Hero">
          Hero
        </Link>
        <Link className={styles.nav_link} href="#Projects">
          Projects
        </Link>
        <Link className={styles.nav_link} href="#Technology">
          Technology
        </Link>
        <Link className={styles.nav_link} href="#Timeline">
          Timeline
        </Link>
        <Link className={styles.nav_link} href="#Acomplishment">
          Acomplishment
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
      </div>
    </div>
  );
}

export default Header;
