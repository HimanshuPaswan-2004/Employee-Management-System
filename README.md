# Employee Management System

A simple React + Vite employee task management app with admin and employee login flows.

## Features

- Admin login and employee login
- Employee task overview and status cards
- Admin task creation and employee assignment
- Local storage persistence for employee and login data
- Tailwind CSS for responsive UI styling

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- JavaScript

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npm run dev
   ```

3. Open the local app in the browser at the port shown in the terminal.
   - If `5173` is already in use, Vite may use another port such as `5174`.

## Login Credentials

### Admin
- Email: `admin@me.com`
- Password: `123`

### Employee
- Email: `e@e.com`
- Password: `123`

> Additional employee accounts are defined in `src/utils/localStorage.jsx`.

## Important Notes

- The app stores users and tasks in browser `localStorage`.
- If the login page does not appear locally, check the terminal for the actual Vite port.
- The project uses a dark theme by default, so the login form appears on a black background.

## Deployment

This project can be deployed to platforms like Netlify or Vercel.

- Build for production:
  ```bash
  npm run build
  ```

- Serve the production build locally with a static server if needed.

## Project Structure

- `src/App.jsx` — main app routing and login logic
- `src/main.jsx` — app entry and context provider
- `src/components/Auth/Login.jsx` — login form
- `src/components/Dashboard/` — admin and employee dashboards
- `src/context/` — authentication context provider
- `src/utils/localStorage.jsx` — sample employee data and storage helpers

## Troubleshooting

- If the login is not working, clear browser local storage and reload the page.
- If the app shows a black screen, verify that the login page is rendered and the correct Vite port is opened.
- Check browser console for any runtime errors.

