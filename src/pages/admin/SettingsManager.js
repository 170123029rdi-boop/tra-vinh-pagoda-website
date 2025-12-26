import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const SettingsManager = () => {
  const { settings, updateSettings } = useContext(DataContext);
  const [formSettings, setFormSettings] = useState(settings);
  const [imagePreview, setImagePreview] = useState({
    heroImage: settings.heroImage,
    aboutImage: settings.aboutImage,
  });
  const [saved, setSaved] = useState(false);

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview({ ...imagePreview, [field]: event.target.result });
        setFormSettings({ ...formSettings, [field]: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrl = (url, field) => {
    setFormSettings({ ...formSettings, [field]: url });
    setImagePreview({ ...imagePreview, [field]: url });
  };

  const handleSave = () => {
    updateSettings(formSettings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setFormSettings(settings);
    setImagePreview({
      heroImage: settings.heroImage,
      aboutImage: settings.aboutImage,
    });
  };

  return (
    <div>
      <div className="admin-section-header">
        <h2>⚙️ Cài Đặt Trang Chủ</h2>
        <div>
          <button className="admin-btn admin-btn-success" onClick={handleSave}>
            💾 Lưu Cài Đặt
          </button>
          <button className="admin-btn admin-btn-warning" onClick={handleReset} style={{ marginLeft: '10px' }}>
            ↻ Khôi phục
          </button>
        </div>
      </div>

      {saved && (
        <div className="admin-alert admin-alert-success">
          ✓ Cài đặt đã được lưu thành công!
        </div>
      )}

      {/* Hero Section */}
      <div className="admin-form">
        <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>🎯 Hero Section</h3>
        
        <div className="admin-form-group">
          <label>Tiêu đề Hero *</label>
          <input
            type="text"
            value={formSettings.heroTitle}
            onChange={(e) => setFormSettings({ ...formSettings, heroTitle: e.target.value })}
            placeholder="Nhập tiêu đề"
          />
        </div>

        <div className="admin-form-group">
          <label>Mô tả Hero *</label>
          <textarea
            value={formSettings.heroDescription}
            onChange={(e) => setFormSettings({ ...formSettings, heroDescription: e.target.value })}
            placeholder="Nhập mô tả"
            style={{ minHeight: '100px' }}
          />
        </div>

        <div className="admin-form-group">
          <label>Hình ảnh Hero</label>
          <div className="admin-image-upload" onClick={() => document.getElementById('heroImageInput').click()}>
            <input
              id="heroImageInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'heroImage')}
            />
            <p>📁 Nhấp để tải lên hoặc kéo thả ảnh</p>
          </div>

          {imagePreview.heroImage && (
            <img src={imagePreview.heroImage} alt="Hero Preview" className="admin-image-preview" />
          )}

          <div className="admin-image-url-input">
            <input
              type="text"
              placeholder="Hoặc nhập URL ảnh"
              onChange={(e) => handleImageUrl(e.target.value, 'heroImage')}
            />
            <button type="button" className="admin-btn admin-btn-primary admin-btn-small">
              Tải từ URL
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="admin-form">
        <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>ℹ️ About Section</h3>
        
        <div className="admin-form-group">
          <label>Tiêu đề About *</label>
          <input
            type="text"
            value={formSettings.aboutTitle}
            onChange={(e) => setFormSettings({ ...formSettings, aboutTitle: e.target.value })}
            placeholder="Nhập tiêu đề"
          />
        </div>

        <div className="admin-form-group">
          <label>Mô tả About *</label>
          <textarea
            value={formSettings.aboutDescription}
            onChange={(e) => setFormSettings({ ...formSettings, aboutDescription: e.target.value })}
            placeholder="Nhập mô tả"
            style={{ minHeight: '100px' }}
          />
        </div>

        <div className="admin-form-group">
          <label>Hình ảnh About</label>
          <div className="admin-image-upload" onClick={() => document.getElementById('aboutImageInput').click()}>
            <input
              id="aboutImageInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'aboutImage')}
            />
            <p>📁 Nhấp để tải lên hoặc kéo thả ảnh</p>
          </div>

          {imagePreview.aboutImage && (
            <img src={imagePreview.aboutImage} alt="About Preview" className="admin-image-preview" />
          )}

          <div className="admin-image-url-input">
            <input
              type="text"
              placeholder="Hoặc nhập URL ảnh"
              onChange={(e) => handleImageUrl(e.target.value, 'aboutImage')}
            />
            <button type="button" className="admin-btn admin-btn-primary admin-btn-small">
              Tải từ URL
            </button>
          </div>
        </div>
      </div>

      {/* Thông tin tỉnh Trà Vinh */}
      <div className="admin-form">
        <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>🏢 Thông tin tỉnh Trà Vinh</h3>
        
        <div className="admin-form-group">
          <label>Tên tỉnh *</label>
          <input
            type="text"
            value={formSettings.provinceName}
            onChange={(e) => setFormSettings({ ...formSettings, provinceName: e.target.value })}
            placeholder="Nhập tên tỉnh"
          />
        </div>

        <div className="admin-form-group">
          <label>Mô tả tỉnh *</label>
          <textarea
            value={formSettings.provinceDescription}
            onChange={(e) => setFormSettings({ ...formSettings, provinceDescription: e.target.value })}
            placeholder="Nhập mô tả về tỉnh"
            style={{ minHeight: '100px' }}
          />
        </div>

        <div className="admin-form-group">
          <label>Vị trí địa lý *</label>
          <input
            type="text"
            value={formSettings.provinceLocation}
            onChange={(e) => setFormSettings({ ...formSettings, provinceLocation: e.target.value })}
            placeholder="Nhập vị trí địa lý"
          />
        </div>

        <div className="admin-form-group">
          <label>Dân số *</label>
          <input
            type="text"
            value={formSettings.provincePopulation}
            onChange={(e) => setFormSettings({ ...formSettings, provincePopulation: e.target.value })}
            placeholder="Nhập dân số"
          />
        </div>

        <div className="admin-form-group">
          <label>Diện tích *</label>
          <input
            type="text"
            value={formSettings.provinceArea}
            onChange={(e) => setFormSettings({ ...formSettings, provinceArea: e.target.value })}
            placeholder="Nhập diện tích"
          />
        </div>

        <div className="admin-form-group">
          <label>Điểm nổi bật (mỗi dòng một điểm) *</label>
          <textarea
            value={(formSettings.provinceHighlights || []).join('\n')}
            onChange={(e) => setFormSettings({ 
              ...formSettings, 
              provinceHighlights: e.target.value.split('\n').filter(item => item.trim() !== '') 
            })}
            placeholder="Nhập các điểm nổi bật, mỗi dòng một điểm"
            style={{ minHeight: '120px' }}
          />
          <small style={{ color: '#7f8c8d', marginTop: '5px', display: 'block' }}>
            Mỗi dòng sẽ là một điểm nổi bật riêng biệt
          </small>
        </div>
      </div>

      {/* SEO Settings */}
      <div className="admin-form">
        <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>🔍 Cài Đặt SEO</h3>
        
        <div className="admin-form-group">
          <label>Tiêu đề Website (Title) *</label>
          <input
            type="text"
            value={formSettings.siteTitle}
            onChange={(e) => setFormSettings({ ...formSettings, siteTitle: e.target.value })}
            placeholder="Nhập tiêu đề website"
          />
          <small style={{ color: '#7f8c8d', marginTop: '5px', display: 'block' }}>
            Hiển thị trên tab browser và kết quả tìm kiếm
          </small>
        </div>

        <div className="admin-form-group">
          <label>Mô tả Website (Meta Description) *</label>
          <textarea
            value={formSettings.siteDescription}
            onChange={(e) => setFormSettings({ ...formSettings, siteDescription: e.target.value })}
            placeholder="Nhập mô tả website"
            style={{ minHeight: '80px' }}
          />
          <small style={{ color: '#7f8c8d', marginTop: '5px', display: 'block' }}>
            Hiển thị dưới tiêu đề trong kết quả tìm kiếm (tối đa 160 ký tự)
          </small>
        </div>
      </div>

      {/* Preview */}
      <div className="admin-form">
        <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>👁️ Xem Trước</h3>
        
        <div style={{ 
          background: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>Kết quả tìm kiếm Google:</h4>
          <div style={{ 
            background: 'white', 
            padding: '15px', 
            borderRadius: '5px',
            border: '1px solid #ddd'
          }}>
            <p style={{ color: '#1a73e8', fontSize: '18px', margin: '0 0 5px 0' }}>
              {formSettings.siteTitle}
            </p>
            <p style={{ color: '#006621', fontSize: '13px', margin: '0 0 5px 0' }}>
              https://travinh.com
            </p>
            <p style={{ color: '#545454', fontSize: '13px', margin: '0' }}>
              {formSettings.siteDescription.substring(0, 160)}
              {formSettings.siteDescription.length > 160 ? '...' : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="admin-form-actions" style={{ marginTop: '30px' }}>
        <button className="admin-btn admin-btn-success" onClick={handleSave}>
          💾 Lưu Tất Cả Cài Đặt
        </button>
        <button className="admin-btn admin-btn-warning" onClick={handleReset} style={{ marginLeft: '10px' }}>
          ↻ Khôi phục
        </button>
      </div>
    </div>
  );
};

export default SettingsManager;
