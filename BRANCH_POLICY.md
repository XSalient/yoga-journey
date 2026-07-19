# 🎯 BRANCH POLICY — Strict Single Branch for Production

**Effective Date:** 2026-07-19  
**Status:** ✅ ENFORCED  
**For:** ALL developers, AI assistants, and automation

---

## ⚡ THE RULE

### ✅ ACTIVE BRANCH (Use This — 1 Only)
- **`main`** ← **THE ONLY BRANCH** — Work here, push here, auto-deploys

### ❌ ALL OTHER BRANCHES (Delete These)
- ❌ `master` (OBSOLETE — DELETE)
- ❌ `claude/journey-within-mvp-340x2x` (OBSOLETE — DELETE)
- ❌ `claude/journey-within-mvp-progress-gab0jy` (OBSOLETE — DELETE)
- ❌ `claude/project-status-sync-check-x73294` (TEMPORARY — DELETE)
- ❌ Any other branch not named `main` (DELETE)

---

## 🚫 What NOT To Do

```bash
❌ git checkout -b feature/something        # DON'T create feature branches
❌ git checkout claude/*                     # DON'T use old branches
❌ git push origin master                    # DON'T push to master
❌ git branch -m main anything_else          # DON'T rename main
❌ git checkout -b hotfix/something          # DON'T create hotfix branches
❌ git checkout -b bugfix/something          # DON'T create bugfix branches
```

### Why?
- Multiple branches = confusion
- Branches don't get merged = lost work
- AI assistants pick wrong branch = broken code
- Hard to track what's production = deployment errors

---

## ✅ What TO Do

```bash
✅ git checkout main                        # Always work on main
✅ git pull origin main                     # Always get latest
✅ # Edit files
✅ git add . && git commit -m "message"    # Commit with clear message
✅ git push origin main                     # Push to production
```

**That's it. One branch. One workflow. Simple.**

---

## 🗑️ Cleanup (Required)

### Local Branches to Delete (Already Done)
```bash
✅ Deleted: claude/project-status-sync-check-x73294
```

### Remote Branches to Delete (Needs Admin)
```bash
⏳ Pending: claude/journey-within-mvp-340x2x
⏳ Pending: claude/journey-within-mvp-progress-gab0jy  
⏳ Pending: claude/project-status-sync-check-x73294
```

**Action Required:** Contact GitHub admin to delete remote branches (permissions restricted)

---

## 📋 Branch Lifecycle

### One Branch, One Lifecycle
- **Birth**: Only `main` exists
- **Life**: All work happens on `main`
- **Death**: `main` never dies — it's eternal

### The Workflow
1. Pull from `main`
2. Edit files
3. Commit to `main`
4. Push to `main`
5. Vercel auto-deploys from `main`
6. Repeat

### If You Accidentally Create A Branch
```bash
# Delete it immediately
git checkout main                          # Switch back to main
git branch -D accidental-branch-name       # Delete local
git push origin --delete accidental-branch-name  # Delete remote
# Then continue work on main
```

---

## 🤖 For AI Assistants

### Before Starting Work
1. Read this file (BRANCH_POLICY.md)
2. Verify you're on `main`: `git branch` (should show `* main`)
3. Never create a new branch
4. Never switch to a different branch

### If You Accidentally Create a Branch
```bash
# Undo it immediately:
git checkout main                          # Switch back to main
git branch -D accidental-branch            # Delete local branch
git push origin --delete accidental-branch # Delete remote
# Then continue work on main
```

### Required Verification Before Any Work
```bash
# Run this:
git status
# Must show:
# On branch main
# Your branch is up to date with 'origin/main'.
# nothing to commit, working tree clean
```

If you see anything else (different branch, uncommitted changes, etc.), STOP and ask for clarification.

---

## ✅ Pre-Work Checklist (for AI Assistants)

Before making ANY changes:

