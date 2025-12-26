import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminToken', 'token_' + Date.now());
      navigate('/admin/dashboard');
    } else {
      setError('Username hoặc password không đúng');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Trà Vinh</title>
      </Helmet>
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <h1 style={styles.title}>🏯 Admin Login</h1>
          
          {error && <div style={styles.error}>{error}</div>}
          
          <form onSubmit={handleLogin}>
            <div style={styles.formGroup}>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
                placeholder="Nhập username"
              />
            </div>

            <div style={styles.formGroup}>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Nhập password"
              />
            </div>

            <button type="submit" style={styles.loginBtn}>
              Đăng nhập
            </button>
          </form>

          <div style={styles.demo}>
            <p><strong>Demo Account:</strong></p>
            <p>Username: <code>admin</code></p>
            <p>Password: <code>admin123</code></p>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50',
    fontSize: '28px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
    marginTop: '8px',
    boxSizing: 'border-box',
  },
  loginBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
  error: {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '12px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  demo: {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    fontSize: '13px',
  },
};

export default AdminLogin;
