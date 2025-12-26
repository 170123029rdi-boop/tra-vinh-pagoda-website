import React from 'react';
import { Link } from 'react-router-dom';

const TempleCard = ({ temple }) => {
  return (
    <div className="temple-card">
      <img 
        src={temple.image} 
        alt={temple.name}
        className="temple-image"
        loading="lazy"
      />
      <div className="temple-content">
        <h3>{temple.name}</h3>
        <div className="temple-location">
          📍 {temple.address}
        </div>
        <div className="temple-category">
          🏯 {temple.category}
        </div>
        <p className="temple-description">{temple.description}</p>
        <div className="temple-hours">
          🕰️ {temple.visitingHours} | {temple.entryFee}
        </div>
        <Link to={`/temple/${temple._id}`} className="view-details">
          Xem chi tiết →
        </Link>
      </div>
    </div>
  );
};

export default TempleCard;
