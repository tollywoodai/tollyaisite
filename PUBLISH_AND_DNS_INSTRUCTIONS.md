# Complete Guide: Publishing TollywoodAI.com on Lovable with GoDaddy DNS

## Step 1: Publishing Your Website on Lovable

### 1.1 Publish Your Project
1. **Click the "Publish" button** in the top-right corner of your Lovable editor
2. **Choose your deployment settings:**
   - Environment: Production
   - Build optimization: Enabled
3. **Wait for build completion** (usually 2-3 minutes)
4. **Note your temporary URL** (e.g., `your-project.lovable.app`)

### 1.2 Test Your Deployed Site
- Visit your temporary URL to ensure everything works correctly
- Test all pages: Home, Tools, Gallery, Blog, Contact
- Verify all images and functionality work as expected

## Step 2: Configure Custom Domain in Lovable

### 2.1 Add Your Domain
1. **Go to Project Settings** → **Domains**
2. **Click "Connect Domain"**
3. **Enter your domain:** `tollywoodai.com`
4. **Follow the verification steps**
5. **Lovable will provide DNS records** to configure

### 2.2 Note the Required DNS Records
Lovable will show you these records (always use the exact ones provided):
- **A Record for root domain (@):** 185.158.133.1
- **A Record for www subdomain:** 185.158.133.1

## Step 3: Configure DNS in GoDaddy

### 3.1 Access GoDaddy DNS Management
1. **Log into your GoDaddy account** at godaddy.com
2. **Go to "My Products"** → **"All Products and Services"**
3. **Find your domain** `tollywoodai.com` and click **"DNS"**
4. **You'll see the DNS Management page**

### 3.2 Remove Conflicting Records
**IMPORTANT:** Delete any existing conflicting records:
- Remove any A records for `@` (root domain) that don't point to 185.158.133.1
- Remove any A records for `www` that don't point to 185.158.133.1
- Remove any CNAME records for `@` (root domain cannot have CNAME)
- **Keep MX records** if you have email setup

### 3.3 Add Required A Records

**For Root Domain (tollywoodai.com):**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** 185.158.133.1
- **TTL:** 600 seconds (10 minutes) or use default

**For WWW Subdomain (www.tollywoodai.com):**
- **Type:** A
- **Name:** www
- **Value:** 185.158.133.1
- **TTL:** 600 seconds (10 minutes) or use default

### 3.4 Save Changes
- **Click "Save"** for each record
- **Verify both records are listed** in your DNS management panel

## Step 4: Wait for DNS Propagation

### 4.1 Propagation Timeline
- **Initial propagation:** 30 minutes to 2 hours
- **Full global propagation:** Up to 24-48 hours
- **SSL certificate generation:** Automatic after DNS verification

### 4.2 Check Propagation Status
Use these tools to verify your DNS changes:
- **DNSChecker.org:** https://dnschecker.org
- **WhatsMyDNS.net:** https://whatsmydns.net
- Search for `tollywoodai.com` and verify it points to 185.158.133.1

## Step 5: Verify Domain in Lovable

### 5.1 Domain Verification
1. **Return to Lovable** → **Project Settings** → **Domains**
2. **Click "Verify" next to your domain**
3. **Wait for verification** (may take a few attempts as DNS propagates)
4. **Status should change to "Verified"**

### 5.2 SSL Certificate
- **Automatic generation:** Lovable automatically provisions SSL
- **HTTPS redirect:** Automatically configured
- **Certificate type:** Let's Encrypt (trusted by all browsers)

## Step 6: Final Testing

### 6.1 Test All URLs
Once verification is complete, test:
- **http://tollywoodai.com** (should redirect to https)
- **https://tollywoodai.com** (should work)
- **http://www.tollywoodai.com** (should redirect to https)
- **https://www.tollywoodai.com** (should work)

### 6.2 Verify Functionality
- Test all pages and navigation
- Verify contact form works
- Check all images load correctly
- Test newsletter subscription
- Verify mobile responsiveness

## Troubleshooting Common Issues

### DNS Not Propagating
- **Wait longer:** DNS can take up to 48 hours
- **Clear browser cache:** Hard refresh (Ctrl+F5)
- **Try incognito mode:** Bypasses local DNS cache
- **Use different network:** Try mobile data vs WiFi

### Domain Not Verifying in Lovable
- **Check DNS records:** Ensure A records point to 185.158.133.1
- **Remove conflicting records:** Delete old A/CNAME records
- **Wait and retry:** Click verify again after 30 minutes
- **Contact support:** If issues persist after 48 hours

### SSL Certificate Issues
- **Wait for propagation:** SSL generates after DNS verification
- **Check certificate status:** In Lovable domain settings
- **Force refresh:** Clear browser cache and cookies
- **Mixed content warnings:** Ensure all resources use HTTPS

### Email and Other Services
- **MX Records:** Keep existing email MX records unchanged
- **Subdomains:** Add separately in Lovable if needed
- **Third-party services:** Update any services pointing to old domain

## Security Best Practices

### 6.1 SSL/HTTPS
- **Always use HTTPS:** Lovable enforces this automatically
- **HSTS enabled:** HTTP Strict Transport Security
- **Modern TLS:** Latest encryption standards

### 6.2 Domain Security
- **Enable domain lock:** In GoDaddy account settings
- **Two-factor authentication:** On both GoDaddy and Lovable accounts
- **Regular monitoring:** Check domain expiration dates

## Contact Information Update Confirmation

Your contact information has been updated to:
- **Email:** tollywoodaics@gmail.com
- **Phone:** +1 (555) 123-4567
- **Address:** Los Angeles, CA, United States 90210
- **Currency:** USD (reflected in pricing mentions)
- **Time Zone:** PST (Pacific Standard Time)

## Final Checklist

- [ ] Website published on Lovable
- [ ] Domain added in Lovable settings
- [ ] A records added in GoDaddy (@ and www → 185.158.133.1)
- [ ] Old conflicting DNS records removed
- [ ] DNS propagation verified using online tools
- [ ] Domain verified in Lovable
- [ ] SSL certificate automatically generated
- [ ] All URLs working with HTTPS
- [ ] Contact information updated to USA/USD
- [ ] All functionality tested

## Support Resources

- **Lovable Support:** Available in project settings
- **GoDaddy Support:** Available in your GoDaddy account
- **DNS Tools:** DNSChecker.org, WhatsMyDNS.net
- **SSL Check:** SSLLabs.com/ssltest

Your TollywoodAI website will be live at:
- **https://tollywoodai.com**
- **https://www.tollywoodai.com**

Both URLs will automatically redirect to the secure HTTPS version with a valid SSL certificate.