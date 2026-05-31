# Hidden Prachuap

A digital tourism guide for Prachuap Khiri Khan, Thailand — deployed free on GitHub Pages with Firebase Realtime Database.

---

## 🚀 Setup Guide

### 1. Add Your Images
Place your images inside `public/images/` with these exact filenames:
- `hero.png` — homepage banner
- `about.png` — about page
- `scan-panorama.png` — scan page banner
- `scan-qr.png` — your QR code image
- `place1-1.png`, `place1-2.png`, `place1-3.png`
- `place2-1.png`, `place2-2.png`, `place2-3.png`
- `place3-1.png`, `place3-2.png`
- `place4-1.png`, `place4-2.png`
- `place5-1.png`, `place5-2.png`, `place5-3.png`

### 2. Set Up Firebase (Free)
1. Go to https://console.firebase.google.com
2. Click **Add project** → name it (e.g. `hidden-prachuap`)
3. Go to **Build → Realtime Database → Create Database** → Start in **test mode**
4. Go to **Project Settings (⚙️) → Your Apps → Add App → Web (</>)**
5. Copy the config and paste it into `src/lib/firebase.js`

### 3. Set Up GitHub Pages
1. Push this project to a GitHub repo named `hidden-prachuap`
2. Go to repo **Settings → Pages → Source → GitHub Actions**
3. Push to `main` branch — it auto-deploys!
4. Your site will be live at: `https://YOUR_USERNAME.github.io/hidden-prachuap/`

### 4. Update Your Repo Name in vite.config.js
If your GitHub repo name is different from `hidden-prachuap`, edit `vite.config.js`:
```js
base: '/YOUR_REPO_NAME/',
```

### 5. Run Locally
```bash
npm install
npm run dev
```

---

## 🔗 Links
- **Review Form:** https://forms.gle/UPiJpyaVH19Hpvfu5
- **Live Site:** https://YOUR_USERNAME.github.io/hidden-prachuap/
