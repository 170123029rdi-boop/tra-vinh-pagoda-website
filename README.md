# Website Giới Thiệu Các Ngôi Chùa Nổi Tiếng Tại Trà Vinh

Một website hiện đại, tối ưu SEO và responsive được xây dựng bằng React.js để giới thiệu về tỉnh Trà Vinh và các ngôi chùa nổi tiếng.

## 🎯 Tính Năng

- ✅ **Giao diện hiện đại**: Thiết kế đẹp mắt với gradient colors và animations
- ✅ **Responsive Design**: Tối ưu cho tất cả các thiết bị (desktop, tablet, mobile)
- ✅ **SEO Optimization**: Meta tags, structured data, và semantic HTML
- ✅ **Performance**: Lazy loading images, code splitting, và optimized assets
- ✅ **Routing**: Điều hướng mượt mà giữa các trang
- ✅ **Contact Form**: Form liên hệ tương tác
- ✅ **Accessibility**: WCAG compliant với skip links và focus management

## 📁 Cấu Trúc Dự Án

```
tra-vinh-website/
├── public/
│   └── index.html          # HTML chính với SEO meta tags
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation header
│   │   ├── Footer.js       # Footer
│   │   ├── Hero.js         # Hero section
│   │   ├── About.js        # About section
│   │   ├── TempleCard.js   # Card component cho chùa
│   │   └── TemplesList.js  # Danh sách chùa
│   ├── pages/
│   │   ├── Home.js         # Trang chủ
│   │   ├── TempleDetail.js # Chi tiết chùa
│   │   └── Contact.js      # Trang liên hệ
│   ├── data/
│   │   └── temples.js      # Dữ liệu chùa
│   ├── styles/
│   │   └── main.css        # CSS chính
│   ├── App.js              # Component chính
│   └── index.js            # Entry point
└── package.json            # Dependencies
```

## 🚀 Cài Đặt & Chạy

### Yêu Cầu
- Node.js (v14 hoặc cao hơn)
- npm hoặc yarn

### Bước 1: Cài đặt Dependencies
```bash
cd tra-vinh-website
npm install --legacy-peer-deps
```

### Bước 2: Chạy Development Server
```bash
npm start
```
Website sẽ mở tại `http://localhost:3000`

### Bước 3: Build cho Production
```bash
npm run build
```
Các file tối ưu sẽ được tạo trong thư mục `build/`

## 📦 Dependencies

- **react**: ^19.2.3 - React library
- **react-dom**: ^19.2.3 - React DOM
- **react-router-dom**: ^6.x - Routing
- **react-helmet-async**: ^2.x - SEO meta tags management
- **axios**: ^1.x - HTTP client (optional)

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc
Chỉnh sửa các biến CSS trong `src/styles/main.css`:
```css
:root {
  --primary-color: #8B4513;      /* Màu chính */
  --secondary-color: #D2691E;    /* Màu phụ */
  --accent-color: #FFD700;       /* Màu nhấn */
}
```

### Thêm Chùa Mới
Thêm dữ liệu vào `src/data/temples.js`:
```javascript
{
  id: 7,
  name: "Tên chùa",
  image: "URL hình ảnh",
  location: "Địa điểm",
  description: "Mô tả",
  history: "Lịch sử",
  features: ["Đặc điểm 1", "Đặc điểm 2"],
  visitingHours: "Giờ mở cửa",
  entryFee: "Vé vào"
}
```

## 🔍 SEO Optimization

- ✅ Meta tags cho mỗi trang
- ✅ Open Graph tags cho social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Structured data ready

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels
- Keyboard navigation support
- Focus management
- Skip links
- Color contrast compliance

## 🚀 Deployment

### Netlify
```bash
npm run build
# Drag and drop build folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Thêm vào package.json:
# "homepage": "https://yourusername.github.io/tra-vinh-website"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 📝 Ghi Chú

- Hình ảnh hiện tại sử dụng placeholder, thay thế bằng hình ảnh thực tế
- Form liên hệ cần backend để xử lý dữ liệu
- Có thể thêm animation library như Framer Motion để tăng interactivity

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại

## 👨‍💻 Hỗ Trợ

Nếu có vấn đề, vui lòng tạo issue hoặc liên hệ qua email.

---

**Phiên bản**: 1.0.0  
**Cập nhật lần cuối**: 2024
