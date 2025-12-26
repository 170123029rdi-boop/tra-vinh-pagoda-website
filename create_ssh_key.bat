@echo off
echo 🔑 Tao SSH Key cho GitHub...
echo.

REM Tao thu muc .ssh trong thu muc hien tai
if not exist ".ssh" mkdir .ssh

REM Tao SSH key
echo Nhap email cua ban:
set /p email="Email: "

echo.
echo Dang tao SSH key...
ssh-keygen -t rsa -b 4096 -C "%email%" -f ".ssh/id_rsa" -N ""

echo.
echo ✅ SSH key da duoc tao thanh cong!
echo.

REM Hien thi public key
echo 📋 Day la PUBLIC KEY cua ban (copy toan bo):
echo ================================================
type ".ssh\id_rsa.pub"
echo ================================================
echo.

REM Copy vao clipboard (neu co clip command)
clip < ".ssh\id_rsa.pub" 2>nul && echo ✅ Da copy vao clipboard! || echo ⚠️ Hay copy thu cong

echo.
echo 📝 HUONG DAN TIEP THEO:
echo 1. Copy public key o tren
echo 2. Vao GitHub.com → Settings → SSH and GPG keys
echo 3. Click "New SSH key"
echo 4. Paste public key vao
echo 5. Click "Add SSH key"
echo.

REM Test SSH connection
echo 🧪 Test ket noi SSH:
ssh -T git@github.com -i ".ssh/id_rsa" -o StrictHostKeyChecking=no

echo.
echo 🎉 Hoan thanh! SSH key da san sang su dung.
pause