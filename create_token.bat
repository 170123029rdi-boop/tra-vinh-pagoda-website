@echo off
echo 🔑 HUONG DAN TAO GITHUB TOKEN
echo =============================
echo.

echo 📝 BUOC 1: Tao Personal Access Token
echo 1. Vao GitHub.com → Settings → Developer settings
echo 2. Personal access tokens → Tokens (classic)
echo 3. Generate new token (classic)
echo 4. Note: "Tra Vinh Website"
echo 5. Expiration: 90 days
echo 6. Chon scope: ✅ repo (full control)
echo 7. Generate token
echo 8. COPY TOKEN (chi hien 1 lan!)
echo.

echo 📝 BUOC 2: Su dung Token
echo - Khi push code, nhap TOKEN thay vi password
echo - Username: GitHub username
echo - Password: Paste token vua copy
echo.

echo 🔗 Link truc tiep:
echo https://github.com/settings/tokens/new
echo.

echo 📋 Cau hinh can chon:
echo Note: Tra Vinh Website
echo Expiration: 90 days
echo Scopes: [x] repo
echo.

pause

REM Mo browser den trang tao token
start https://github.com/settings/tokens/new

echo.
echo ✅ Da mo trang tao token
echo Lam theo huong dan tren de tao token
echo Sau do chay push_https.bat
echo.
pause