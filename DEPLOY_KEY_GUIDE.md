# HƯỚNG DẪN SỬ DỤNG DEPLOY KEY

## 📋 Deploy Key đã được tạo!

### Public Key (Thêm vào GitHub):
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFHzbQukNMD54WL4+6qnTUji/uT49B/lwcMsUWPbXEeD tra-vinh-deploy-key
```

## 🔧 Cách thêm Deploy Key vào GitHub:

### Bước 1: Vào GitHub Repository
1. Mở repository: https://github.com/[USERNAME]/tra-vinh-pagoda-website
2. Click **Settings** (góc phải)

### Bước 2: Thêm Deploy Key
1. Sidebar bên trái → Click **Deploy keys**
2. Click **Add deploy key**
3. **Title**: `Render Deploy Key`
4. **Key**: Copy public key ở trên
5. ✅ Tích **Allow write access** (nếu cần push)
6. Click **Add key**

## 🚀 Cách sử dụng với Render:

### Trên Render Dashboard:
1. Vào Static Site settings
2. **Deploy Key**: Paste private key từ file `.ssh/deploy_key`
3. Save và deploy lại

## 📁 File location:
- Public key: `.ssh/deploy_key.pub`
- Private key: `.ssh/deploy_key`

## ⚠️ LƯU Ý:
- KHÔNG share private key với ai
- Private key chỉ dùng cho Render
- Public key thêm vào GitHub