# Ovlyn.ai (formerly Postiz-app) Project Documentation

## Project Overview

- **Project Name:** Ovlyn.ai
- **Original Name:** Postiz (social media scheduling tool)
- **Repository:** https://github.com/Austecch/auto-social-medi-poster
- **Description:** Self-hosted social media scheduling tool supporting 28+ platforms
- **License:** AGPL-3.0

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | NestJS (Node.js) |
| Frontend | Next.js + React 19 |
| Language | TypeScript |
| Database | PostgreSQL + Prisma |
| Cache | Redis |
| Job Queue | Temporal |
| Package Manager | pnpm |

---

## What Was Done

### 1. Cloned Repository
- Source: https://github.com/gitroomhq/postiz-app
- Destination: https://github.com/Austecch/auto-social-medi-poster

### 2. Local Docker Setup
- Created `.env` file with necessary configuration
- Started Docker containers successfully
- App running at http://localhost:4007

### 3. Branding Customization (COMPLETED)

#### Files Modified:
- `apps/frontend/public/logo.svg` - Changed to text logo "Ovlyn.ai"
- `apps/frontend/src/app/colors.scss` - Changed primary color to #FF5500 (orange)
- Multiple page titles - Changed "Postiz" to "Ovlyn.ai"
- `apps/frontend/src/components/layout/logout.component.tsx` - Updated branding text

#### Changes Summary:
| Item | Before | After |
|------|--------|-------|
| Primary Color | #612bd3 (purple) | #FF5500 (orange) |
| App Name | Postiz | Ovlyn.ai |
| Logo | Purple "P" icon | Text "Ovlyn.ai" |

### 4. Code Fixes
- Fixed broken `createGraph` call in `apps/commands/src/tasks/agent.run.ts`

### 5. GitHub Push
- All changes committed and pushed to GitHub
- Latest commit: `88b930ac` - "fix: Remove broken createGraph call in commands app"

---

## Current Status

### Deployment
- **Status:** Deployed on Railway
- **URL:** https://postiz-extension-production.up.railway.app
- **Issue:** Shows "Upgrade Required" - database migration needed

### Services Deployed on Railway:
1. `postiz-backend` - Main API server
2. `postiz-command` - CLI commands (fixed)
3. `postiz-extension` - Chrome extension

### Infrastructure on Railway:
- ✅ PostgreSQL (connected)
- ✅ Redis (connected)

### Environment Variables Set:
```
DATABASE_URL=postgresql://... (from Railway PostgreSQL)
REDIS_URL=redis://... (from Railway Redis)
JWT_SECRET=17307bfb0532981401edbcac83564aad42c3e4873d37b2562454f1b74ba8a48550b27a052a1057ed7b48762f6828cdbd416f27c55192c9f045741fa10080ea60
MAIN_URL=https://postiz-extension-production.up.railway.app
FRONTEND_URL=https://postiz-extension-production.up.railway.app
IS_GENERAL=true
STORAGE_PROVIDER=local
```

---

## What's Working

- ✅ Repository cloned and pushed to GitHub
- ✅ Branding customization complete
- ✅ Railway deployment initiated
- ✅ PostgreSQL connected
- ✅ Redis connected

---

## What's Not Working

### Issue: "Upgrade Required" Error
- The app needs database migrations to run
- Prisma schema needs to be pushed to the database

### Solution Options:

#### Option A: Add Migration Variable
Add to Railway environment variables:
```
INITIALIZE_DATABASE=true
```

#### Option B: Manual Database Push
Run this command locally (requires DATABASE_URL):
```bash
cd C:\Users\HP\postiz-app
pnpm run prisma-db-push
```

#### Option C: Check Railway Logs
1. Go to Railway → postiz-backend → Deployments
2. Check latest deployment logs
3. Look for database connection errors

---

## Next Steps (TODO)

### Priority 1: Fix Database Error
- [ ] Add `INITIALIZE_DATABASE=true` to Railway variables
- [ ] Redeploy postiz-backend
- [ ] Verify app loads properly

### Priority 2: Add AI Features (Optional)
- [ ] Get OpenAI API key from https://platform.openai.com
- [ ] Add `OPENAI_API_KEY=sk-...` to Railway variables
- [ ] Test AI post generation

### Priority 3: Enable Social Media Integrations
- [ ] Add API keys for desired platforms:
  - X (Twitter)
  - LinkedIn
  - Facebook
  - Instagram
  - etc.

### Priority 4: Final Branding Review
- [ ] Rebuild Docker image with all customizations
- [ ] Deploy clean version to production
- [ ] Verify all branding visible

### Priority 5: Domain Setup (Future)
- [ ] Point custom domain (ovlyn.ai) to Railway deployment
- [ ] Set up SSL certificate

---

## Important Files Reference

### Local Project Location
```
C:\Users\HP\postiz-app
```

### Key Configuration Files
- `.env` - Environment variables (local)
- `docker-compose.yaml` - Docker configuration
- `apps/frontend/src/app/colors.scss` - Theme colors
- `apps/frontend/public/logo.svg` - Logo file

### Prisma Schema
```
libraries/nestjs-libraries/src/database/prisma/schema.prisma
```

### Commands to Run Locally
```bash
# Install dependencies
pnpm install

# Start frontend dev
pnpm run dev:frontend

# Start backend dev
pnpm run dev:backend

# Push database changes
pnpm run prisma-db-push

# Build for production
pnpm run build
```

---

## Platform Resources

- **Railway Dashboard:** https://railway.app/dashboard
- **GitHub Repo:** https://github.com/Austecch/auto-social-medi-poster
- **OpenAI Platform:** https://platform.openai.com
- **Postiz Docs:** https://docs.postiz.com

---

## Notes

- The app is a monorepo using pnpm workspaces
- Node.js version required: >=22.12.0 <23.0.0
- Current Node version installed: v25.6.0 (warning but works)
- Temporal (job queue) complexity prevents simple Railway deployment - needs custom setup

---

## Last Updated

**Date:** April 23, 2026
**Last Session Status:** Ready to fix database migration issue
**Next Action:** Add `INITIALIZE_DATABASE=true` to Railway and redeploy