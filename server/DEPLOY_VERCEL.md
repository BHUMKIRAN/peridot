# Deploy Server To Vercel

## 1) Create Vercel project
- Import this repository in Vercel.
- Set **Root Directory** to `server`.

## 2) Environment variables
Add these in Vercel Project Settings:
- `MONGO_URI` = your MongoDB connection string
- `CORS_ORIGIN` = your frontend URL (for example `https://your-client.vercel.app`)

## 3) Deploy
- Vercel will use `api/index.js` as the serverless entrypoint via `vercel.json`.
- All routes (`/login`, `/register`, `/query`, `/pms`, etc.) are rewritten to that function.

## Notes
- Socket.IO is available only in local `node index.js` runtime.
- Vercel serverless functions do not keep persistent WebSocket connections.
