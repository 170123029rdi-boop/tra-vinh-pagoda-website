@echo off
echo Pushing to GitHub...
cd /d "D:\tra-vinh-pagoda-website"
git remote set-url origin https://github.com/170123029rdi-boop/tra-vinh-pagoda-website.git
git push -u origin main
pause