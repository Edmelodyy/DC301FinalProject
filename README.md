# ZooCare Zoo Management System

A simple beginner-friendly Vue 3 Single Page Application (SPA) for managing zoo animals and their care. It uses Vue Router for navigation and localStorage to keep demo data in the browser. It does not manage vehicles or parking.

## Pages
- **Dashboard** (`/`) — summary of animals, zoo staff, and care records.
- **Animals** (`/animals`) — add, view, search, edit, and delete animal information, including species, habitat, age, and health status.
- **Zoo Staff** (`/staff`) — manage zoo staff members, roles, contact details, and shifts.
- **Care Records** (`/care-records`) — manage feeding, checkups, treatment, cleaning, dates, staff, and notes.

The three management pages are in addition to the dashboard.

## Topics demonstrated
- Vue 3 and Single File Components
- `ref`, `computed`, `onMounted`, and `watch`
- `v-model`, `v-if`, and `v-for`
- Form handling and basic validation
- CRUD (Create, Read, Update, Delete)
- Vue Router navigation
- Searching and browser `localStorage`

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
1. Extract the ZIP file.
2. Open a terminal inside the `ZooCare` folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Verify production build
Run `npm run build`.

## Presentation checklist
1. Navigate from Dashboard to Animals, Zoo Staff, and Care Records.
2. Add an animal, search for it, edit it, and delete it.
3. Add a staff member, edit their details, and delete them.
4. Add a care record, edit its status or notes, and delete it.
5. Refresh the browser to demonstrate localStorage persistence.

## Push to GitHub
Create an empty GitHub repository named `ZooCare-Zoo-Management`, then run these commands in this folder. Replace `YOUR-USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Create ZooCare Vue zoo management system"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ZooCare-Zoo-Management.git
git push -u origin main
```
