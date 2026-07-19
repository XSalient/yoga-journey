# Journey Within — Design System MVP

Responsive React/TypeScript web app with Tailwind CSS. Six-page design covering homepage, experiences, and enquiry form.

## ✅ What's Built

- **Design tokens** (colors, typography, spacing, shadows) in Tailwind config
- **Reusable components**: Button, FormField, Cards (Experience/Service/Benefit/Testimonial)
- **Pages**: HomePage, PlanYourJourney
- **Form validation** with Zod + react-hook-form
- **Data arrays**: Experiences, benefits, process steps, testimonials
- **Responsive layout**: Mobile-first Tailwind CSS
- **Header/Footer** with navigation

## 🚀 Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📁 Project Structure

```
src/
  components/    # Button, FormField, EnquiryForm, Cards, Layout
  pages/         # HomePage, PlanYourJourney
  data/          # Experiences, benefits, testimonials
  lib/           # Validation schemas
  styles/        # Tailwind globals.css
  types/         # TypeScript interfaces
  App.tsx        # Main app + client-side routing
  main.tsx       # Entry point
```

## 🎨 Design Tokens

All tokens defined in `tailwind.config.ts`:
- **Colors**: Forest, Terra, Gold, BG, Text, Success, Error, Border
- **Typography**: Serif (Cormorant), Sans (Inter); 8 scales
- **Spacing**: 11 values (xs–4xl)
- **Shadows**: 4 levels (sm–xl)
- **Border radius**: sm, md, lg

## 📝 Placeholders to Replace

- `[LOGO]` → Add logo image or component
- `[IMAGE]` tags → Replace with actual images (imageUrl in data)
- `[CONTACT EMAIL]` → Add email
- `[WHATSAPP_NUMBER]` → Add WhatsApp link
- `[PRIVACY POLICY CONTENT]` → Add privacy policy
- `[COMPANY NAME]`, `[REGISTERED ADDRESS]` → Add company info

## 🔗 Quick Links

- Form submission currently logs to console
- WhatsApp links use placeholder: `https://wa.me/[WHATSAPP_NUMBER]`
- All routes are client-side (no backend needed yet)

## 🏗️ Next Steps

1. Add images to data/experiences.ts
2. Replace placeholders in Header/Footer
3. Connect form to backend (currently logs to console)
4. Deploy to Vercel/Netlify
