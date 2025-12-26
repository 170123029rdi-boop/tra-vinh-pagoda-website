# 🚀 Quick Start Guide

## Bước 1: Mở Terminal/Command Prompt

Điều hướng đến thư mục project:
```bash
cd "D:\Đồ án cơ sở ngành\Xây dựng website giới thiệu các ngôi chùa nổi tiếng của tỉnh Trà Vinh sử dụng React.js\tra-vinh-website"
```

## Bước 2: Cài Đặt Dependencies

```bash
npm install --legacy-peer-deps
```

Chờ cho đến khi cài đặt hoàn tất (khoảng 1-2 phút).

## Bước 3: Chạy Development Server

```bash
npm start
```

Website sẽ tự động mở tại `http://localhost:3000`

## Bước 4: Khám Phá Website

- 🏠 **Trang chủ**: Xem hero section, giới thiệu, và danh sách chùa
- 🏯 **Chi tiết chùa**: Click "Xem chi tiết" trên bất kỳ chùa nào
- 📧 **Liên hệ**: Điền form liên hệ
- 📱 **Responsive**: Thay đổi kích thước cửa sổ để xem responsive design

## 🛠️ Các Lệnh Hữu Ích

### Chạy development server
```bash
npm start
```

### Build cho production
```bash
npm run build
```

### Chạy tests
```bash
npm test
```

### Dừng server
```
Nhấn Ctrl + C trong terminal
```

## 📝 Chỉnh Sửa Code

### Thêm chùa mới
1. Mở `src/data/temples.js`
2. Thêm object mới vào array `temples`
3. Lưu file - website sẽ tự động reload

### Thay đổi màu sắc
1. Mở `src/styles/main.css`
2. Tìm `:root` section
3. Thay đổi giá trị màu
4. Lưu file - website sẽ tự động reload

### Thay đổi nội dung
1. Mở file component cần chỉnh sửa
2. Thay đổi text/content
3. Lưu file - website sẽ tự động reload

## 🐛 Gặp Vấn Đề?

### Website không mở
- Kiểm tra terminal có error không
- Thử dừng server (Ctrl + C) và chạy lại `npm start`

### Port 3000 đã được sử dụng
```bash
# Chạy trên port khác
PORT=3001 npm start
```

### Dependencies lỗi
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Hình ảnh không hiển thị
- Hình ảnh hiện tại là placeholder
- Thay thế URL trong `src/data/temples.js`

## 📦 Build cho Production

```bash
npm run build
```

Folder `build/` sẽ chứa các file tối ưu sẵn sàng deploy.

### Deploy lên Netlify
1. Tạo tài khoản Netlify
2. Drag & drop folder `build/` vào Netlify
3. Website sẽ được deploy tự động

### Deploy lên Vercel
```bash
npm install -g vercel
vercel
```

## 📚 Tài Liệu Thêm

- `README.md` - Tài liệu chi tiết
- `GUIDE.md` - Hướng dẫn chi tiết về kiến trúc
- `src/` - Xem code comments

## ✨ Tính Năng Chính

✅ Responsive design (desktop, tablet, mobile)
✅ SEO optimized
✅ Fast performance
✅ Modern UI/UX
✅ Contact form
✅ Accessible
✅ Easy to customize

## 🎯 Tiếp Theo

1. Thay thế hình ảnh placeholder bằng hình ảnh thực tế
2. Cập nhật thông tin liên hệ
3. Thêm backend cho form liên hệ
4. Deploy lên hosting

---

**Chúc bạn thành công! 🎉**

Nếu cần giúp đỡ, xem README.md hoặc GUIDE.md
