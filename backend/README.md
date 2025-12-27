# Backend API - Tra Vinh Pagoda Website

## Setup trên Render

### 1. Tạo PostgreSQL Database
1. Vào Render Dashboard → New → PostgreSQL
2. Name: `tra-vinh-db`
3. Database: `travinh`
4. User: `travinh_user`
5. Region: Singapore
6. Create Database
7. Copy **Internal Database URL**

### 2. Chạy SQL để tạo bảng
1. Vào database → Connect
2. Paste nội dung file `init.sql`
3. Execute

### 3. Deploy Backend API
1. Render Dashboard → New → Web Service
2. Connect GitHub repository
3. Name: `tra-vinh-api`
4. Root Directory: `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Environment Variables:
   - `DATABASE_URL`: paste Internal Database URL
   - `NODE_ENV`: `production`
8. Create Web Service

### 4. Cập nhật Frontend
Thay `API_URL` trong DataContext.js:
```javascript
const API_URL = 'https://tra-vinh-api.onrender.com/api';
```

## API Endpoints

- `GET /api/pagodas` - Lấy danh sách chùa
- `POST /api/pagodas` - Thêm chùa mới
- `PUT /api/pagodas/:id` - Cập nhật chùa
- `DELETE /api/pagodas/:id` - Xóa chùa
- `GET /api/posts` - Lấy bài viết
- `POST /api/posts` - Thêm bài viết
- `GET /api/landscapes` - Lấy cảnh quan
- `POST /api/landscapes` - Thêm cảnh quan
