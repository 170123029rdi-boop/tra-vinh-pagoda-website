# 🔧 Installation & Setup Guide

## 📋 Yêu Cầu Hệ Thống

- **Node.js**: v14.0.0 hoặc cao hơn
- **npm**: v6.0.0 hoặc cao hơn (hoặc yarn)
- **RAM**: Tối thiểu 2GB
- **Disk Space**: Tối thiểu 500MB

### Kiểm Tra Phiên Bản

```bash
node --version
npm --version
```

## 📥 Cài Đặt Node.js

### Windows
1. Truy cập https://nodejs.org/
2. Download LTS version
3. Chạy installer
4. Làm theo hướng dẫn
5. Khởi động lại máy tính

### macOS
```bash
# Sử dụng Homebrew
brew install node

# Hoặc download từ https://nodejs.org/
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

## 🚀 Cài Đặt Project

### Bước 1: Mở Terminal/Command Prompt

**Windows**: 
- Nhấn `Win + R`
- Gõ `cmd`
- Nhấn Enter

**macOS/Linux**:
- Mở Terminal application

### Bước 2: Điều Hướng Đến Thư Mục Project

```bash
cd "D:\Đồ án cơ sở ngành\Xây dựng website giới thiệu các ngôi chùa nổi tiếng của tỉnh Trà Vinh sử dụng React.js\tra-vinh-website"
```

### Bước 3: Cài Đặt Dependencies

```bash
npm install --legacy-peer-deps
```

**Giải thích**: 
- `npm install` - Cài đặt tất cả packages
- `--legacy-peer-deps` - Cho phép cài đặt với React 19

**Thời gian**: Khoảng 1-2 phút

**Output mong đợi**:
```
added 1320 packages in 45s
```

### Bước 4: Xác Minh Cài Đặt

```bash
npm list react react-dom react-router-dom
```

Bạn sẽ thấy các phiên bản được cài đặt.

## ▶️ Chạy Development Server

### Lệnh Cơ Bản

```bash
npm start
```

### Kết Quả Mong Đợi

```
Compiled successfully!

You can now view tra-vinh-website in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Truy Cập Website

- Mở browser
- Truy cập `http://localhost:3000`
- Website sẽ tự động reload khi bạn chỉnh sửa code

## 🛑 Dừng Development Server

Trong terminal, nhấn:
```
Ctrl + C
```

Xác nhận bằng cách gõ `Y` và nhấn Enter.

## 🔄 Reload Website

### Tự Động
- Mỗi khi bạn lưu file, website sẽ tự động reload

### Thủ Công
- Nhấn `F5` hoặc `Ctrl + R` trong browser
- Hoặc nhấn `Ctrl + Shift + R` để hard refresh

## 🐛 Troubleshooting

### Lỗi: "npm: command not found"

**Giải pháp**:
1. Cài đặt Node.js từ https://nodejs.org/
2. Khởi động lại terminal
3. Thử lại

### Lỗi: "Port 3000 already in use"

**Giải pháp 1**: Sử dụng port khác
```bash
PORT=3001 npm start
```

**Giải pháp 2**: Tìm và dừng process
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Lỗi: "ERESOLVE unable to resolve dependency tree"

**Giải pháp**:
```bash
npm install --legacy-peer-deps
```

### Lỗi: "Module not found"

**Giải pháp**:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Website không mở

**Kiểm tra**:
1. Terminal có error không?
2. Port 3000 có đang chạy không?
3. Browser có hỗ trợ không?

**Giải pháp**:
```bash
# Dừng server
Ctrl + C

# Xóa cache
rm -rf node_modules package-lock.json

# Cài đặt lại
npm install --legacy-peer-deps

# Chạy lại
npm start
```

## 📦 Build cho Production

### Lệnh Build

```bash
npm run build
```

### Kết Quả

```
The build folder is ready to be deployed.
Find out more information at: https://cra.link/deployment
```

### Output

- Folder `build/` được tạo
- Chứa các file tối ưu sẵn sàng deploy
- Kích thước: ~150KB (gzipped)

### Kiểm Tra Build

```bash
npm install -g serve
serve -s build
```

Truy cập `http://localhost:3000` để xem production build.

## 🌐 Deploy

### Netlify

1. Tạo tài khoản tại https://netlify.com
2. Build project: `npm run build`
3. Drag & drop folder `build/` vào Netlify
4. Website sẽ được deploy tự động

### Vercel

```bash
npm install -g vercel
vercel
```

Làm theo hướng dẫn trên màn hình.

### GitHub Pages

1. Thêm vào `package.json`:
```json
"homepage": "https://yourusername.github.io/tra-vinh-website"
```

2. Cài đặt gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Thêm scripts vào `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 📝 Các Lệnh Hữu Ích

### Development
```bash
npm start              # Chạy dev server
npm test               # Chạy tests
npm run build          # Build production
```

### Maintenance
```bash
npm update             # Cập nhật packages
npm audit              # Kiểm tra security
npm audit fix          # Fix security issues
npm list               # Liệt kê packages
```

### Cleaning
```bash
npm cache clean --force    # Xóa npm cache
rm -rf node_modules        # Xóa node_modules
rm package-lock.json       # Xóa lock file
```

## 🔍 Kiểm Tra Cài Đặt

### Verify Installation

```bash
# Kiểm tra Node.js
node -v

# Kiểm tra npm
npm -v

# Kiểm tra packages
npm list react react-dom react-router-dom react-helmet-async
```

### Expected Output

```
react@19.2.3
react-dom@19.2.3
react-router-dom@7.11.0
react-helmet-async@2.0.5
```

## 📚 Tài Liệu Thêm

- **README.md** - Tài liệu chính
- **GUIDE.md** - Hướng dẫn chi tiết
- **QUICKSTART.md** - Quick start
- **PROJECT_SUMMARY.md** - Tóm tắt dự án

## ✅ Checklist Cài Đặt

- [ ] Node.js cài đặt
- [ ] npm cài đặt
- [ ] Project folder tạo
- [ ] Dependencies cài đặt
- [ ] Development server chạy
- [ ] Website mở tại localhost:3000
- [ ] Có thể chỉnh sửa code
- [ ] Website reload tự động

## 🎉 Hoàn Tất!

Nếu bạn thấy website chạy tại `http://localhost:3000`, cài đặt đã thành công!

### Tiếp Theo

1. Xem QUICKSTART.md để khám phá website
2. Xem GUIDE.md để hiểu kiến trúc
3. Bắt đầu tùy chỉnh theo nhu cầu

---

**Cần giúp đỡ?** Xem README.md hoặc GUIDE.md
