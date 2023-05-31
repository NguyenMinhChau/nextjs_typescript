'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CertificateItemCP from './CertificateItemCP';
import styles from './Certificates.module.css';

function Certificates() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.certificates_container}>
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/17WrmB8z3vmI-4b6kfpzROR8kfQvLDdaP/view?usp=drive_link"
        bodyTitle="Nghiên cứu khoa học cấp Khoa"
        footerTextLeft="Certificate"
        footerTextRight="HCMUE"
        imageFooterUrl="/images/Bang_khen_NCKH.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1p6_1OSND-s5yH8tc9He9oLqqOQ4o57Mu/view?usp=drive_link"
        bodyTitle="Sinh viên xuất sắc 2021-2022"
        footerTextLeft="Certificate"
        footerTextRight="HCMUE"
        imageFooterUrl="/images/Bang_khen_SVXS.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/15t36-w-L33WwEZNPcRdTRMU_HfNXe6J8/view?usp=sharing"
        bodyTitle="Agile & Scrum Training"
        footerTextLeft="Certificate"
        footerTextRight="DEK Technologies"
        imageFooterUrl="/images/dekagile.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1aTMZrHi2OK5SmFYjQM1FTxYSb6JAiLzp/view?usp=sharing"
        bodyTitle="Javascript cơ bản"
        footerTextLeft="Certificate"
        footerTextRight="Codelearn"
        imageFooterUrl="/images/codelearnjscoban.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1XdfqHM87_EoOx6ZDxt1xZ4zH922q5PQ4/view?usp=sharing"
        bodyTitle="Javascript cơ bản"
        footerTextLeft="Certificate"
        footerTextRight="F8"
        imageFooterUrl="/images/f8jsbasic.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1byNwrCovouRYnVPE-B4PcPQRVHNqEmyA/view?usp=sharing"
        bodyTitle="Responsive Web"
        footerTextLeft="Certificate"
        footerTextRight="FreeCodeCamp"
        imageFooterUrl="/images/freecodecampresponsiveweb.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1mQGaR3VRjUgWz6TX-xhmdg7mJ677ziIt/view?usp=sharing"
        bodyTitle="Responsive Web"
        footerTextLeft="Certificate"
        footerTextRight="F8"
        imageFooterUrl="/images/f8responsive.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/18X6_I9AAQKk_O6kPYL6RfqxCKkgwEm4F/view?usp=sharing"
        bodyTitle="HTML CSS"
        footerTextLeft="Certificate"
        footerTextRight="F8"
        imageFooterUrl="/images/f8htmlcss.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1l2hfMMf3JkYaAxHSJuAwkiDfxOzYiOel/view?usp=sharing"
        bodyTitle="Javascript nâng cao"
        footerTextLeft="Certificate"
        footerTextRight="F8"
        imageFooterUrl="/images/f8jsadvance.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/1u0eU70Z2VMEDNiUmUB3_gNLc6CZj-lAa/view?usp=sharing"
        bodyTitle="Reactjs"
        footerTextLeft="Certificate"
        footerTextRight="F8"
        imageFooterUrl="/images/f8reactjs.png"
        imageFooterTitle="Certificate"
        // dataAos="fade-down"
      />
    </div>
  );
}

export default Certificates;
