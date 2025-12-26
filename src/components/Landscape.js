import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Landscape = () => {
  const { landscapes } = useContext(DataContext);

  return (
    <section className="landscape" id="landscape">
      <div className="container">
        <h2>Cảnh Quan Trà Vinh</h2>
        <p className="section-subtitle">Khám phá vẻ đẹp thiên nhiên và con người Trà Vinh</p>
        
        <div className="landscape-grid">
          {landscapes && landscapes.length > 0 ? (
            landscapes.map((image, index) => (
              <div key={index} className="landscape-item">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="landscape-image"
                />
                <div className="landscape-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="landscape-placeholder">
              <p>Chưa có hình ảnh cảnh quan</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Landscape;
