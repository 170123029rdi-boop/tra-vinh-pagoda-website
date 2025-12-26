import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Về Trà Vinh</h4>
            <p>Trà Vinh là một tỉnh xinh đẹp nằm ở Đồng bằng sông Cửu Long, nổi tiếng với những ngôi chùa cổ kính và nền văn hóa đa dân tộc phong phú.</p>
          </div>
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#temples">Các ngôi chùa</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Thông tin liên hệ</h4>
            <ul>
              <li>📍 Thành phố Trà Vinh, Trà Vinh</li>
              <li>📞 (0294) 3 850 850</li>
              <li>📧 info@travinh.gov.vn</li>
              <li>🌐 www.travinh.gov.vn</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Mạng xã hội</h4>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#youtube">YouTube</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Trà Vinh Tourism. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
