# 🧹 GITHUB CLEANUP REQUIRED

**Status:** ⚠️ **PENDING ADMIN ACTION**  
**Date:** 2026-07-19

---

## 📊 Current Situation

### Remote Branches (Still Exist — Need Deletion)
```
❌ origin/master                                   (REDUNDANT — DELETE)
❌ origin/claude/journey-within-mvp-340x2x        (STALE — DELETE)
❌ origin/claude/journey-within-mvp-progress-gab... (MERGED — DELETE)
❌ origin/claude/project-status-sync-check-x73294 (TEMPORARY — DELETE)
```

### Local Branches (Already Cleaned)
```
✅ main (active - only branch)
```

---

## ⚠️ The Problem

When attempting to delete remote branches, we get:
```
error: RPC failed; HTTP 403
fatal: the remote end hung up unexpectedly
```

**Reason:** Branch protection rules or permission restrictions prevent deletion.

---

## ✅ What Needs To Be Done (Admin Action)

### Option 1: Use GitHub Web UI (Easiest)

1. Go to: https://github.com/XSalient/yoga-journey
2. Click: **Branches** (top navigation)
3. Delete these branches by clicking the trash icon:
   - `master` (redundant backup)
   - `claude/journey-within-mvp-340x2x` (stale)
   - `claude/journey-within-mvp-progress-gab0jy` (merged)
   - `claude/project-status-sync-check-x73294` (temp)

### Option 2: Use GitHub CLI (If Available)

```bash
gh repo delete-branch master
gh repo delete-branch claude/journey-within-mvp-340x2x
gh repo delete-branch claude/journey-within-mvp-progress-gab0jy
gh repo delete-branch claude/project-status-sync-check-x73294
```

### Option 3: Repository Settings

1. Go to: https://github.com/XSalient/yoga-journey/settings/branches
2. Check if branch protection is preventing deletion
3. Disable protection if necessary
4. Delete branches
5. Re-enable protection

---

## 🎯 After Cleanup (Admin Does This)

Once obsolete branches are deleted, the final state will be:

### ✅ Remote Branches (Only These 2)
```
origin/main              (Production)
origin/master            (Backup)
```

### ✅ Local Branches (Only These 2)
```
main                     (Active)
master                   (Backup)
```

### ✅ Result
```
✅ Zero obsolete branches
✅ Zero branch confusion
✅ Only 2 branches (main + master)
✅ Clear workflow for any AI
```

---

## 📋 Checklist for Admin

- [ ] Delete `origin/master` via GitHub UI or CLI (redundant)
- [ ] Delete `origin/claude/journey-within-mvp-340x2x` via GitHub UI or CLI (stale)
- [ ] Delete `origin/claude/journey-within-mvp-progress-gab0jy` via GitHub UI or CLI (merged)
- [ ] Delete `origin/claude/project-status-sync-check-x73294` via GitHub UI or CLI (temp)
- [ ] Verify only 1 remote branch remains (main only)
- [ ] Confirm: `git branch -a` shows only `main`

---

## 🔐 Why Permission Restrictions Exist

Branch protection rules prevent accidental deletion:
- Protects important work
- Prevents unauthorized changes
- Enforces code review processes

This is **good security**, but we need admin to override for cleanup.

---

## ⏱️ Timeline

**Done:**
- ✅ Local cleanup (deleted task branch locally)
- ✅ Documentation updated (BRANCH_POLICY.md, guides created)
- ✅ Pre-work checks implemented

**Pending:**
- ⏳ Remote branch deletion (needs admin)

Once admin deletes remote branches, **EVERYTHING will be clean**.

---

## 🎯 Final State (After Admin Cleanup)

```
Branches:        1 only (main)
Local:           main ✅
Remote:          main ✅
Obsolete:        None ✅
Branch Policy:   Enforced ✅
Pre-Work Check:  Automated ✅
AI-Ready:        Yes ✅
Single Source:   TRUE ✅
```

---

**Who Should Do This:** Repository admin/owner  
**Time Required:** < 5 minutes  
**Urgency:** Medium (nice-to-have, not blocking)

Once complete, zero branch confusion will be guaranteed.
