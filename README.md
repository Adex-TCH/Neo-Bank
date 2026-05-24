# Neo Bank

A React + TypeScript version of the bank dashboard UI, built with Vite.

## Stack

- React
- TypeScript
- Vite
- CSS
- React Icons

## Run Locally

```bash
npm install
npm run dev
```

The dev server is configured for:

`http://localhost:3000`

## Build

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── Cards/
│   ├── Charts/
│   ├── Navbar/
│   └── Sidebar/
├── data/
├── layouts/
├── pages/
├── styles/
├── types/
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## How It Works

- `main.tsx` starts the React app and loads global styles.
- `App.tsx` connects the main layout to the dashboard page.
- `MainLayout.tsx` renders the shared app shell: navbar, sidebar, and page content.
- `Dashboard.tsx` arranges the main dashboard sections.
- `mockData.ts` stores the dashboard content as typed arrays.
- The components render UI by mapping over that data.
- `global.css` handles app-wide styling, while each component folder has its own CSS file.

## Main Sections

- `Navbar` renders the top navigation and user actions.
- `Sidebar` renders the left-side navigation menu.
- `BalanceCard` renders the service tiles section.
- `TransactionCard` renders the latest transfers section.
- `ExpenseChart` renders the payment panel on the right side.
