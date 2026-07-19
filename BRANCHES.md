# Branch Status & Cleanup Guide

## 🎯 Active Branch (Use This)

### ✅ main (The Only Branch)
- **Status**: PRODUCTION - Single Source of Truth
- **Auto-deploys to**: https://yoga-journey.vercel.app/
- **Work here**: Make ALL changes on this branch ONLY
- **Content**: All 6 pages, form email, responsive design, MVP complete
- **Other branches**: NONE (this is the only branch)

---

## ❌ Obsolete Branches (TO DELETE)

### ❌ master
- **Status**: REDUNDANT - DELETE
- **Why**: Backup is unnecessary when there's only one source of truth
- **Action**: Delete (already deleted locally)

### ❌ claude/journey-within-mvp-340x2x
- **Status**: OUTDATED - DELETE
- **Why**: Old development branch, no longer needed
- **Action**: DELETE (awaiting admin)

### ❌ claude/journey-within-mvp-progress-gab0jy
- **Status**: ARCHIVED - DELETE  
- **Why**: Already merged into main, no longer needed
- **Action**: DELETE (awaiting admin)

### ❌ claude/project-status-sync-check-x73294
- **Status**: TEMPORARY - DELETE
- **Why**: Task-specific branch, completed
- **Action**: DELETE (already deleted locally)

---

## ✅ What to Do Now

**Only use main:**
- ✅ Work ONLY on `main`
- ✅ Push ONLY to `main` 
- ✅ Vercel auto-deploys from `main`
- ❌ Never use any other branch
- ❌ Never create branches

**If you see GitHub suggestions for other branches:** Ignore them completely - they don't exist.

---

## 📋 Quick Reference

| Branch | Status | Action |
|--------|--------|--------|
| main | ✅ ACTIVE | Work here only |
| master | ❌ DELETE | Redundant (already deleted locally) |
| claude/journey-within-mvp-340x2x | ❌ DELETE | Stale (awaiting admin) |
| claude/journey-within-mvp-progress-gab0jy | ❌ DELETE | Stale (awaiting admin) |
| claude/project-status-sync-check-x73294 | ❌ DELETE | Temp (already deleted locally) |

---

**Last Updated**: July 19, 2026  
**Current State**: main ✅ ONLY | Obsolete branches ❌ (awaiting deletion)  
**True Single Source of Truth**: ✅ ONE BRANCH ONLY
