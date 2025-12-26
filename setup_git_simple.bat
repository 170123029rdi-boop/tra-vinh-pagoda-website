@echo off
echo 🚀 SETUP GIT SIMPLE
echo ==================
echo.

REM Kiem tra Git
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Cai Git tai: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Cau hinh Git
set /p name="Ten cua ban: "
set /p email="Email cua ban: "
git config --global user.name "%name%"
git config --global user.email "%email%"

REM Khoi tao Git
git init
git add .
git commit -m "Initial commit"

REM Thong tin GitHub
set /p username="GitHub username: "
set /p reponame="Repository name: "

REM Push len GitHub
git remote add origin https://github.com/%username%/%reponame%.git
git branch -M main
git push -u origin main

echo.
echo 🎉 XONG! Repository: https://github.com/%username%/%reponame%
pause