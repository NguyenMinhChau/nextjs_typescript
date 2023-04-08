/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styles from './Projects.module.css';

type ProjectItemCPProps = {
  imageHeaderUrl: string;
  imageHeaderTitle?: string;
  linkWeb: string;
  bodyTitle: string;
  bodyDescDetail?: string;
  footerTextLeft?: string;
  footerTextRight?: string;
  imageFooterUrl: string;
  imageFooterTitle?: string;
  dataAos?: string;
};

function ProjectItemCP({
  imageHeaderUrl,
  imageHeaderTitle,
  linkWeb,
  bodyTitle,
  bodyDescDetail,
  footerTextLeft,
  footerTextRight,
  imageFooterUrl,
  imageFooterTitle,
  dataAos,
}: ProjectItemCPProps) {
  return (
    <div className={styles.project_item_container} data-aos={dataAos}>
      <div className={styles.header}>
        <img
          src={imageHeaderUrl}
          alt={imageHeaderTitle}
          className={styles.header_image}
        />
        <Link href={linkWeb} target={'_blank'} className={styles.header_link}>
          <span>Xem</span>{' '}
          <span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </Link>
      </div>
      <div className={styles.body}>
        <p className={styles.body_desc} title={bodyTitle}>
          {bodyTitle}
        </p>
        <p className={styles.body_desc_detail} title={bodyDescDetail}>
          {bodyDescDetail && `Mô tả: ${bodyDescDetail}`}
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.footer_desc}>
          {footerTextLeft} • {footerTextRight}
        </p>
        <img
          src={imageFooterUrl}
          alt={imageFooterTitle}
          className={styles.footer_image}
        />
      </div>
    </div>
  );
}

export default ProjectItemCP;
