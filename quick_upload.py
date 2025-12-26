import os
import base64
import requests

# CẤU HÌNH - THAY ĐỔI THÔNG TIN CỦA BẠN
TOKEN = "ghp_your_token_here"
USERNAME = "your_username" 
REPO = "tra-vinh-website"

headers = {"Authorization": f"token {TOKEN}"}

def create_repo():
    url = "https://api.github.com/user/repos"
    data = {"name": REPO, "private": False}
    requests.post(url, headers=headers, json=data)
    print("✅ Repository created")

def upload(file_path, github_path):
    with open(file_path, 'rb') as f:
        content = base64.b64encode(f.read()).decode()
    
    url = f"https://api.github.com/repos/{USERNAME}/{REPO}/contents/{github_path}"
    data = {"message": f"Add {github_path}", "content": content}
    
    response = requests.put(url, headers=headers, json=data)
    if response.status_code in [200, 201]:
        print(f"✅ {github_path}")
    else:
        print(f"❌ {github_path}")

# Tạo repo
create_repo()

# Upload các file quan trọng
base_path = r"D:\Đồ án cơ sở ngành\Xây dựng website giới thiệu các ngôi chùa nổi tiếng của tỉnh Trà Vinh sử dụng React.js\tra-vinh-website"

important_files = [
    "package.json",
    "public/index.html",
    "src/App.js",
    "src/index.js",
    "src/components/Header.js",
    "src/components/Footer.js",
    "src/components/Hero.js",
    "src/components/About.js",
    "src/components/TempleCard.js",
    "src/components/TemplesList.js",
    "src/pages/Home.js",
    "src/pages/TempleDetail.js",
    "src/pages/Contact.js",
    "src/context/DataContext.js",
    "src/styles/main.css",
    "README.md"
]

for file in important_files:
    file_path = os.path.join(base_path, file)
    if os.path.exists(file_path):
        upload(file_path, file)

print(f"🎉 Done! Check: https://github.com/{USERNAME}/{REPO}")