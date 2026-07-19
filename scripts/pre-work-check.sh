#!/bin/bash
# Pre-Work Check — Verify you're on the correct branch before making changes
# Usage: ./scripts/pre-work-check.sh
# For: Any AI assistant or developer before starting work

echo "======================================================================"
echo "  PRE-WORK CHECK — Verify Project State"
echo "======================================================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS=0
FAIL=0

# Check 1: Branch name
echo "1️⃣  Checking branch..."
BRANCH=$(git branch --show-current)
if [ "$BRANCH" = "main" ]; then
    echo -e "${GREEN}✅ PASS${NC}: On 'main' branch"
    ((PASS++))
else
    echo -e "${RED}❌ FAIL${NC}: On '$BRANCH' (should be 'main')"
    echo "   Run: git checkout main"
    ((FAIL++))
fi
echo ""

# Check 2: Branch is up-to-date
echo "2️⃣  Checking if branch is up-to-date..."
git fetch origin > /dev/null 2>&1
BEHIND=$(git rev-list --count main..origin/main)
AHEAD=$(git rev-list --count origin/main..main)

if [ "$BEHIND" = "0" ] && [ "$AHEAD" = "0" ]; then
    echo -e "${GREEN}✅ PASS${NC}: Branch is up-to-date with origin/main"
    ((PASS++))
else
    if [ "$BEHIND" != "0" ]; then
        echo -e "${RED}❌ FAIL${NC}: Your branch is $BEHIND commits behind"
        echo "   Run: git pull origin main"
        ((FAIL++))
    fi
    if [ "$AHEAD" != "0" ]; then
        echo -e "${YELLOW}⚠️  WARNING${NC}: Your branch is $AHEAD commits ahead"
        echo "   Run: git push origin main"
        ((FAIL++))
    fi
fi
echo ""

# Check 3: Working tree is clean
echo "3️⃣  Checking if working tree is clean..."
if git diff-index --quiet HEAD --; then
    echo -e "${GREEN}✅ PASS${NC}: Working tree is clean"
    ((PASS++))
else
    echo -e "${RED}❌ FAIL${NC}: You have uncommitted changes"
    echo "   Either:"
    echo "   1. Commit: git add . && git commit -m 'message'"
    echo "   2. Discard: git reset --hard HEAD"
    ((FAIL++))
fi
echo ""

# Check 4: Only main branch exists
echo "4️⃣  Checking branch count..."
BRANCH_COUNT=$(git branch --list | wc -l)
if [ "$BRANCH_COUNT" = "1" ]; then
    echo -e "${GREEN}✅ PASS${NC}: Only 1 local branch (main)"
    ((PASS++))
else
    echo -e "${RED}❌ FAIL${NC}: You have $BRANCH_COUNT local branches (expected 1: main only)"
    echo "   Extra branches should be deleted:"
    git branch --list
    echo "   To delete a branch: git branch -D branch-name"
    ((FAIL++))
fi
echo ""

# Check 5: Build verification
echo "5️⃣  Checking if build works..."
if npm run build > /tmp/build-check.log 2>&1; then
    echo -e "${GREEN}✅ PASS${NC}: npm run build succeeds"
    ((PASS++))
else
    echo -e "${RED}❌ FAIL${NC}: npm run build failed"
    echo "   Check: npm run build"
    ((FAIL++))
fi
echo ""

# Summary
echo "======================================================================"
echo "  RESULTS"
echo "======================================================================"
echo -e "${GREEN}✅ Passed: $PASS${NC}"
echo -e "${RED}❌ Failed: $FAIL${NC}"
echo ""

if [ "$FAIL" = "0" ]; then
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ ALL CHECKS PASSED — You're ready to work!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Edit your files"
    echo "2. Test locally: npm run dev"
    echo "3. Commit: git add . && git commit -m 'message'"
    echo "4. Push: git push origin main"
    echo "5. Verify: Check https://yoga-journey.vercel.app/"
    exit 0
else
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}❌ FAILED — Fix issues above before continuing${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    exit 1
fi
