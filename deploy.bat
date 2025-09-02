@echo off
echo Building Quotely SPA for production...
call npm run build

echo.
echo Build complete! The production files are in the 'dist' folder.
echo.
echo To deploy to Vercel:
echo 1. Run: vercel login (if not already logged in)
echo 2. Run: vercel --prod
echo.
echo Or if you have a different hosting provider:
echo - Upload the contents of the 'dist' folder to your web server
echo - Make sure your server is configured to serve index.html for all routes
echo.
pause