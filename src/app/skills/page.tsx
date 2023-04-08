/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills_container}>
      <div className={`${styles.skill_item_container}`} data-aos="fade-right">
        <p className={styles.skill_name}>Frontend</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
            width="50px"
            title="HTML5"
            className={styles.skill_item}
            alt="HTML5"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
            width="50px"
            title="CSS"
            className={styles.skill_logo}
            alt="CSS"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png"
            width="50px"
            title="SASS"
            className={styles.skill_logo}
            alt="SASS"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
            width="50px"
            title="Bootstrap"
            className={styles.skill_logo}
            alt="Bootstrap"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
            width="50px"
            title="Tailwind CSS"
            className={styles.skill_logo}
            alt="Tailwind CSS"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"
            width="50px"
            title="Material UI"
            className={styles.skill_logo}
            alt="Material UI"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/190887795-99cb0921-e57f-430b-a111-e165deedaa36.png"
            width="50px"
            title="Ant Design"
            className={styles.skill_logo}
            alt="Ant Design"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
            width="50px"
            title="Javascript"
            className={styles.skill_logo}
            alt="Javascript"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
            width="50px"
            title="TypeScript"
            className={styles.skill_logo}
            alt="TypeScript"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            width="50px"
            title="ReactJS"
            className={styles.skill_logo}
            alt="ReactJS"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png"
            width="50px"
            title="Redux"
            className={styles.skill_logo}
            alt="Redux"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png"
            width="50px"
            title="Angular"
            className={styles.skill_logo}
            alt="Angular"
          />
          <img
            src="/images/nextjs_logo.png"
            width="50px"
            title="NextJS"
            className={styles.skill_logo}
            alt="NextJS"
          />
        </div>
      </div>
      <div className={`${styles.skill_item_container}`} data-aos="fade-left">
        <p className={styles.skill_name}>Backend</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
            width="50px"
            className={styles.skill_logo}
            title="NodeJS"
            alt="NodeJS"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
            width="50px"
            className={styles.skill_logo}
            title="ExpressJS"
            alt="ExpressJS"
          />
        </div>
      </div>
      <div className={`${styles.skill_item_container}`} data-aos="fade-right">
        <p className={styles.skill_name}>Mobile</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            width="50px"
            className={styles.skill_logo}
            title="React Native"
            alt="React Native"
          />
        </div>
      </div>
      <div className={`${styles.skill_item_container}`} data-aos="fade-left">
        <p className={styles.skill_name}>Database</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
            width="50px"
            className={styles.skill_logo}
            title="MongoDB"
            alt="MongoDB"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
            width="50px"
            className={styles.skill_logo}
            title="MySQL"
            alt="MySQL"
          />
        </div>
      </div>
      <div className={`${styles.skill_item_container}`} data-aos="fade-right">
        <p className={styles.skill_name}>Services</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
            width="50px"
            className={styles.skill_logo}
            title="Git Controls"
            alt="Git Controls"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
            width="50px"
            className={styles.skill_logo}
            title="Github"
            alt="Github"
          />
        </div>
      </div>
      <div className={`${styles.skill_item_container}`} data-aos="fade-left">
        <p className={styles.skill_name}>Tools</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
            width="50px"
            className={styles.skill_logo}
            title="VsCode"
            alt="VsCode"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
            width="50px"
            className={styles.skill_logo}
            title="Postman"
            alt="Postman"
          />
          <img
            src="https://camo.githubusercontent.com/c9ed84fb9911274d64afe679daa14b3d3995a235f6d4237c2d605df4476d2a72/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f66696c657a696c6c612f66696c657a696c6c612d706c61696e2e737667"
            width="50px"
            className={styles.skill_logo}
            title="FileZilla"
            alt="FileZilla"
          />
        </div>
      </div>
      <div className={`${styles.skill_item_container}`} data-aos="fade-right">
        <p className={styles.skill_name}>Others</p>
        <div className={styles.skill_list}>
          <img
            src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png"
            width="50px"
            className={styles.skill_logo}
            title="Jira"
            alt="Jira"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"
            width="50px"
            className={styles.skill_logo}
            title="npm"
            alt="npm"
          />
          <img
            src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png"
            width="50px"
            className={styles.skill_logo}
            title="Yarn"
            alt="Yarn"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
