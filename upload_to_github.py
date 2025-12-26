import os
import base64
import requests
import json
from pathlib import Path

# Cấu hình
GITHUB_TOKEN = "ghp_your_token_here"  # Thay bằng token của bạn
GITHUB_USERNAME = "your_username"     # Thay bằng username GitHub
REPO_NAME = "tra-vinh-website"
PROJECT_PATH = r"D:\Đồ án cơ sở ngành\Xây dựng website giới thiệu các ngôi chùa nổi tiếng của tỉnh Trà Vinh sử dụng React.js\tra-vinh-website"

# Headers cho API
headers = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def create_repository():
    """Tạo repository mới"""
    url = "https://api.github.com/user/repos"
    data = {
        "name": REPO_NAME,
        "description": "Website giới thiệu các ngôi chùa nổi tiếng tỉnh Trà Vinh",
        "private": False,
        "auto_init": True
    }
    
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 201:
        print(f"✅ Tạo repository thành công: {REPO_NAME}")
        return True
    elif response.status_code == 422:
        print(f"⚠️ Repository {REPO_NAME} đã tồn tại")
        return True
    else:
        print(f"❌ Lỗi tạo repository: {response.json()}")
        return False

def upload_file(file_path, github_path):
    """Upload một file lên GitHub"""
    try:
        # Đọc file
        with open(file_path, 'rb') as f:
            content = f.read()
        
        # Encode base64
        content_encoded = base64.b64encode(content).decode('utf-8')
        
        # API URL
        url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{REPO_NAME}/contents/{github_path}"
        
        # Data
        data = {
            "message": f"Add {github_path}",
            "content": content_encoded
        }
        
        # Upload
        response = requests.put(url, headers=headers, json=data)
        
        if response.status_code in [200, 201]:
            print(f"✅ Uploaded: {github_path}")
            return True
        else:
            print(f"❌ Failed: {github_path} - {response.json()}")
            return False
            
    except Exception as e:
        print(f"❌ Error uploading {file_path}: {str(e)}")
        return False

def get_files_to_upload():
    """Lấy danh sách files cần upload"""
    files_to_upload = []
    
    # Files và folders cần bỏ qua
    ignore_patterns = {
        'node_modules', '.git', 'build', 'dist', '.env', 
        '.DS_Store', 'Thumbs.db', '*.log', '.vscode', '.idea'
    }
    
    for root, dirs, files in os.walk(PROJECT_PATH):
        # Bỏ qua các thư mục không cần thiết
        dirs[:] = [d for d in dirs if d not in ignore_patterns]
        
        for file in files:
            # Bỏ qua các file không cần thiết
            if any(pattern in file for pattern in ignore_patterns):
                continue
                
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, PROJECT_PATH)
            github_path = relative_path.replace('\\', '/')
            
            files_to_upload.append((file_path, github_path))
    
    return files_to_upload

def main():
    print("🚀 Bắt đầu upload code lên GitHub...")
    
    # Kiểm tra token
    if GITHUB_TOKEN == "ghp_your_token_here":
        print("❌ Vui lòng thay GITHUB_TOKEN trong script!")
        return
    
    if GITHUB_USERNAME == "your_username":
        print("❌ Vui lòng thay GITHUB_USERNAME trong script!")
        return
    
    # Tạo repository
    if not create_repository():
        return
    
    # Lấy danh sách files
    files_to_upload = get_files_to_upload()
    print(f"📁 Tìm thấy {len(files_to_upload)} files để upload")
    
    # Upload từng file
    success_count = 0
    for file_path, github_path in files_to_upload:
        if upload_file(file_path, github_path):
            success_count += 1
    
    print(f"\n🎉 Hoàn thành! Upload thành công {success_count}/{len(files_to_upload)} files")
    print(f"🌐 Repository: https://github.com/{GITHUB_USERNAME}/{REPO_NAME}")

if __name__ == "__main__":
    main()