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

## ✅ What Needs To Be Done

### STEP 1: Change Default Branch (Anyone Can Do - DO THIS FIRST)

1. Go to: https://github.com/XSalient/yoga-journey/settings
2. Find: **Default Branch** section
3. Change from: `master` → `main`
4. Click: **Update** or **Save**

**Why:** Must change default BEFORE deleting master, or GitHub won't let you delete it.

### STEP 2: Delete Remote Branches (Admin Only - DO THIS AFTER)

1. Go to: https://github.com/XSalient/yoga-journey/branches
2. Delete these branches by clicking the trash icon:
   - `master` (now safe to delete, no longer default)
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

## 📋 Cleanup Checklist (In Order)

### STEP 1: Change Default Branch (Do First - Anyone)
- [ ] Go to repo settings: https://github.com/XSalient/yoga-journey/settings
- [ ] Change Default Branch: `master` → `main`
- [ ] Save/Update

### STEP 2: Delete Remote Branches (Do Second - Admin)
- [ ] Delete `origin/master` (now safe, not default)
- [ ] Delete `origin/claude/journey-within-mvp-340x2x`
- [ ] Delete `origin/claude/journey-within-mvp-progress-gab0jy`
- [ ] Delete `origin/claude/project-status-sync-check-x73294`

### STEP 3: Verify (Anyone)
- [ ] Go to Branches page: https://github.com/XSalient/yoga-journey/branches
- [ ] Only `main` appears
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
