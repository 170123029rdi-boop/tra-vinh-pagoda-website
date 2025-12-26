@echo off
echo 📁 COPY FILES CAN THIET DE PUSH LEN GITHUB
echo ==========================================
echo.

REM Tao thu muc github-upload
if exist "github-upload" rmdir /s /q "github-upload"
mkdir "github-upload"

echo 📋 Dang copy cac file can thiet...

REM Copy package.json
if exist "package.json" (
    copy "package.json" "github-upload\" >nul
    echo ✅ package.json
) else (
    echo ❌ package.json - KHONG TIM THAY
)

REM Copy package-lock.json
if exist "package-lock.json" (
    copy "package-lock.json" "github-upload\" >nul
    echo ✅ package-lock.json
)

REM Copy README.md
if exist "README.md" (
    copy "README.md" "github-upload\" >nul
    echo ✅ README.md
) else (
    echo 📝 Tao README.md moi...
    echo # Tra Vinh Temples Website > "github-upload\README.md"
    echo. >> "github-upload\README.md"
    echo Website gioi thieu cac ngoi chua noi tieng tinh Tra Vinh >> "github-upload\README.md"
    echo. >> "github-upload\README.md"
    echo ## Cong nghe su dung >> "github-upload\README.md"
    echo - React.js >> "github-upload\README.md"
    echo - CSS3 >> "github-upload\README.md"
    echo - Responsive Design >> "github-upload\README.md"
    echo ✅ README.md (da tao moi)
)

REM Copy .gitignore
echo # Dependencies > "github-upload\.gitignore"
echo node_modules/ >> "github-upload\.gitignore"
echo /.pnp >> "github-upload\.gitignore"
echo .pnp.js >> "github-upload\.gitignore"
echo. >> "github-upload\.gitignore"
echo # Production >> "github-upload\.gitignore"
echo /build >> "github-upload\.gitignore"
echo. >> "github-upload\.gitignore"
echo # Misc >> "github-upload\.gitignore"
echo .DS_Store >> "github-upload\.gitignore"
echo .env.local >> "github-upload\.gitignore"
echo .env.development.local >> "github-upload\.gitignore"
echo .env.test.local >> "github-upload\.gitignore"
echo .env.production.local >> "github-upload\.gitignore"
echo. >> "github-upload\.gitignore"
echo # Logs >> "github-upload\.gitignore"
echo npm-debug.log* >> "github-upload\.gitignore"
echo yarn-debug.log* >> "github-upload\.gitignore"
echo yarn-error.log* >> "github-upload\.gitignore"
echo ✅ .gitignore

REM Copy thu muc public
if exist "public" (
    xcopy "public" "github-upload\public\" /E /I /Q >nul
    echo ✅ public/
) else (
    echo ❌ public/ - KHONG TIM THAY
)

REM Copy thu muc src
if exist "src" (
    xcopy "src" "github-upload\src\" /E /I /Q >nul
    echo ✅ src/
) else (
    echo ❌ src/ - KHONG TIM THAY
)

REM Copy cac file markdown
for %%f in (*.md) do (
    if not "%%f"=="README.md" (
        copy "%%f" "github-upload\" >nul
        echo ✅ %%f
    )
)

echo.
echo 🎉 HOAN THANH!
echo.
echo 📁 Tat ca file can thiet da duoc copy vao thu muc: github-upload\
echo.
echo 📋 DANH SACH FILE DA COPY:
dir "github-upload" /B
echo.
echo 📝 BUOC TIEP THEO:
echo 1. Vao thu muc github-upload\
echo 2. Chay setup_git.bat trong thu muc do
echo 3. Hoac upload thu cong len GitHub
echo.
pause