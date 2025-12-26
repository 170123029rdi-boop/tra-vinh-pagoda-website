import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          🏯 Khám phá Tỉnh Trà Vinh
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/#about">Giới thiệu</Link></li>
          <li><Link to="/#temples">Các ngôi chùa</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
