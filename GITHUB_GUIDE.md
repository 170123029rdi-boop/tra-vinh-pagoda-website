# Hướng Dẫn Push Code Lên GitHub

## Cách 1: Sử dụng script tự động
1. Chạy file `push_to_github.bat`
2. Làm theo hướng dẫn trên màn hình
3. Nhập GitHub username và repository name

## Cách 2: Thực hiện thủ công

### Bước 1: Tạo repository trên GitHub
1. Đăng nhập GitHub
2. Click "New repository"
3. Đặt tên: `tra-vinh-pagoda-website`
4. Chọn Public hoặc Private
5. KHÔNG tích "Initialize with README"
6. Click "Create repository"

### Bước 2: Push code
```bash
git add .
git commit -m "Initial commit: Tra Vinh Pagoda Website"
git branch -M main
git remote add origin https://github.com/[USERNAME]/tra-vinh-pagoda-website.git
git push -u origin main
```

## Lưu ý quan trọng
- Thay [USERNAME] bằng GitHub username của bạn
- Đảm bảo đã cài đặt Git trên máy
- Có thể cần nhập GitHub username/password hoặc token

## Cập nhật code sau này
```bash
git add .
git commit -m "Update message"
git push
```