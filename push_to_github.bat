@echo off
echo 🚀 PUSH CODE LEN GITHUB
echo ====================
echo.

REM Accept GitHub SSH fingerprint
echo ✅ Accept GitHub SSH fingerprint...
echo y | ssh -T git@github.com -o StrictHostKeyChecking=no >nul 2>&1

REM Kiem tra Git config
git config --global user.name >nul 2>&1
if errorlevel 1 (
    set /p name="Ten cua ban: "
    set /p email="Email cua ban: "
    git config --global user.name "%name%"
    git config --global user.email "%email%"
)

REM Khoi tao Git neu chua co
if not exist ".git" (
    echo 🔧 Khoi tao Git repository...
    git init
    git add .
    git commit -m "Initial commit: Tra Vinh Temples Website"
)

REM Nhap thong tin GitHub
echo 📝 Nhap thong tin GitHub:
set /p username="GitHub username: "
set /p reponame="Repository name (tra-vinh-website): "

if "%reponame%"=="" set reponame=tra-vinh-website

REM Them remote origin
git remote remove origin >nul 2>&1
git remote add origin git@github.com:%username%/%reponame%.git

REM Push len GitHub
echo 🚀 Dang push len GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Loi push! Thu dung HTTPS:
    git remote remove origin
    git remote add origin https://github.com/%username%/%reponame%.git
    git push -u origin main
    
    if errorlevel 1 (
        echo ❌ Van loi! Vui long:
        echo 1. Tao repository tren GitHub: %reponame%
        echo 2. Chon Public
        echo 3. KHONG tick "Initialize with README"
    ) else (
        echo ✅ Push thanh cong bang HTTPS!
    )
) else (
    echo ✅ Push thanh cong bang SSH!
)

echo.
echo 🎉 Repository: https://github.com/%username%/%reponame%
echo.
pause