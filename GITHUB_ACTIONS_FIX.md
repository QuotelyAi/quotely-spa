# GitHub Actions Deployment Fix Guide

## 🚀 Quotely SPA GitHub Actions Setup

This guide helps you set up and troubleshoot GitHub Actions for deploying the Quotely SPA.

---

## ✅ Quick Setup

### 1. Enable GitHub Pages
1. Go to your repository Settings
2. Navigate to Pages (under Code and automation)
3. Set Source to "Deploy from a branch"
4. Select `gh-pages` branch (will be created by the workflow)
5. Save

### 2. Required Secrets (Optional for additional platforms)

#### For Vercel Deployment:
- `VERCEL_TOKEN` - Get from https://vercel.com/account/tokens
- `VERCEL_ORG_ID` - Found in Vercel project settings
- `VERCEL_PROJECT_ID` - Found in Vercel project settings

#### For Netlify Deployment:
- `NETLIFY_AUTH_TOKEN` - Get from https://app.netlify.com/user/applications
- `NETLIFY_SITE_ID` - Found in site settings

### 3. Add Secrets to Repository
1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each secret with its value

---

## 🔧 Common Issues and Fixes

### Issue 1: Build Fails
```yaml
Error: npm ci failed
```
**Fix:** Ensure `package-lock.json` is committed to the repository.

### Issue 2: TypeScript Errors
```yaml
Error: Type errors found
```
**Fix:** The workflow is set to continue on TypeScript errors. To enforce:
- Remove `continue-on-error: true` from the type-check step
- Fix all TypeScript errors locally first

### Issue 3: Missing Dependencies
```yaml
Error: Cannot find module
```
**Fix:** 
```bash
npm install
npm ci
git add package-lock.json
git commit -m "Update package-lock.json"
git push
```

### Issue 4: Permission Denied
```yaml
Error: Permission denied to github-actions[bot]
```
**Fix:**
1. Go to Settings → Actions → General
2. Under "Workflow permissions"
3. Select "Read and write permissions"
4. Save

---

## 📝 Workflow Configuration

The `deploy.yml` workflow includes:

### Build Steps:
- ✅ Node.js 20 setup
- ✅ Dependency installation
- ✅ Linting (non-blocking)
- ✅ Type checking (non-blocking)
- ✅ Production build
- ✅ Tests (non-blocking)

### Deployment Options:
1. **GitHub Pages** (Default)
   - Automatic deployment to `gh-pages` branch
   - No additional configuration needed
   - URL: `https://[username].github.io/[repo-name]`

2. **Vercel** (Optional)
   - Requires Vercel account and secrets
   - Production deployments only
   - URL: `https://[project-name].vercel.app`

3. **Netlify** (Optional)
   - Requires Netlify account and secrets
   - Automatic preview deployments
   - URL: `https://[site-name].netlify.app`

---

## 🚦 Deployment Status

Check deployment status:
1. Go to Actions tab in your repository
2. Click on the latest workflow run
3. View detailed logs for each step

---

## 💡 Tips

### Local Testing Before Push:
```bash
# Test the build locally
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Run linting
npm run lint

# Run tests
npm test
```

### Force Deployment:
1. Go to Actions tab
2. Select "Deploy Quotely SPA"
3. Click "Run workflow"
4. Select branch and click "Run workflow"

### Custom Domain Setup:
1. Add your domain to the CNAME in deploy.yml
2. Configure DNS:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME: `[username].github.io`

---

## 🔍 Debugging

Enable debug logging:
1. Go to Settings → Secrets and variables → Actions
2. Add secret: `ACTIONS_RUNNER_DEBUG` = `true`
3. Add secret: `ACTIONS_STEP_DEBUG` = `true`

View deployment URL:
- GitHub Pages: Check Settings → Pages
- Vercel: Check Vercel dashboard
- Netlify: Check Netlify dashboard

---

## 📊 Workflow Status Badge

Add to your README.md:
```markdown
![Deploy Status](https://github.com/[username]/quotely-spa/actions/workflows/deploy.yml/badge.svg)
```

---

## 🆘 Support

If issues persist:
1. Check Actions tab for detailed error logs
2. Ensure all files are committed
3. Verify branch protection rules
4. Contact: sales@tryquotely.com

---

*Last Updated: September 2025*