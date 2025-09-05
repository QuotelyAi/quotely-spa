# Fix www.tryquotely.com DNS Configuration

## Current Status
- ✅ **tryquotely.com** - Valid Configuration
- ❌ **www.tryquotely.com** - DNS Change Required
- ✅ **quotely-spa-one.vercel.app** - Valid Configuration
- ❌ **tryqoutely.com** (typo) - Remove this domain

## Required DNS Change for www.tryquotely.com

### Add this CNAME record in your Vercel DNS settings:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 60
```

## Steps to Fix:

1. **Go to Vercel Domain Settings:**
   https://vercel.com/account/domains/tryquotely.com

2. **In the DNS Records section, add:**
   - Click "Add Record"
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `60`
   - Click "Save"

3. **Remove the typo domain:**
   - Go to project settings
   - Find "tryqoutely.com" in domains list
   - Click remove/delete

## After DNS Update:
- Wait 5-10 minutes for DNS propagation
- Both tryquotely.com and www.tryquotely.com will work
- Site will redirect properly between www and non-www

## Your Live URLs Will Be:
- https://tryquotely.com ✅
- https://www.tryquotely.com (after DNS fix)
- https://quotely-spa-one.vercel.app ✅ (always available)