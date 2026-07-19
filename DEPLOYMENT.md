# Deployment Guide

## Step 1: Push to GitHub

**Local Setup** (run these commands):

```bash
cd journey-within

# Verify remote is set
git remote -v

# If remote is wrong, update it:
git remote set-url origin https://github.com/XSalient/yoga-journey.git

# Push to GitHub
git push -u origin main
```

**If you get auth errors:**
- Use SSH key: `git remote set-url origin git@github.com:XSalient/yoga-journey.git`
- Or create a personal access token: https://github.com/settings/tokens
- Configure git: `git config --global credential.helper store`

---

## Step 2: Deploy to Vercel

**Fastest way (1-click):**

1. Go to https://vercel.com/new
2. Import Git Repository
3. Select `XSalient/yoga-journey`
4. Click "Import"
5. Vercel auto-detects Vite config
6. Click "Deploy"
7. **Done** — live at `https://yoga-journey.vercel.app`

**Environment Variables** (optional):
- None required for MVP
- Add `.env.local` if you need secrets later

**Custom Domain:**
- Settings → Domains
- Add your domain (e.g., `journey-within.com`)
- Update DNS records

---

## Step 3: Post-Deployment

After deployment, replace placeholders in your live site:

| Placeholder | File | Action |
|---|---|---|
| `[LOGO]` | Header/Footer | Add image or text logo |
| `[WHATSAPP_NUMBER]` | Footer + buttons | Add WhatsApp link |
| `[CONTACT EMAIL]` | Footer | Add contact email |
| `[IMAGE]` tags | HomePage sections | Add actual images |
| `[PRIVACY POLICY]` | Privacy page | Add full policy |

**Edit on Vercel:**
- Connect GitHub repo (automatic)
- Push changes → auto-deploys
- No need to manually deploy

---

## Continuous Deployment

Every `git push` to `main` → Vercel auto-rebuilds and deploys.

```bash
# Make changes locally
git add .
git commit -m "Update: Add company logo and WhatsApp contact"
git push origin main

# Vercel builds and deploys automatically (2-3 min)
```

---

## Troubleshooting

**Build fails:**
- Check `npm run build` locally first
- Review Vercel build logs: Settings → Build & Development Settings

**Tailwind not loading:**
- Vercel auto-handles PostCSS
- If styles missing, verify `tailwind.config.ts` exists

**Form not submitting:**
- Currently logs to console (development mode)
- To accept submissions: add backend endpoint or use third-party form service (Formspree, Getform, etc.)

---

## Next: Form Backend

To handle enquiry form submissions:

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io
2. Create account
3. Update form action in `EnquiryForm.tsx`

### Option 2: Getform
1. Similar to Formspree
2. More features + email templates

### Option 3: Custom Backend
- Build API (Node, Python, etc.)
- Connect form to your backend endpoint
- Store submissions in database

---

**Status:** Ready to deploy. Just `git push` and Vercel handles the rest.
