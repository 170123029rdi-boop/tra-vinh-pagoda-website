@echo off
echo 🚀 SETUP GIT VA GITHUB CHO DU AN TRA VINH
echo ==========================================
echo.

REM Kiem tra Git da cai chua
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git chua duoc cai dat!
    echo Vui long download Git tai: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git da duoc cai dat
echo.

REM Cau hinh Git
echo 📝 Cau hinh Git:
set /p name="Nhap ten cua ban: "
set /p email="Nhap email cua ban: "

git config --global user.name "%name%"
git config --global user.email "%email%"

echo ✅ Da cau hinh Git
echo.

REM Tao SSH key
echo 🔑 Tao SSH key...
if not exist ".ssh" mkdir .ssh

ssh-keygen -t rsa -b 4096 -C "%email%" -f ".ssh/id_rsa" -N ""

echo.
echo ✅ SSH key da duoc tao!
echo.

REM Hien thi public key
echo 📋 PUBLIC KEY (copy toan bo noi dung nay):
echo ================================================
type ".ssh\id_rsa.pub"
echo ================================================
echo.

REM Copy vao clipboard
clip < ".ssh\id_rsa.pub" 2>nul && echo ✅ Da copy vao clipboard!

echo.
echo 📝 BUOC TIEP THEO:
echo 1. Vao GitHub.com → Settings → SSH and GPG keys
echo 2. Click "New SSH key"
echo 3. Title: "My Computer"
echo 4. Paste public key (Ctrl+V)
echo 5. Click "Add SSH key"
echo.
echo Nhan Enter sau khi da them SSH key vao GitHub...
pause

REM Khoi tao Git repository
echo.
echo 🔧 Khoi tao Git repository...
git init
git add .
git commit -m "Initial commit: Tra Vinh Temples Website"

echo.
echo 📝 Nhap thong tin GitHub repository:
set /p username="GitHub username: "
set /p reponame="Repository name (mac dinh: tra-vinh-website): "

if "%reponame%"=="" set reponame=tra-vinh-website

REM Them remote origin
git remote add origin git@github.com:%username%/%reponame%.git

echo.
echo 🚀 Push code len GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Loi push! Co the ban chua tao repository tren GitHub
    echo Vui long:
    echo 1. Vao GitHub.com
    echo 2. Click "New repository"
    echo 3. Ten repository: %reponame%
    echo 4. Chon Public
    echo 5. KHONG tick "Initialize with README"
    echo 6. Click "Create repository"
    echo 7. Chay lai script nay
) else (
    echo.
    echo 🎉 THANH CONG!
    echo Repository: https://github.com/%username%/%reponame%
)

echo.
pause