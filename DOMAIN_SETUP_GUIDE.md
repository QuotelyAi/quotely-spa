# tryquotely.com Domain Setup Guide

## Current Status
✅ Site is successfully deployed to Vercel at:
- Production URL: https://quotely-spa-one.vercel.app
- Latest deployment: https://quotely-mqg3aadvd-quotelys-projects-93b374b6.vercel.app

❌ Domain tryquotely.com is not connected (showing 404)

## Required Actions

You need to configure the domain in ONE of these ways:

### Option 1: Add Domain via Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/quotelys-projects-93b374b6/quotely-spa/settings/domains
2. Click "Add Domain"
3. Enter: tryquotely.com
4. Follow Vercel's instructions to:
   - Either transfer the domain to Vercel
   - Or update your DNS records (see Option 2)

### Option 2: Update DNS Records at Your Domain Registrar

If your domain is registered with GoDaddy, Namecheap, or another registrar:

1. Log into your domain registrar's control panel
2. Find DNS settings for tryquotely.com
3. Add these records:

**For root domain (tryquotely.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain (www.tryquotely.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Option 3: Use Vercel's Nameservers (Full DNS Transfer)

Change your domain's nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

## Verification Steps

1. After DNS changes (wait 5-30 minutes for propagation)
2. Visit: https://tryquotely.com
3. Site should load with:
   - Yellow "Quotely" branding
   - Navy blue header
   - Orange accents
   - All truthful content (no false claims)
   - Atlas Otto search (Cmd+K)

## Current Live URLs

- Vercel App: https://quotely-spa-one.vercel.app ✅ WORKING
- Custom Domain: https://tryquotely.com ❌ NEEDS DNS SETUP
- www Domain: https://www.tryquotely.com ❌ NEEDS DNS SETUP

## Support

- Vercel DNS Help: https://vercel.com/docs/concepts/projects/domains
- Check DNS Propagation: https://www.whatsmydns.net/#A/tryquotely.com

## Quick Test

Once DNS is configured, test these pages:
- Home: https://tryquotely.com/
- Blog: https://tryquotely.com/blog
- Calculator: https://tryquotely.com/calculator
- Search: Press Cmd+K or Ctrl+K