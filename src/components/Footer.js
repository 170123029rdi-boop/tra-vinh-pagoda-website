import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
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
      
      <Link to="/admin" style={adminButtonStyle} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
        ⚙️ Quản trị
      </Link>
    </>
  );
};

const adminButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  backgroundColor: '#e74c3c',
  color: 'white',
  padding: '15px 25px',
  borderRadius: '50px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 6px 20px rgba(231, 76, 60, 0.4)',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export default Footer;
