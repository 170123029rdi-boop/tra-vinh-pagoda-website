@echo off
echo 🚀 PUSH NHANH LEN GITHUB
echo ========================
echo.

REM Su dung SSH key co san
if exist ".ssh\id_rsa" (
    echo ✅ Tim thay SSH key
    
    REM Test SSH connection
    ssh -T git@github.com -i ".ssh\id_rsa" -o StrictHostKeyChecking=no
    
    if errorlevel 1 (
        echo ❌ SSH key chua duoc them vao GitHub
        echo Vui long them public key vao GitHub:
        echo.
        type ".ssh\id_rsa.pub"
        echo.
        pause
        exit /b 1
    )
) else (
    echo ❌ Khong tim thay SSH key
    echo Chay create_ssh_key.bat truoc
    pause
    exit /b 1
)

REM Quick setup
if not exist ".git" (
    git init
    git add .
    git commit -m "Tra Vinh Temples Website"
)

REM GitHub info
set /p username="GitHub username: "
set reponame=tra-vinh-website

REM Push
git remote remove origin >nul 2>&1
git remote add origin git@github.com:%username%/%reponame%.git
git branch -M main

echo Dang push...
git push -u origin main

if errorlevel 1 (
    echo ❌ Loi! Hay tao repository tren GitHub truoc:
    echo https://github.com/new
    echo Repository name: %reponame%
) else (
    echo ✅ THANH CONG!
    echo https://github.com/%username%/%reponame%
)

pause