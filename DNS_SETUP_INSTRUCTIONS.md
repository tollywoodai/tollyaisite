# DNS Setup Instructions for tollywoodai.com

## Setting Up Your Custom Domain with GoDaddy

To make your TollywoodAI website accessible at **tollywoodai.com**, you'll need to configure DNS records in your GoDaddy account.

### Step-by-Step Instructions:

#### 1. Access GoDaddy DNS Management
- Log into your GoDaddy account
- Go to "My Products" → "Domains" 
- Click "Manage" next to tollywoodai.com
- Select "DNS" tab

#### 2. Add Required DNS Records

**For Root Domain (tollywoodai.com):**
- **Type:** A Record
- **Name:** @ (or leave blank)
- **Value:** 185.158.133.1
- **TTL:** 600 seconds (or default)

**For WWW Subdomain (www.tollywoodai.com):**
- **Type:** A Record  
- **Name:** www
- **Value:** 185.158.133.1
- **TTL:** 600 seconds (or default)

#### 3. Remove Conflicting Records
- Delete any existing A records for @ and www that point to different IPs
- Remove any CNAME records for @ (root domain)
- Keep MX records for email (if you have email setup)

#### 4. Configure in Lovable
1. Go to your Lovable project settings
2. Navigate to **Domains** section
3. Click **Connect Domain**
4. Enter: **tollywoodai.com**
5. Follow the verification steps

### Important Notes:
- **DNS Propagation:** Changes can take 24-48 hours to fully propagate worldwide
- **SSL Certificate:** Lovable will automatically provision SSL (https) for your domain
- **Verification:** Use [DNSChecker.org](https://dnschecker.org) to verify your DNS settings

### Troubleshooting:
- If domain doesn't verify after 48 hours, check for conflicting DNS records
- Ensure no old A records are pointing elsewhere
- Contact Lovable support if issues persist

### Final Result:
Once configured, your TollywoodAI website will be accessible at:
- https://tollywoodai.com
- https://www.tollywoodai.com

Both URLs will automatically redirect to the secure HTTPS version.