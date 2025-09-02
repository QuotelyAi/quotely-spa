# Quotely SPA Deployment Guide

## Production Build

The application has been built and is ready for deployment. The production files are located in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy to production:**
   ```bash
   cd quotely-spa
   vercel --prod
   ```

3. **Custom domain setup:**
   - Go to your Vercel dashboard
   - Add `tryquotely.com` as a custom domain
   - Update DNS records as instructed by Vercel

### Option 2: Manual Deployment

If you prefer to deploy manually to your existing hosting:

1. **Upload files:**
   - Upload all contents from the `dist` folder to your web server
   - Ensure the following structure:
     ```
     /
     ├── index.html
     ├── assets/
     │   ├── index-[hash].css
     │   └── index-[hash].js
     ```

2. **Server Configuration:**
   
   **For Apache (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **For Nginx:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy-gh": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy-gh
   ```

## Environment Configuration

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.tryquotely.com
VITE_SITE_URL=https://tryquotely.com
```

## Post-Deployment Checklist

- [ ] Verify all routes work correctly
- [ ] Test the ROI calculator functionality
- [ ] Check responsive design on mobile devices
- [ ] Verify SEO meta tags are rendering
- [ ] Test form submissions
- [ ] Check browser console for errors
- [ ] Verify SSL certificate is active
- [ ] Test page load speed

## Features Included

✅ Single Page Application with React Router
✅ Clean URLs without .html extensions
✅ Responsive design with Tailwind CSS
✅ ROI Calculator with state management
✅ SEO optimization with React Helmet
✅ Component-based architecture
✅ TypeScript for type safety
✅ Fast build with Vite

## Support

For deployment issues or questions, please refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)