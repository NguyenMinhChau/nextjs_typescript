/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import ImageCP from '../../../assets/images/logo.png';
import styles from './page.module.css';

const About: React.FC = () => {
  const searchParams = useSearchParams();
  return (
    <>
      <h1 className={styles.cl_red}>ABOUT PAGE</h1>
      <img src="/images/logo.png" alt="" title="" />
      <br />
      <Image
        src={ImageCP.src}
        alt=""
        title=""
        width={ImageCP.width}
        height={ImageCP.height}
      />
    </>
  );
};

export default About;
