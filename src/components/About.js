import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const About = () => {
  const { settings } = useContext(DataContext);
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>{settings.aboutTitle}</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{settings.provinceName}</h3>
            <p>{settings.provinceDescription}</p>
            <p>
              Với diện tích {settings.provinceArea} và dân số {settings.provincePopulation}, 
              Trà Vinh là một điểm đến lý tưởng cho những ai muốn tìm hiểu về văn hóa, 
              lịch sử và tôn giáo của Việt Nam.
            </p>
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#D2691E' }}>
              Những điểm nổi bật:
            </h4>
            <ul className="highlights-list">
              {(settings.provinceHighlights || []).map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <img 
              src={settings.aboutImage} 
              alt="Cảnh quan Trà Vinh"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
