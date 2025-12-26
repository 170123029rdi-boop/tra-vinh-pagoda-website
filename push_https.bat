@echo off
echo 🚀 PUSH CODE LEN GITHUB (HTTPS)
echo ===============================
echo.

REM Cau hinh Git
git config --global user.name >nul 2>&1
if errorlevel 1 (
    set /p name="Ten cua ban: "
    set /p email="Email cua ban: "
    git config --global user.name "%name%"
    git config --global user.email "%email%"
    echo ✅ Da cau hinh Git
)

REM Khoi tao Git
if not exist ".git" (
    echo 🔧 Khoi tao Git...
    git init
    git add .
    git commit -m "Initial commit: Tra Vinh Temples Website"
    echo ✅ Da commit code
)

REM Nhap thong tin GitHub
echo 📝 Nhap thong tin GitHub:
set /p username="GitHub username: "
set /p reponame="Repository name (tra-vinh-website): "

if "%reponame%"=="" set reponame=tra-vinh-website

REM Xoa remote cu (neu co)
git remote remove origin >nul 2>&1

REM Them remote HTTPS
echo 🔗 Ket noi voi GitHub...
git remote add origin https://github.com/%username%/%reponame%.git
git branch -M main

REM Push len GitHub
echo 🚀 Dang push len GitHub...
echo Nhap GitHub password khi duoc hoi (hoac Personal Access Token)
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Loi push! Vui long kiem tra:
    echo 1. Da tao repository tren GitHub chua?
    echo 2. Repository name dung chua: %reponame%
    echo 3. Username dung chua: %username%
    echo 4. Password/Token dung chua?
    echo.
    echo 🔗 Tao repository tai: https://github.com/new
    echo Repository name: %reponame%
    echo Chon Public, KHONG tick "Initialize with README"
    echo.
    echo Thu lai:
    pause
    git push -u origin main
) else (
    echo.
    echo 🎉 PUSH THANH CONG!
    echo 🌐 Repository: https://github.com/%username%/%reponame%
    echo.
    echo 📝 DEPLOY LEN RENDER:
    echo 1. Vao render.com
    echo 2. New → Static Site
    echo 3. Connect GitHub repository: %reponame%
    echo 4. Build command: npm run build
    echo 5. Publish directory: build
    echo 6. Deploy!
)

echo.
pause