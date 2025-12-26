import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const TempleDetail = () => {
  const { id } = useParams();
  const { pagodas } = useContext(DataContext);
  
  const temple = pagodas.find(p => p._id === parseInt(id));
  
  if (!temple) {
    return (
      <div className="container">
        <h2>Không tìm thấy thông tin chùa</h2>
        <Link to="/">← Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="temple-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Trang chủ</Link> > 
          <Link to="/#temples">Các ngôi chùa</Link> > 
          <span>{temple.name}</span>
        </nav>
        
        <div className="temple-header">
          <h1>{temple.name}</h1>
          <div className="temple-meta">
            <span className="category">🏯 {temple.category}</span>
            <span className="district">📍 {temple.district}</span>
          </div>
        </div>

        <div className="temple-content">
          <div className="temple-image">
            <img src={temple.image} alt={temple.name} />
          </div>
          
          <div className="temple-info">
            <div className="info-section">
              <h3>📍 Thông tin cơ bản</h3>
              <p><strong>Địa chỉ:</strong> {temple.address}</p>
              <p><strong>Loại:</strong> {temple.category}</p>
              <p><strong>Giờ mở cửa:</strong> {temple.visitingHours}</p>
              <p><strong>Phí vào cửa:</strong> {temple.entryFee}</p>
            </div>

            <div className="info-section">
              <h3>📖 Mô tả</h3>
              <p>{temple.description}</p>
            </div>

            <div className="info-section">
              <h3>🏛️ Lịch sử</h3>
              <p>{temple.history}</p>
            </div>

            <div className="info-section">
              <h3>⭐ Đặc điểm nổi bật</h3>
              <ul>
                {temple.features && temple.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {temple.latitude && temple.longitude && (
              <div className="info-section">
                <h3>🗺️ Vị trí</h3>
                <p>Tọa độ: {temple.latitude}, {temple.longitude}</p>
                <a 
                  href={`https://maps.google.com/?q=${temple.latitude},${temple.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  📍 Xem trên Google Maps
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="temple-actions">
          <Link to="/" className="back-btn">← Quay lại trang chủ</Link>
        </div>
      </div>
    </div>
  );
};

export default TempleDetail;