# Branch Status & Cleanup Guide

## 🎯 Active Branches (Use These)

### ✅ main (Latest)
- **Status**: PRODUCTION - Single Source of Truth
- **Auto-deploys to**: https://yoga-journey.vercel.app/
- **Work here**: Make all changes on this branch
- **Content**: All 6 pages, form email, responsive design, MVP complete

### ✅ master (Backup)
- **Status**: BACKUP - Mirrors main exactly
- **Work here**: NO - this is read-only backup
- **Syncs**: Automatically stays in sync with main

---

## ❌ Obsolete Branches (IGNORE - Should Delete)

### ❌ claude/journey-within-mvp-340x2x
- **Status**: OUTDATED - DO NOT USE
- **Why**: Only contains initial commit, doesn't have MVP
- **Should**: BE DELETED (awaiting admin access)

### ❌ claude/journey-within-mvp-progress-gab0jy
- **Status**: ARCHIVED - DO NOT USE  
- **Why**: Already merged into main, exists only for reference
- **Should**: BE DELETED (awaiting admin access)

---

## ✅ What to Do Now

**Ignore the obsolete branches completely:**
- ✅ Work on `main` - this is your only active development branch
- ✅ Push to `main` - Vercel auto-deploys
- ❌ Don't create pull requests from old branches
- ❌ Don't compare against them

**If you see GitHub suggestions for old branches:** Just ignore them - they're stale.

---

## 📋 Quick Reference

| Branch | Status | Action |
|--------|--------|--------|
| main | ✅ ACTIVE | Work here, push here |
| master | ✅ BACKUP | Auto-syncs, don't touch |
| claude/journey-within-mvp-340x2x | ❌ STALE | Ignore, delete when possible |
| claude/journey-within-mvp-progress-gab0jy | ❌ STALE | Ignore, delete when possible |

---

**Last Updated**: July 19, 2026  
**Current State**: main ✅ master ✅ | Old branches ❌ (awaiting deletion)
