@echo off
echo ========================================
echo    PUSH CODE LEN GITHUB
echo ========================================

echo.
echo Buoc 1: Add tat ca file...
git add .

echo.
echo Buoc 2: Commit voi message...
set /p commit_msg="Nhap commit message (hoac Enter de dung message mac dinh): "
if "%commit_msg%"=="" set commit_msg="Update tra vinh pagoda website"
git commit -m "%commit_msg%"

echo.
echo Buoc 3: Push len GitHub...
echo Luu y: Ban can tao repository tren GitHub truoc!
echo Repository name: tra-vinh-pagoda-website
echo.
set /p github_username="Nhap GitHub username cua ban: "
set /p repo_name="Nhap ten repository (mac dinh: tra-vinh-pagoda-website): "
if "%repo_name%"=="" set repo_name=tra-vinh-pagoda-website

git branch -M main
git remote add origin https://github.com/%github_username%/%repo_name%.git
git push -u origin main

echo.
echo ========================================
echo    HOAN THANH!
echo ========================================
echo Website cua ban da duoc push len:
echo https://github.com/%github_username%/%repo_name%
echo.
pause