# Suggested Commands
- Install deps (first time): `source ~/.nvm/nvm.sh && npm install`
- Clean build artifacts: `source ~/.nvm/nvm.sh && npm run clean`
- Build (tsc + copy static to dist): `source ~/.nvm/nvm.sh && npm run build`
- Build TS only: `source ~/.nvm/nvm.sh && npm run build:ts`
- Copy static only: `source ~/.nvm/nvm.sh && npm run build:static`
- Preview dist locally (example): `source ~/.nvm/nvm.sh && npx http-server dist -p 4173`
- List project markdown files: `source ~/.nvm/nvm.sh && rg --files -g"*.md"`
