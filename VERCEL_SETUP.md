# Vercel Deployment Setup

## Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add these three variables:

   **Variable Name:** `EMAIL_USER`
   **Value:** `darshilpatel494@gmail.com`
   
   **Variable Name:** `EMAIL_PASSWORD`
   **Value:** `cqyj pyxe rsmo grlt`
   
   **Variable Name:** `EMAIL_TO`
   **Value:** `Info@loyaltyglobal.co.in`

5. Make sure to select all environments (Production, Preview, Development)
6. Click "Save"
7. Redeploy your application

## Important Notes:
- Environment variables are NOT automatically deployed from .env.local
- You MUST add them manually in Vercel dashboard
- After adding variables, you need to redeploy (not just rebuild)

## To Redeploy:
- Go to "Deployments" tab
- Click the three dots on the latest deployment
- Click "Redeploy"
- OR push a new commit to trigger automatic deployment
