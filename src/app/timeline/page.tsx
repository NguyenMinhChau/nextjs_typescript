'use client';
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import styles from './Timeline.module.css';
import TimeLineItemCP from './timeLineItem';

function TimelinePage() {
  return (
    <div className={styles.timeline_container} data-aos="zoom-in">
      <Timeline position="alternate">
        <TimeLineItemCP
          timer="2016 - 2019"
          nameIcon="fa-solid fa-school"
          typographyTitle="Trường THPT Tân Hiệp"
          typography="Tân Lý Tây,Châu Thành,Tiền Giang"
        />
        <TimeLineItemCP
          timer="2019 - 2023"
          nameIcon="fa-solid fa-university"
          typographyTitle="Đại học Sư phạm TPHCM"
          typography="280 An Dương Vương,P4,Q5,TPHCM"
          colorIcon="primary"
        />
        <TimeLineItemCP
          timer="2020 - 2021"
          nameIcon="fa-solid fa-dove"
          typographyTitle="Vừa học, vừa làm"
          typography="Circle K TPHCM"
          colorIcon="primary"
          variantIcon="outlined"
        />
        <TimeLineItemCP
          timer="2020 - 2021"
          nameIcon="fa-solid fa-dove"
          typographyTitle="Tham gia các CLB của trường"
          typography="HCMUE"
          colorIcon="primary"
        />
        <TimeLineItemCP
          timer="2021 - 2022"
          nameIcon="fa-solid fa-chalkboard-user"
          typographyTitle="Tham gia NCKH cấp Khoa"
          typography="Tích hợp elasticsearch vào truy vấn thông tin y tế bằng Tiếng Việt"
          colorIcon="secondary"
        />
        <TimeLineItemCP
          timer="2021 - 2022"
          nameIcon="fa-solid fa-dove"
          typographyTitle="Tham gia các diễn đàn, hội thảo NCKH tại trường"
          typography="HCMUE"
          colorIcon="primary"
        />
        <TimeLineItemCP
          timer="9/2022 - 12/2022"
          nameIcon="fa-solid fa-chalkboard"
          typographyTitle="Thực tập sinh vị trí Frontend Devloper"
          typography="Aiking Investments"
          colorIcon="primary"
          variantIcon="outlined"
        />
        <TimeLineItemCP
          timer="1/2023 - 3/2023"
          nameIcon="fa-solid fa-code"
          typographyTitle="Freelancer + Tự học tại nhà"
          typography="Tự học tại nhà"
          colorIcon="primary"
        />
      </Timeline>
    </div>
  );
}

export default TimelinePage;
