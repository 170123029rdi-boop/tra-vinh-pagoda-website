import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Liên hệ - Trà Vinh</title>
        <meta name="description" content="Liên hệ với chúng tôi để tìm hiểu thêm về Trà Vinh và các ngôi chùa nổi tiếng." />
      </Helmet>
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', color: '#8B4513', marginBottom: '3rem', fontSize: '2.5rem' }}>
          Liên hệ với chúng tôi
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h3 style={{ color: '#D2691E', marginBottom: '1.5rem' }}>Thông tin liên hệ</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>📍 Địa chỉ:</p>
              <p style={{ color: '#666' }}>Thành phố Trà Vinh, Tỉnh Trà Vinh, Việt Nam</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>📞 Điện thoại:</p>
              <p style={{ color: '#666' }}>(0294) 3 850 850</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>📧 Email:</p>
              <p style={{ color: '#666' }}>info@travinh.gov.vn</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>🌐 Website:</p>
              <p style={{ color: '#666' }}>www.travinh.gov.vn</p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: '#D2691E', marginBottom: '1rem' }}>Giờ làm việc:</h4>
              <p style={{ color: '#666' }}>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
              <p style={{ color: '#666' }}>Thứ 7: 8:00 - 12:00</p>
              <p style={{ color: '#666' }}>Chủ nhật: Đóng cửa</p>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#D2691E', marginBottom: '1.5rem' }}>Gửi tin nhắn cho chúng tôi</h3>
            {submitted && (
              <div style={{ 
                backgroundColor: '#d4edda', 
                color: '#155724', 
                padding: '1rem', 
                borderRadius: '5px',
                marginBottom: '1rem'
              }}>
                ✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Tên của bạn
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Tin nhắn
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                className="cta-button"
                style={{ width: '100%' }}
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
