import React from 'react';
import CertificateItemCP from './CertificateItemCP';
import styles from './Certificates.module.css';

function Certificates() {
  return (
    <div className={styles.certificates_container}>
      <CertificateItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Certificate"
        linkWeb="https://drive.google.com/file/d/15t36-w-L33WwEZNPcRdTRMU_HfNXe6J8/view?usp=sharing"
        bodyTitle="Agile & Scrum Training"
        footerTextLeft="Certificate"
        footerTextRight="DEK Technologies"
        imageFooterUrl="/images/dekagile.png"
        imageFooterTitle="Certificate"
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
      />
    </div>
  );
}

export default Certificates;