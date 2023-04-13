/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectItemCP from './ProjectItemCP';
import styles from './Projects.module.css';

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.projects_container}>
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Tiki Clone"
        linkWeb="https://tikidev.netlify.app/"
        bodyTitle="Công nghệ sử dụng trong dự án: HTML, CSS"
        bodyDescDetail="Sản phẩm này được viết bằng ngôn ngữ HTML + CSS để tạo nên giao diện gần giống như với trang chủ của sàn TMĐT Tiki"
        footerTextLeft="Tiki Clone"
        footerTextRight="Personal"
        imageFooterUrl="/images/tikiweb.png"
        imageFooterTitle="Tiki Clone"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="My Movie"
        linkWeb="https://mymovie-nguyenminhchau.vercel.app/"
        bodyTitle="Công nghệ sử dụng trong dự án: ReactJS, Rapid API"
        bodyDescDetail="Sản phẩm này được viết bằng framework ReactJS + Rapid API Youtube v3 để tạo nên giao diện xem video như youtube"
        footerTextLeft="My Movie"
        footerTextRight="Personal"
        imageFooterUrl="/images/mymovie.png"
        imageFooterTitle="My Movie"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Disney Clone"
        linkWeb="https://disney-clone-eecae.web.app/home"
        bodyTitle="Công nghệ sử dụng trong dự án: ReactJS, Firebase,..."
        bodyDescDetail="Disney Clone: Sản phẩm này chủ yếu là tạo nên một giao diện gần giống với trang chủ của Disney, rèn luyện kỹ năng chia bố cục bằng việc sử dụng flex-box. Sử dụng firebase để thiết lập cho việc đăng nhập. Disney Clone sử dụng framework Reactjs để phát triển, sử dụng một dịch vụ cơ sở dữ liệu được hoạt động ở trên nền tảng đám mây là firebase và các thư viện hỗ trợ khác."
        footerTextLeft="Disney Clone"
        footerTextRight="Personal"
        imageFooterUrl="/images/disneyweb.png"
        imageFooterTitle="Disney Clone"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Weather Clone"
        linkWeb="https://nguyenminhchau.github.io/weather/"
        bodyTitle="Công nghệ sử dụng trong dự án: HTML, CSS, Javascript."
        bodyDescDetail="Sản phẩm này dùng để xem thời tiết của các thành phố trên thế giới với độ chính xác khá cao. Công nghệ được dùng bao gồm ngôn ngữ HTML + CSS và Javascript. Có thao tác với API để thực hiện lấy dữ liệu"
        footerTextLeft="Weather Clone"
        footerTextRight="Personal"
        imageFooterUrl="/images/weather.png"
        imageFooterTitle="Weather Clone"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="NotePad"
        linkWeb="https://reactjs-nmc.netlify.app/"
        bodyTitle="Công nghệ sử dụng trong dự án: ReactJS, Bootstrap"
        bodyDescDetail="Sản phầm này giúp người dùng có thể thêm/sửa/xóa, sắp xếp (cũ nhất, mới nhất), tìm kiếm các công việc mà người dùng đã/ đang làm/thực hiện xong. Công nghệ được sử dụng là framework Reactjs, Bootstrap 4"
        footerTextLeft="NotePad"
        footerTextRight="Personal"
        imageFooterUrl="/images/notepad.png"
        imageFooterTitle="NotePad"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Website e-commerce"
        linkWeb="https://nguyenminhchau.site/"
        bodyTitle="Công nghệ sử dụng trong dự án: ReactJS, NodeJS, ExpressJS, MongoDB,..."
        bodyDescDetail="Sản phẩm này được viết bằng sự kết hợp của 2 framework ReactJs (frontend) và ExpressJS (backend) cùng với các thư viện hỗ trợ khác. Database sử dụng trong dự án này là Mongodb. Website này có các chức năng như: đăng kí/đăng nhập/quên mật khẩu/đổi mật khẩu/xác thực email, tìm kiếm sản phẩm theo nhà sản xuất/giá, phân quyền user/admin, chat bot tự động, mua hàng và thanh toán trực tuyến (stripe, paypal), email marketing, email xác thực đơn hàng,..."
        footerTextLeft="Website e-commerce"
        footerTextRight="Personal"
        imageFooterUrl="/images/ecommerceweb.png"
        imageFooterTitle="Website e-commerce"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Linkedln Clone"
        linkWeb="https://linkedln-clone-5568b.web.app/"
        bodyTitle="Công nghệ sử dụng trong dự án: ReactJS, Redux, Redux-Toolkit, Firebase,..."
        bodyDescDetail="Sản phẩm này có các chức năng như: đăng ký/ đăng nhập tài khoản người dùng (bằng email hoặc bằng google); tạo mới bài viết (với hình ảnh, video); Embeded post; các chức năng như bày tỏ cảm xúc, bình luận, chia sẻ và gửi cho bạn thân sẽ được tiếp tực và phát triển trong tương lai. Công nghệ được sử dụng bao gồm framework Reactjs, Redux và Redux-Toolkit và sử dụng một dịch vụ cơ sở dữ liệu được hoạt động ở trên nền tảng đám mây là firebase và các thư viện hỗ trợ khác"
        footerTextLeft="Linkedln Clone"
        footerTextRight="Personal"
        imageFooterUrl="/images/linkedlnweb.png"
        imageFooterTitle="Linkedln Clone"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Messenger Clone Simple"
        linkWeb="https://messenger-app-090622.web.app/"
        bodyTitle="Công nghệ sử dụng trong dự án: ReactJS, Firebase,..."
        bodyDescDetail="Sản phẩm này có các chức năng như: đăng nhập tài khoản người dùng (bằng bằng google). Vì đơn giản nên chỉ có thể trò chuyện giữa 2 người với nhau 😂 Công nghệ được sử dụng bao gồm framework Reactjs và sử dụng một dịch vụ cơ sở dữ liệu được hoạt động ở trên nền tảng đám mây là firebase và các thư viện hỗ trợ khác"
        footerTextLeft="Messenger Clone Simple"
        footerTextRight="Personal"
        imageFooterUrl="/images/messengersimple.png"
        imageFooterTitle="Messenger Clone Simple"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="ShopCoin USA (Android app)"
        linkWeb="https://play.google.com/store/apps/details?id=com.shopcoin"
        bodyTitle="Công nghệ sử dụng trong dự án: React Native, socket.io,..."
        bodyDescDetail="Sản phẩm này có các chức năng như: đăng nhập/đăng ký tài khoản người dùng, đổi mật khẩu, giao dịch,... Ứng dụng Shop Coin USA là ứng dụng dịch vụ tài chính Thông minh để đầu tư và tích lũy, với sự phát triển của nền tảng công nghệ mạnh mẽ giúp tài khoản giao dịch an toàn và hiệu quả. Với ứng dụng Shop Coin USA, bạn có thể lưu trữ, gửi, nhận, mua và giao dịch tiền điện tử một cách dễ dàng với trải nghiệm người dùng mượt mà và trực quan!"
        footerTextLeft="ShopCoin USA (Android app)"
        footerTextRight="Team"
        imageFooterUrl="/images/shopcoin.png"
        imageFooterTitle="ShopCoin USA (Android app)"
        // dataAos="fade-down"
      />
      <ProjectItemCP
        imageHeaderUrl="/svgs/logo_new.svg"
        imageHeaderTitle="Provident Fund (Android app)"
        linkWeb="https://play.google.com/store/apps/details?id=com.mobiletransactions"
        bodyTitle="Công nghệ sử dụng trong dự án: React Native,..."
        bodyDescDetail="Sản phẩm này có các chức năng như: đăng nhập/đăng ký tài khoản người dùng, đổi mật khẩu, giao dịch,... App quỹ tiết kiệm do công ty Aiking Investment sản xuất là một ứng dụng di động cho phép người dùng tiết kiệm và đầu tư tiền của mình vào các quỹ đầu tư khác nhau. Với ứng dụng này, người dùng có thể lựa chọn các quỹ đầu tư với mức độ rủi ro khác nhau, từ những quỹ đầu tư an toàn đến những quỹ đầu tư có rủi ro cao hơn nhưng có tiềm năng sinh lợi cao hơn."
        footerTextLeft="Provident Fund (Android app)"
        footerTextRight="Team"
        imageFooterUrl="/images/provident.png"
        imageFooterTitle="Provident Fund (Android app)"
        // dataAos="fade-down"
      />
    </div>
  );
}

export default Projects;
