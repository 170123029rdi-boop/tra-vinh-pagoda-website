# 📖 Hướng Dẫn Chi Tiết - Website Trà Vinh

## 🎯 Tổng Quan Dự Án

Website này được xây dựng để giới thiệu về tỉnh Trà Vinh và các ngôi chùa nổi tiếng, với focus vào:
- Hiệu suất cao (Performance)
- Tối ưu SEO
- Responsive design
- Trải nghiệm người dùng tốt

## 🏗️ Kiến Trúc Ứng Dụng

### Component Structure
```
App (Root)
├── Header (Navigation)
├── Main Routes
│   ├── Home Page
│   │   ├── Hero Section
│   │   ├── About Section
│   │   └── Temples List
│   ├── Temple Detail Page
│   └── Contact Page
└── Footer
```

### Data Flow
```
temples.js (Data)
    ↓
Components (Display)
    ↓
Pages (Layout)
    ↓
App (Routing)
```

## 🎨 Thiết Kế & Styling

### Color Scheme
- **Primary**: #8B4513 (Saddle Brown) - Màu chính
- **Secondary**: #D2691E (Chocolate) - Màu phụ
- **Accent**: #FFD700 (Gold) - Màu nhấn
- **Background**: #f9f9f9 (Light Gray)

### Typography
- Font chính: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Heading sizes: 3.5rem (h1) → 1.1rem (h4)
- Line height: 1.6 (body text)

### Responsive Breakpoints
```css
Desktop:  1200px+
Tablet:   768px - 1199px
Mobile:   < 768px
```

## 🔍 SEO Implementation

### 1. Meta Tags
- Title tags cho mỗi trang
- Meta descriptions
- Keywords
- Open Graph tags (social sharing)
- Twitter Card tags

### 2. Semantic HTML
```html
<header>    <!-- Navigation -->
<main>      <!-- Main content -->
<section>   <!-- Content sections -->
<article>   <!-- Individual items -->
<footer>    <!-- Footer -->
```

### 3. Performance
- Lazy loading images
- Code splitting
- Minified CSS/JS
- Optimized bundle size

### 4. Mobile Optimization
- Viewport meta tag
- Mobile-friendly design
- Touch-friendly buttons
- Fast loading

## 📱 Responsive Features

### Desktop (1200px+)
- 2-column layouts
- Full navigation
- Large images
- Hover effects

### Tablet (768px - 1199px)
- Adjusted grid layouts
- Optimized spacing
- Touch-friendly elements

### Mobile (< 768px)
- Single column layouts
- Hamburger menu ready
- Larger touch targets
- Optimized font sizes

## ♿ Accessibility Features

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Arrow keys for navigation

### Screen Readers
- Semantic HTML
- ARIA labels
- Alt text for images
- Skip links

### Visual
- Color contrast (WCAG AA)
- Focus indicators
- Clear hierarchy
- Readable fonts

## 🚀 Performance Optimization

### Image Optimization
```javascript
<img 
  src={temple.image} 
  alt={temple.name}
  loading="lazy"  // Lazy loading
/>
```

### Code Splitting
- React Router handles route-based splitting
- Components are modular
- CSS is organized by section

### Bundle Size
- Minimal dependencies
- Tree-shaking enabled
- Production build optimized

## 📊 SEO Checklist

- ✅ Meta tags on all pages
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast page load
- ✅ Structured data ready
- ✅ Sitemap ready
- ✅ Robots.txt ready
- ✅ Open Graph tags
- ✅ Canonical URLs
- ✅ Alt text for images

## 🔧 Customization Guide

### Thêm Trang Mới

1. Tạo file trong `src/pages/NewPage.js`:
```javascript
import { Helmet } from 'react-helmet-async';

const NewPage = () => {
  return (
    <>
      <Helmet>
        <title>Tên trang - Trà Vinh</title>
        <meta name="description" content="..." />
      </Helmet>
      <div className="container">
        {/* Content */}
      </div>
    </>
  );
};

export default NewPage;
```

2. Thêm route trong `App.js`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

3. Thêm link trong `Header.js`:
```javascript
<li><Link to="/new-page">Trang mới</Link></li>
```

### Thêm Component Mới

1. Tạo file trong `src/components/NewComponent.js`
2. Export component
3. Import và sử dụng trong pages

### Thay Đổi Dữ Liệu

Chỉnh sửa `src/data/temples.js`:
```javascript
export const temples = [
  {
    id: 1,
    name: "...",
    // ... other properties
  }
];
```

## 🐛 Troubleshooting

### Port 3000 đã được sử dụng
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Dependencies conflict
```bash
npm install --legacy-peer-deps
```

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

## 📈 Performance Metrics

### Target Metrics
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

### Optimization Tips
1. Compress images
2. Enable gzip compression
3. Use CDN for assets
4. Minimize CSS/JS
5. Cache static files

## 🔐 Security Best Practices

- ✅ No sensitive data in code
- ✅ HTTPS ready
- ✅ XSS protection (React escapes by default)
- ✅ CSRF protection ready
- ✅ Input validation on forms
- ✅ No hardcoded credentials

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Web Accessibility](https://www.w3.org/WAI/)
- [SEO Best Practices](https://developers.google.com/search)

## 🎓 Learning Path

1. Hiểu React basics (Components, Props, State)
2. Học React Router (Navigation, Routes)
3. Hiểu CSS Grid & Flexbox
4. Học SEO fundamentals
5. Hiểu Accessibility standards

## 📞 Support

Nếu cần hỗ trợ:
1. Kiểm tra console cho errors
2. Xem README.md
3. Kiểm tra component props
4. Validate data structure

---

**Happy Coding! 🚀**
