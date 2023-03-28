'use client';

import styles from './page.module.css';
import React from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';
import Acomplishments from './components/Acomplishments/Acomplishments';

function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </main>
  );
}

export default Home;