```bash
✓ git branch              # Shows: * main (nothing else)
✓ git status              # Shows: "On branch main"
✓ git log --oneline -1    # Shows: latest commit
✓ git pull origin main    # Shows: "Already up to date"
✓ npm run build           # Shows: 0 errors
```

All checks must pass. If any fail, DO NOT PROCEED.

---

## 🚀 The Only Allowed Workflow

```
1. git checkout main
        ↓
2. git pull origin main
        ↓
3. Verify: git status (clean)
        ↓
4. Edit files
        ↓
5. Verify: npm run build (0 errors)
        ↓
6. git add .
        ↓
7. git commit -m "Clear message"
        ↓
8. git push origin main
        ↓
9. Vercel auto-deploys (30-60s)
        ↓
10. Check: https://yoga-journey.vercel.app/ ✅
```

**No branches. No PRs. No delays. No confusion.**

---

## 🛡️ Safeguards

### This Repository Enforces:
- ✅ `main` is the only production branch
- ✅ All code must go through `main`
- ✅ No merging from other branches
- ✅ Auto-deploy only from `main`

### If Someone Breaks This Rule:
- Any commits to non-main branches are NOT deployed
- Any branches created will NOT be merged
- Work on wrong branches = LOST WORK
- Always use `main`

---

## ❓ FAQ

**Q: What if I need to work on a feature?**  
A: Work on `main`. Commit. Push. Deploy. Done.

**Q: What if I need to fix a bug?**  
A: Work on `main`. Commit. Push. Deploy. Done.

**Q: What if there's a conflict?**  
A: Pull latest from main. Resolve locally. Commit. Push. Done.

**Q: What if I accidentally created a branch?**  
A: Delete it immediately:
```bash
git checkout main
git branch -D accidental-name
git push origin --delete accidental-name
```

**Q: What if I committed to the wrong branch?**  
A: 
```bash
git log --oneline               # Find your commit hash
git checkout main
git cherry-pick COMMIT_HASH     # Move commit to main
git push origin main
git branch -D wrong-branch      # Delete wrong branch
```

**Q: Can I create a pull request?**  
A: NO. Work directly on `main`. No PRs. No feature branches.

---

## 📝 Branch Status

### Active (Use This)
| Branch | Purpose | Status |
|--------|---------|--------|
| `main` | Production code | ✅ ONLY BRANCH |

### Obsolete (Don't Use - Delete)
| Branch | Status | Action |
|--------|--------|--------|
| `master` | ❌ REDUNDANT | DELETE (already deleted locally) |
| `claude/journey-within-mvp-340x2x` | ❌ STALE | DELETE |
| `claude/journey-within-mvp-progress-gab0jy` | ❌ MERGED | DELETE |
| `claude/project-status-sync-check-x73294` | ❌ TEMP | DELETE |

---

## 🎯 Summary

| Aspect | Rule |
|--------|------|
| How many branches? | **1 only** (main) |
| Where to work? | **main only** |
| How to create new work? | **Work directly on main** |
| How to deploy? | **Push to main** |
| What about feature branches? | **No feature branches** |
| What about PRs? | **No PRs** |
| What about master/dev/staging? | **No other branches** |
| Can AI create branches? | **NO** |
| What if AI creates branch? | **Delete immediately** |

---

## 🚨 Red Flags (Stop If You See These)

- ❌ Creating a new branch
- ❌ Switching to a different branch
- ❌ Seeing more than 2 active branches
- ❌ Branches with uncommitted changes
- ❌ Old branches still existing
- ❌ Anything not on `main`

If you see a red flag, STOP and contact admin.

---

## ✅ Enforcement

This policy is enforced by:
1. **Documentation** (this file)
2. **Automation** (Vercel only deploys from main)
3. **Git History** (all commits must be on main)
4. **Status Checks** (AI assistants verify branch before working)

---

**Effective:** 2026-07-19  
**Status:** ✅ ACTIVE  
**Applies To:** All developers, AI assistants, automation  
**Last Updated:** 2026-07-19

**REMEMBER: `main` branch only. No exceptions.**
