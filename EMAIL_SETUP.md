# Email Setup Instructions

## Steps to Configure Email:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Gmail (Recommended)**
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password:
     - Go to: https://myaccount.google.com/apppasswords
     - Select "Mail" and your device
     - Copy the 16-character password

3. **Update .env.local File**
   Open `.env.local` and update:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_TO=info@loyaltyglobal.com
   ```

4. **Restart Development Server**
   ```bash
   npm run dev
   ```

## Alternative Email Providers:

### For Outlook/Hotmail:
```
service: "hotmail"
```

### For Custom SMTP:
Replace the transporter config in `app/api/contact/route.ts`:
```javascript
const transporter = nodemailer.createTransport({
  host: "smtp.your-domain.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## Testing:
1. Fill out the contact form on your website
2. Check the email inbox specified in EMAIL_TO
3. You should receive the form submission

## Security Notes:
- Never commit `.env.local` to version control
- Use App Passwords, not your actual email password
- Keep your credentials secure
