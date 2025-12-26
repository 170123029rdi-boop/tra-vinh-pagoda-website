import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { DataContext } from '../../context/DataContext';
import SettingsManager from './SettingsManager';
import '../../styles/admin.css';

const AdminDashboard = () => {
  const { pagodas, updatePagodas, posts, updatePosts, landscapes, updateLandscapes } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingPagoda, setEditingPagoda] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleAddPagoda = (formData) => {
    if (editingPagoda) {
      updatePagodas(pagodas.map(p => p._id === editingPagoda._id ? { ...formData, _id: editingPagoda._id } : p));
      showAlert('Cập nhật chùa thành công!');
      setEditingPagoda(null);
    } else {
      updatePagodas([...pagodas, { ...formData, _id: Date.now() }]);
      showAlert('Thêm chùa thành công!');
    }
    setShowForm(false);
  };

  const handleDeletePagoda = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa?')) {
      updatePagodas(pagodas.filter(p => p._id !== id));
      showAlert('Xóa chùa thành công!');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Trà Vinh</title>
      </Helmet>
      <div className="admin-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="admin-main">
          <Header />
          <div className="admin-content">
            {alert && (
              <div className={`admin-alert admin-alert-${alert.type}`}>
                {alert.type === 'success' ? '✓' : '✕'} {alert.message}
              </div>
            )}
            {activeTab === 'dashboard' && <Dashboard pagodas={pagodas} posts={posts} />}
            {activeTab === 'pagodas' && (
              <PagodaManager 
                pagodas={pagodas} 
                onAdd={handleAddPagoda}
                onDelete={handleDeletePagoda}
                onEdit={setEditingPagoda}
                editingPagoda={editingPagoda}
                showForm={showForm}
                setShowForm={setShowForm}
              />
            )}
            {activeTab === 'posts' && <PostManager posts={posts} updatePosts={updatePosts} />}
            {activeTab === 'landscapes' && <LandscapeManager landscapes={landscapes} updateLandscapes={updateLandscapes} />}
            {activeTab === 'users' && <UserManager />}
            {activeTab === 'settings' && <SettingsManager />}
          </div>
        </div>
      </div>
    </>
  );
};

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="admin-sidebar">
    <div className="admin-logo">🏯 Admin</div>
    <nav className="admin-nav">
      <button 
        className={`admin-nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
        onClick={() => setActiveTab('dashboard')}
      >
        📊 Dashboard
      </button>
      <button 
        className={`admin-nav-btn ${activeTab === 'pagodas' ? 'active' : ''}`}
        onClick={() => setActiveTab('pagodas')}
      >
        🏯 Quản lý Chùa
      </button>
      <button 
        className={`admin-nav-btn ${activeTab === 'posts' ? 'active' : ''}`}
        onClick={() => setActiveTab('posts')}
      >
        📝 Quản lý Bài Viết
      </button>
      <button 
        className={`admin-nav-btn ${activeTab === 'landscapes' ? 'active' : ''}`}
        onClick={() => setActiveTab('landscapes')}
      >
        🖼️ Cảnh Quan
      </button>
      <button 
        className={`admin-nav-btn ${activeTab === 'users' ? 'active' : ''}`}
        onClick={() => setActiveTab('users')}
      >
        👥 Quản lý Tài Khoản
      </button>
      <button 
        className={`admin-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveTab('settings')}
      >
        ⚙️ Cài Đặt
      </button>
    </nav>
  </div>
);

const Header = () => (
  <div className="admin-header">
    <h1>Quản Trị Website Trà Vinh</h1>
    <div className="admin-user-info">
      <span>👤 Admin</span>
      <button className="admin-btn admin-btn-danger admin-btn-small">Đăng xuất</button>
    </div>
  </div>
);

