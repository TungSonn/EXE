import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-modern">
      <div className="footer__brand-modern">
        <div className="footer__logo-row-modern">
          <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png" alt="Car Logo" className="footer__logo-modern" />
          <span className="footer__brand-name-modern">Rentzy</span>
        </div>
        <div className="footer__slogan-modern">
          <span>Trải nghiệm thuê xe hiện đại, an toàn, tiện lợi.</span>
        </div>
        <button className="footer__cta-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Đặt xe ngay
        </button>
        <div className="footer__socials-modern">
          <button onClick={() => window.open('https://facebook.com', '_blank')}><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></button>
          <button onClick={() => window.open('https://instagram.com', '_blank')}><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></button>
          <button onClick={() => window.open('https://twitter.com', '_blank')}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="X" /></button>
          <button onClick={() => window.open('https://youtube.com', '_blank')}><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></button>
        </div>
      </div>
      <div className="footer__links-modern">
        <div>
          <div className="footer__col-title-modern">Dịch vụ</div>
          <ul>
            <li><button>Thuê xe tự lái</button></li>
            <li><button>Thuê xe có tài xế</button></li>
            <li><button>Thuê xe du lịch</button></li>
            <li><button>Thuê xe theo tháng</button></li>
          </ul>
        </div>
        <div>
          <div className="footer__col-title-modern">Loại xe</div>
          <ul>
            <li><button>Sedan</button></li>
            <li><button>SUV</button></li>
            <li><button>Hatchback</button></li>
            <li><button>Xe điện</button></li>
          </ul>
        </div>
        <div>
          <div className="footer__col-title-modern">Hỗ trợ</div>
          <ul>
            <li><button>Câu hỏi thường gặp</button></li>
            <li><button>Chính sách bảo mật</button></li>
            <li><button>Điều khoản sử dụng</button></li>
            <li><button>Liên hệ</button></li>
          </ul>
        </div>
      </div>
      <div className="footer__contact-modern">
        <div className="footer__contact-item-modern">
          <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Address" />
          <span>123 Le Van Hien, DaNang, Vietnam</span>
        </div>
        <div className="footer__contact-item-modern">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
          <span>support@rentzy.vn</span>
        </div>
        <div className="footer__contact-item-modern">
          <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" />
          <span>+84 987 654 321</span>
        </div>
        <div className="footer__apps-modern">
          <button onClick={() => window.open('https://apple.com/app-store', '_blank')}><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /></button>
          <button onClick={() => window.open('https://play.google.com/store', '_blank')}><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></button>
        </div>
      </div>
    </div>
    <div className="footer__bottom-modern">
      © {new Date().getFullYear()} Rentzy. All rights reserved.
    </div>
  </footer>
);

export default Footer;