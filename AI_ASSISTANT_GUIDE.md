# 🤖 AI ASSISTANT GUIDE — Verify Project Status From Single Source of Truth

This guide is for ANY AI code assistant (Claude, ChatGPT, Copilot, Cursor, etc.) to verify the project status without needing conversation history or prior context.

---

## 🎯 Single Source of Truth

**Location:** `origin/main` branch (GitHub: xsalient/yoga-journey)  
**Authority:** Main branch is the ONLY production source  
**Deployment:** Auto-deploys to https://yoga-journey.vercel.app/  
**Updated:** 2026-07-19

---

## 📋 How to Verify Project Status (3 Steps)

### Step 1: Read the AI-Discoverable Files (2 minutes)

These files contain the current project status:

```
.ai-status          ← 2-min snapshot of project status
STATUS.md           ← 5-min detailed project report
WORKFLOW.md         ← Development workflow & branch strategy
BRANCHES.md         ← Branch management & cleanup guide
project.json        ← Machine-readable project metadata
.claude             ← Claude-specific context
```

**Quick Start:**
```bash
# Read these in order:
cat .ai-status      # Project status snapshot
cat STATUS.md       # Full project details
cat project.json    # Machine-readable metadata
```

---

### Step 2: Verify Git State (1 minute)

```bash
# Check current branch
git branch          # Should show: main (primary branch)

# Verify main is up-to-date
git fetch origin
git log --oneline origin/main -1
# Should show: Latest commit hash with "MVP complete" or similar

# Check if there are any pending changes
git status
# Should show: "nothing to commit, working tree clean"
```

**Expected Output:**
```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

### Step 3: Verify Build Status (1 minute)

```bash
# Verify TypeScript compiles
npm run build

# Should show:
# ✓ built in X.XXs
# 0 errors
# dist/index.html exists
```

---

## 📊 Project Status at a Glance

| Item | Status | Details |
|------|--------|---------|
| **Project Status** | ✅ COMPLETE | MVP 100% done, production ready |
| **Pages** | ✅ 6/6 BUILT | HomePage, PlanYourJourney, ExperienceDetail, About, Privacy, Layout |
| **Features** | ✅ ALL WORKING | Form email, SPA routing, responsive design, form validation |
| **Build** | ✅ PASSES | 0 TypeScript errors, 279KB JS + 18KB CSS |
| **Deployment** | ✅ LIVE | https://yoga-journey.vercel.app/ |
| **Branch** | ✅ MAIN | Single source of truth |
| **Auto-Deploy** | ✅ ENABLED | Vercel deploys on push to main |

---

## 🔍 Machine-Readable Status

Read `project.json` for structured data:

```json
{
  "project": {
    "status": "complete",
    "updated": "2026-07-19T00:00:00Z",
    "deployment": {
      "url": "https://yoga-journey.vercel.app/",
      "status": "live"
    }
  },
  "progress": {
    "overall_percent": 100,
    "status": "✅ MVP COMPLETE"
  }
}
```

---

## ✅ If All Checks Pass

You can now:
1. ✅ Confidently understand the project state
2. ✅ Work on any requested enhancements
3. ✅ Push changes to main (auto-deploys)
4. ✅ Know that main = production truth

---

## ⚠️ If Something Seems Wrong

### Scenario: `project.json` looks outdated

1. Check the timestamp: `"updated": "YYYY-MM-DD"`
2. Compare with git log: `git log --oneline -1`
3. If different dates, ask the developer to run:
   ```bash
   git add project.json && git commit -m "Update project status"
   git push origin main
   ```

### Scenario: .ai-status and STATUS.md differ

- Both should describe the same project state
- If they diverge, trust git log: `git log --oneline -10`
- The git commit history is the authoritative source

### Scenario: Build fails locally

1. Run: `npm install` (fresh dependencies)
2. Run: `npm run build` again
3. If still fails, check: `npm run dev` (dev mode may work even if build fails)

---

## 📝 Development Workflow for Any AI

If you're asked to make changes:

```bash
# 1. Verify you're on main
git checkout main

# 2. Get latest code
git pull origin main

# 3. Verify the build works
npm run build

# 4. Make your changes
# [Edit files...]

# 5. Test locally (recommended)
npm run dev

# 6. Commit with clear message
git add .
git commit -m "Clear description of what changed"

# 7. Push to production
git push origin main

# 8. Verify deployment
# → Check https://yoga-journey.vercel.app/ (30-60 seconds)
```

---

## 🚀 Key Principles

1. **One Branch:** Work ONLY on `main`
2. **One Truth:** origin/main is the authoritative source
3. **Auto-Deploy:** Push to main → Vercel deploys automatically
4. **No Feature Branches:** Don't create separate branches
5. **Sync Always:** Pull before starting, push when done

---

## 🔗 Critical Files

| File | Purpose |
|------|---------|
| `.ai-status` | AI-readable project status snapshot |
| `STATUS.md` | Detailed project report (human-readable) |
| `WORKFLOW.md` | Development workflow & git strategy |
| `project.json` | Machine-readable project metadata |
| `.claude` | Claude-specific context |
| `vercel.json` | Vercel deployment configuration |

---

## 📞 If You Have Questions

1. **"What's the current project status?"**
   - Read `.ai-status` (2 min)

2. **"How do I make changes?"**
   - Read `WORKFLOW.md`
   - Follow the development workflow above

3. **"How do I deploy?"**
   - Push to main: `git push origin main`
   - Vercel auto-deploys in 30-60 seconds
   - Check: https://yoga-journey.vercel.app/

4. **"What's the project's tech stack?"**
   - Read `project.json` → tech_stack section
   - Or read `.claude` file

5. **"What can I work on?"**
   - Check `STATUS.md` → Optional Enhancements section
   - Or check `project.json` → optional_enhancements section

---

## ✨ Summary

**For any AI assistant:** The single source of truth is the `main` branch on GitHub. All project state, status, and deployment info can be fetched from:

- `.ai-status` (project snapshot)
- `STATUS.md` (full details)
- `project.json` (machine-readable)
- Git history (authoritative source)
- Live URL (deployment status)

No need to ask for context. Just read these files and you'll know everything about the project. 🚀

---

**Last Updated:** 2026-07-19  
**For:** Any AI code assistant (Claude, ChatGPT, Copilot, etc.)  
**Status:** ✅ Current and accurate