const Dashboard = ({ pagodas, posts }) => (
  <div>
    <h2 style={{ marginBottom: '25px', color: '#2c3e50' }}>Dashboard</h2>
    <div className="admin-stats-grid">
      <div className="admin-stat-card" style={{ borderLeftColor: '#3498db' }}>
        <h3>{pagodas.length}</h3>
        <p>Tổng số chùa</p>
      </div>
      <div className="admin-stat-card" style={{ borderLeftColor: '#27ae60' }}>
        <h3>{posts.length}</h3>
        <p>Bài viết</p>
      </div>
      <div className="admin-stat-card" style={{ borderLeftColor: '#f39c12' }}>
        <h3>2</h3>
        <p>Tài khoản</p>
      </div>
      <div className="admin-stat-card" style={{ borderLeftColor: '#e74c3c' }}>
        <h3>4</h3>
        <p>Danh mục</p>
      </div>
    </div>
  </div>
);

const PagodaManager = ({ pagodas, onAdd, onDelete, onEdit, editingPagoda, showForm, setShowForm }) => {
  const [formData, setFormData] = useState(editingPagoda || { name: '', category: '', district: '', image: '' });
  const [imagePreview, setImagePreview] = useState(editingPagoda?.image || '');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        setFormData({ ...formData, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrl = (url) => {
    setFormData({ ...formData, image: url });
    setImagePreview(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.district) {
      onAdd(formData);
      setFormData({ name: '', category: '', district: '', image: '' });
      setImagePreview('');
    }
  };

  return (
    <div>
      <div className="admin-section-header">
        <h2>Quản lý Chùa</h2>
        <button 
          className="admin-btn admin-btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            setFormData({ name: '', category: '', district: '', image: '' });
            setImagePreview('');
            onEdit(null);
          }}
        >
          + Thêm chùa mới
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Tên chùa *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nhập tên chùa"
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Danh mục *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Chọn danh mục</option>
                <option value="Chùa Khmer">Chùa Khmer</option>
                <option value="Chùa Việt">Chùa Việt</option>
                <option value="Chùa Hoa">Chùa Hoa</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label>Huyện *</label>
              <select
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                required
              >
                <option value="">Chọn huyện</option>
                <option value="Trà Ôn">Trà Ôn</option>
                <option value="Cầu Ngang">Cầu Ngang</option>
                <option value="Thành phố Trà Vinh">Thành phố Trà Vinh</option>
                <option value="Duyên Hải">Duyên Hải</option>
              </select>
            </div>
          </div>

          <div className="admin-form-group">
            <label>Hình ảnh</label>
            <div className="admin-image-upload" onClick={() => document.getElementById('imageInput').click()}>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <p>📁 Nhấp để tải lên hoặc kéo thả ảnh</p>
            </div>

            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="admin-image-preview" />
            )}

            <div className="admin-image-url-input">
              <input
                type="text"
                placeholder="Hoặc nhập URL ảnh"
                onChange={(e) => handleImageUrl(e.target.value)}
              />
              <button type="button" className="admin-btn admin-btn-primary admin-btn-small">
                Tải từ URL
              </button>
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="admin-btn admin-btn-success">
              💾 Lưu
            </button>
            <button 
              type="button" 
              className="admin-btn admin-btn-warning"
              onClick={() => {
                setShowForm(false);
                setFormData({ name: '', category: '', district: '', image: '' });
                setImagePreview('');
              }}
            >
              ✕ Hủy
            </button>
          </div>
        </form>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên chùa</th>
              <th>Danh mục</th>
              <th>Huyện</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {pagodas.map(pagoda => (
              <tr key={pagoda._id}>
                <td>
                  <img 
                    src={pagoda.image} 
                    alt={pagoda.name}
                    style={{ width: '50px', height: '50px', borderRadius: '5px', objectFit: 'cover' }}
                  />
                </td>
                <td>{pagoda.name}</td>
                <td>{pagoda.category}</td>
                <td>{pagoda.district}</td>
                <td>
                  <div className="admin-table-actions">
                    <button 
                      className="admin-btn admin-btn-warning admin-btn-small"
                      onClick={() => {
                        onEdit(pagoda);
                        setFormData(pagoda);
                        setImagePreview(pagoda.image);
                        setShowForm(true);
                      }}
                    >
                      ✏️ Sửa
                    </button>
                    <button 
                      className="admin-btn admin-btn-danger admin-btn-small"
                      onClick={() => onDelete(pagoda._id)}
                    >
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PostManager = ({ posts, updatePosts }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({ title: '', author: '', content: '' });

  const handleAdd = () => {
    if (formData.title) {
      if (editingPost) {
        updatePosts(posts.map(p => p._id === editingPost._id ? { ...formData, _id: editingPost._id } : p));
        setEditingPost(null);
      } else {
        updatePosts([...posts, { _id: Date.now(), ...formData }]);
      }
      setFormData({ title: '', author: '', content: '' });
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa bài viết này?')) {
      updatePosts(posts.filter(p => p._id !== id));
    }
  };

  return (
    <div>
      <div className="admin-section-header">
        <h2>Quản lý Bài Viết</h2>
        <button 
          className="admin-btn admin-btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            setFormData({ title: '', author: '', content: '' });
            setEditingPost(null);
          }}
        >
          + Thêm bài viết
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
          <div className="admin-form-group">
            <label>Tiêu đề *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Nhập tiêu đề"
              required
            />
          </div>
          <div className="admin-form-group">
            <label>Tác giả</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              placeholder="Nhập tác giả"
            />
          </div>
          <div className="admin-form-group">
            <label>Nội dung</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Nhập nội dung bài viết"
              style={{ minHeight: '150px' }}
            />
          </div>
          <div className="admin-form-actions">
            <button type="submit" className="admin-btn admin-btn-success">💾 Lưu</button>
            <button 
              type="button" 
              className="admin-btn admin-btn-warning"
              onClick={() => {
                setShowForm(false);
                setFormData({ title: '', author: '', content: '' });
                setEditingPost(null);
              }}
            >
              ✕ Hủy
            </button>
          </div>
        </form>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Tác giả</th>
              <th>Nội dung</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.content ? post.content.substring(0, 50) + '...' : 'N/A'}</td>
                <td>
                  <div className="admin-table-actions">
                    <button 
                      className="admin-btn admin-btn-warning admin-btn-small"
                      onClick={() => {
                        setEditingPost(post);
                        setFormData(post);
                        setShowForm(true);
                      }}
                    >
                      ✏️ Sửa
                    </button>
                    <button 
                      className="admin-btn admin-btn-danger admin-btn-small"
                      onClick={() => handleDelete(post._id)}
                    >
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const LandscapeManager = ({ landscapes, updateLandscapes }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingLandscape, setEditingLandscape] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', url: '' });
  const [imagePreview, setImagePreview] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        setFormData({ ...formData, url: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrl = (url) => {
    setFormData({ ...formData, url });
    setImagePreview(url);
  };

  const handleAdd = () => {
    if (formData.title && formData.url) {
      if (editingLandscape) {
        updateLandscapes(landscapes.map(l => l._id === editingLandscape._id ? { ...formData, _id: editingLandscape._id } : l));
        setEditingLandscape(null);
      } else {
        updateLandscapes([...landscapes, { _id: Date.now(), ...formData }]);
      }
      setFormData({ title: '', description: '', url: '' });
      setImagePreview('');
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa?')) {
      updateLandscapes(landscapes.filter(l => l._id !== id));
    }
  };

  return (
    <div>
      <div className="admin-section-header">
        <h2>Quản lý Cảnh Quan</h2>
        <button 
          className="admin-btn admin-btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            setFormData({ title: '', description: '', url: '' });
            setImagePreview('');
            setEditingLandscape(null);
          }}
        >
          + Thêm cảnh quan
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
          <div className="admin-form-group">
            <label>Tiêu đề *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Nhập tiêu đề cảnh quan"
              required
            />
          </div>
          <div className="admin-form-group">
            <label>Mô tả</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Nhập mô tả cảnh quan"
              style={{ minHeight: '100px' }}
            />
          </div>
          <div className="admin-form-group">
            <label>Hình ảnh</label>
            <div className="admin-image-upload" onClick={() => document.getElementById('landscapeImageInput').click()}>
              <input
                id="landscapeImageInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <p>📁 Nhấp để tải lên hoặc kéo thả ảnh</p>
            </div>

            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="admin-image-preview" />
            )}

            <div className="admin-image-url-input">
              <input
                type="text"
                placeholder="Hoặc nhập URL ảnh"
                onChange={(e) => handleImageUrl(e.target.value)}
              />
              <button type="button" className="admin-btn admin-btn-primary admin-btn-small">
                Tải từ URL
              </button>
            </div>
          </div>
          <div className="admin-form-actions">
            <button type="submit" className="admin-btn admin-btn-success">💾 Lưu</button>
            <button 
              type="button" 
              className="admin-btn admin-btn-warning"
              onClick={() => {
                setShowForm(false);
                setFormData({ title: '', description: '', url: '' });
                setImagePreview('');
                setEditingLandscape(null);
              }}
            >
              ✕ Hủy
            </button>
          </div>
        </form>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tiêu đề</th>
              <th>Mô tả</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {landscapes.map(landscape => (
              <tr key={landscape._id}>
                <td>
                  <img 
                    src={landscape.url} 
                    alt={landscape.title}
                    style={{ width: '50px', height: '50px', borderRadius: '5px', objectFit: 'cover' }}
                  />
                </td>
                <td>{landscape.title}</td>
                <td>{landscape.description ? landscape.description.substring(0, 50) + '...' : 'N/A'}</td>
                <td>
                  <div className="admin-table-actions">
                    <button 
                      className="admin-btn admin-btn-warning admin-btn-small"
                      onClick={() => {
                        setEditingLandscape(landscape);
                        setFormData(landscape);
                        setImagePreview(landscape.url);
                        setShowForm(true);
                      }}
                    >
                      ✏️ Sửa
                    </button>
                    <button 
                      className="admin-btn admin-btn-danger admin-btn-small"
                      onClick={() => handleDelete(landscape._id)}
                    >
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UserManager = () => {
  const [users, setUsers] = useState([
    { _id: 1, username: 'admin', email: 'admin@travinh.com', role: 'Admin', status: 'Active' },
    { _id: 2, username: 'editor', email: 'editor@travinh.com', role: 'Editor', status: 'Active' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ username: '', email: '', role: 'Editor', password: '' });

  const handleAdd = () => {
    if (formData.username && formData.email) {
      if (editingUser) {
        setUsers(users.map(u => u._id === editingUser._id ? { ...u, ...formData } : u));
        setEditingUser(null);
      } else {
        setUsers([...users, { _id: Date.now(), ...formData, status: 'Active' }]);
      }
      setFormData({ username: '', email: '', role: 'Editor', password: '' });
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa tài khoản này?')) {
      setUsers(users.filter(u => u._id !== id));
    }
  };

  return (
    <div>
      <div className="admin-section-header">
        <h2>Quản lý Tài Khoản</h2>
        <button 
          className="admin-btn admin-btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            setFormData({ username: '', email: '', role: 'Editor', password: '' });
            setEditingUser(null);
          }}
        >
          + Thêm tài khoản
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Username *</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Nhập username"
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Nhập email"
                required
              />
            </div>
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>Mật khẩu {editingUser ? '(để trống nếu không đổi)' : '*'}</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Nhập mật khẩu"
                required={!editingUser}
              />
            </div>
            <div className="admin-form-group">
              <label>Vai trò *</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
          </div>
          <div className="admin-form-actions">
            <button type="submit" className="admin-btn admin-btn-success">💾 Lưu</button>
            <button 
              type="button" 
              className="admin-btn admin-btn-warning"
              onClick={() => {
                setShowForm(false);
                setFormData({ username: '', email: '', role: 'Editor', password: '' });
                setEditingUser(null);
              }}
            >
              ✕ Hủy
            </button>
          </div>
        </form>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span style={{ 
                    background: user.role === 'Admin' ? '#3498db' : '#27ae60', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '4px' 
                  }}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span style={{ 
                    background: '#27ae60', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '4px' 
                  }}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="admin-table-actions">
                    <button 
                      className="admin-btn admin-btn-warning admin-btn-small"
                      onClick={() => {
                        setEditingUser(user);
                        setFormData({ username: user.username, email: user.email, role: user.role, password: '' });
                        setShowForm(true);
                      }}
                    >
                      ✏️ Sửa
                    </button>
                    <button 
                      className="admin-btn admin-btn-danger admin-btn-small"
                      onClick={() => handleDelete(user._id)}
                    >
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
