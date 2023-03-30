'use client';

import styles from './page.module.css';
import React from 'react';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.info_personal}>
          <span className={styles.hello_text}>Xin chào 👋,</span>
          <h2 className={styles.intro_name_text}>
            Tôi là <i>Nguyễn Minh Châu</i> - Xuất bản 2001 😂
          </h2>
          <p className={styles.position_dev_text} style={{ color: '#bb0000' }}>
            Frontend Developer (Website, Mobile App)
          </p>
          <p className={styles.position_dev_text}>
            • Tôi tốt nghiệp Đại học Sư phạm Thành phố Hồ Chí Minh. Tôi hiện
            đang sinh sống và làm việc tại TP.HCM. <br />• Tôi có 1 năm kinh
            nghiệm trong việc phát triển web. Tôi hiện đang chuyên về ReactJS,
            NextJS, Typescript, Javascript, HTML, CSS, SASS, Bootstrap, Material
            UI, Ant Design, React Native, NodeJS, ExpressJS, MongoDB, MySQL,
            Git, Github, Vercel, v.v. <br />
          </p>
          <p className={styles.position_dev_text}>
            Rất vui khi được biết bạn 😊
          </p>
        </div>
        <div className={styles.image_personal}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url('/images/personal.png')` }}
          ></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
