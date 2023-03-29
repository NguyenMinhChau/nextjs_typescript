/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.text_footer}>
        © 2023 - Nguyễn Minh Châu • Frontend Developer
      </div>
    </div>
  );
}

export default Footer;
