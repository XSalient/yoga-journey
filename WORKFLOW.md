# Journey Within MVP — Development Workflow

## 📌 Single Source of Truth

**`main` branch = PRODUCTION (Latest deployable code)**
- Always contains the latest, tested, working code
- Auto-deploys to Vercel on every push
- All new work is merged here
- URL: https://yoga-journey.vercel.app/

**`master` branch = BACKUP (Mirrors main exactly)**
- Synced with main (same commit always)
- Emergency fallback if needed
- Do NOT work on this branch

---

## 🔄 Development Workflow

### For any new work:

**1. Start from main (NEVER create feature branches)**
```bash
git checkout main
git pull origin main
```

**2. Make your changes directly on main**
```bash
# Edit files...
git add .
git commit -m "Descriptive message"
git push origin main
```

**3. Master syncs automatically**
- `master` is kept in sync with `main` via CI/CD
- If manual sync needed: `git checkout master && git reset --hard origin/main && git push origin master`

---

## 🌳 Branch Rules

### Active Branches:
- **main** → Work here, deploy from here
- **master** → Automatic mirror, do not edit

### Obsolete Branches (Ignore/Delete):
- `claude/journey-within-mvp-340x2x` ❌ (outdated development branch)
- `claude/journey-within-mvp-progress-gab0jy` ❌ (merged, archive only)

---

## ✅ Status & Sync Points

**Check if everything is synced:**
```bash
git checkout main
git pull origin main
git status  # Should show "nothing to commit, working tree clean"

# Verify main and master are identical
git log --oneline main -1
git log --oneline master -1
# Both should show same commit hash
```

**If you're on any device:**
1. Always `git pull origin main` first
2. Make your changes
3. Always `git push origin main`
4. Vercel auto-deploys within 30 seconds

---

## 🚀 Deployment Pipeline

```
You push to main
       ↓
GitHub receives commit
       ↓
Vercel auto-deploys
       ↓
https://yoga-journey.vercel.app/ updates (30-60 seconds)
       ↓
master syncs with main (if CI/CD enabled)
```

---

## 📋 What's in Each Branch Right Now?

### ✅ main (defbd77)
- All 6 pages built and working
- Form email integrated (Simple Forms API)
- SPA routing working
- Responsive design
- 100% MVP complete

### ✅ master (defbd77)
- Same as main (backup)

### ❌ claude/journey-within-mvp-340x2x (408d9ea)
- Outdated development branch
- **IGNORE THIS BRANCH**
- Only contains initial work + author fix
- **Should be deleted**

### ❌ claude/journey-within-mvp-progress-gab0jy (d088cfb)
- Old development branch with MVP completion
- **IGNORE THIS BRANCH**
- Already merged into main
- **Archive only**

---

## 🔐 Never Do This

❌ Don't create feature branches  
❌ Don't work on master  
❌ Don't work on old development branches  
❌ Don't force push to main without approval  
❌ Don't rebase main  

---

## ✨ Working Across Devices

Since we have a **single source of truth** (main), you can work anywhere:

**On Desktop:**
```bash
git pull origin main
# Edit files
git push origin main
```

**On Cloud/Web IDE:**
```bash
git pull origin main
# Edit files
git push origin main
```

**On Phone (via git client):**
```bash
git pull origin main
# Edit files
git push origin main
```

**All devices stay in sync because main is the authority.**

---

## 🐛 If Something Goes Wrong

**Lost local changes?**
```bash
git checkout main
git reset --hard origin/main
```

**Vercel deployment broken?**
1. Check https://yoga-journey.vercel.app/
2. Look at Vercel dashboard build logs
3. If build failed: fix in main, push again

**Files out of sync?**
```bash
git pull origin main
git status
# Should show clean working tree
```

---

## 📝 Current Status Summary

- **Main branch**: ✅ Production-ready, all 6 pages working
- **Master branch**: ✅ Synced with main
- **Development branches**: ❌ Obsolete (should be deleted)
- **Vercel deployment**: ✅ Auto-deploys from main
- **Last push**: defbd77 (Update tracker files: MVP complete)
- **Build time**: 1.61s
- **Bundle size**: 279.64 KB JS + 18.18 KB CSS

---

## Next Steps

1. **Always pull from main first**
   ```bash
   git pull origin main
   ```

2. **Make changes and test locally**
   ```bash
   npm run dev
   ```

3. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "What changed and why"
   ```

4. **Push to main**
   ```bash
   git push origin main
   ```

5. **Vercel auto-deploys**
   - Check deployment at https://yoga-journey.vercel.app/ (30-60s)

That's it. One branch. One source of truth. Simple. ✅

---

**Last Updated**: July 19, 2026  
**Workflow Version**: 1.0 (Single Source of Truth)
