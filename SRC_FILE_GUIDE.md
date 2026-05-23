# Src File Guide

This note explains every file inside `src` and how the files connect to each other.

## Big Picture

The app flow is:

`main.tsx` -> `App.tsx` -> `layouts/MainLayout.tsx` -> `pages/Dashboard.tsx` -> components -> data from `data/mockData.ts`

TypeScript types from `types/index.ts` describe the shape of the data, and CSS files control the layout and appearance.

## Root Files In `src`

### `src/main.tsx`

Purpose:
- This is the React entry point.

What it does:
- Imports React and `ReactDOM`.
- Imports the top-level `App` component.
- Imports the global stylesheet.
- Mounts the React app into the `div` with `id="root"` from `index.html`.
- Wraps the app in `React.StrictMode` to help catch development issues.

Why it matters:
- Without this file, React would not start.

### `src/App.tsx`

Purpose:
- This is the top-level app component.

What it does:
- Imports `MainLayout`.
- Imports the `Dashboard` page.
- Renders `Dashboard` inside `MainLayout`.

Why it matters:
- It decides which page is shown inside the shared app layout.

### `src/vite-env.d.ts`

Purpose:
- This gives TypeScript Vite-specific type support.

What it does:
- References Vite client types.

Why it matters:
- It helps TypeScript understand Vite features and avoids editor/type errors.

## Layout Folder

### `src/layouts/MainLayout.tsx`

Purpose:
- This is the shared page shell.

What it does:
- Accepts `children` using the `ReactNode` type.
- Renders the main wrapper with class `app`.
- Shows the `Navbar` at the top.
- Shows the `Sidebar` on the left.
- Renders page content inside the `<main>` area.

How it connects:
- `App.tsx` uses `MainLayout`.
- `MainLayout` wraps the `Dashboard` page.

Why it matters:
- If you later add more pages, they can reuse this same shell.

## Pages Folder

### `src/pages/Dashboard.tsx`

Purpose:
- This is the dashboard page itself.

What it does:
- Imports `BalanceCard`, `TransactionCard`, and `ExpenseChart`.
- Splits the page into two columns:
- Left column for service and transfer sections.
- Right column for the payment section.

How it connects:
- `App.tsx` renders this page inside `MainLayout`.

Why it matters:
- It controls the main arrangement of the dashboard content.

## Data Folder

### `src/data/mockData.ts`

Purpose:
- This stores the data used by the UI.

What it contains:
- `tabs`
- `navigationItems`
- `serviceItems`
- `transferItems`
- `paymentCards`

What it does:
- Imports icons from `react-icons/pi`.
- Imports shared types from `src/types/index.ts`.
- Exports typed arrays that the components loop over.

How it connects:
- `Navbar.tsx` uses `tabs`.
- `Sidebar.tsx` uses `navigationItems`.
- `BalanceCard.tsx` uses `serviceItems`.
- `TransactionCard.tsx` uses `transferItems`.
- `ExpenseChart.tsx` uses `paymentCards`.

Why it matters:
- It keeps display data separate from UI markup.
- That makes components cleaner and easier to edit.

## Types Folder

### `src/types/index.ts`

Purpose:
- This file defines the shared TypeScript types for the dashboard data.

What it contains:
- `TabItem`
- `NavItem`
- `ServiceItem`
- `TransferItem`
- `PaymentCardItem`

What it does:
- Describes what fields each kind of data must have.
- Uses `IconType` from `react-icons` for items that render icons.

Why it matters:
- TypeScript can warn you if your data shape is wrong.
- It makes `mockData.ts` safer and easier to understand.

## Components Folder

## `src/components/Navbar`

### `src/components/Navbar/Navbar.tsx`

Purpose:
- Renders the top header area.

What it does:
- Imports `tabs` from `mockData.ts`.
- Imports icons for search, bell, and menu.
- Shows the logo and app name.
- Maps through `tabs` to create the top navigation links.
- Shows the user profile section.
- Shows action buttons for search and notifications.
- Shows a mobile menu button.

How it connects:
- Used by `MainLayout.tsx`.

Why it matters:
- It gives the app its top navigation and branding.

### `src/components/Navbar/Navbar.css`

Purpose:
- Styles the navbar and header area.

What it controls:
- Header grid layout
- Responsive mobile behavior
- Logo styling
- Tab styling
- User profile styling
- Header action spacing

Why it matters:
- It controls the entire top section’s structure and responsive behavior.

## `src/components/Sidebar`

### `src/components/Sidebar/Sidebar.tsx`

Purpose:
- Renders the left sidebar.

What it does:
- Imports `navigationItems` from `mockData.ts`.
- Maps through the array to render sidebar links with icons.
- Renders the footer branding at the bottom.

How it connects:
- Used by `MainLayout.tsx`.

Why it matters:
- It provides the left navigation menu for the dashboard.

### `src/components/Sidebar/Sidebar.css`

Purpose:
- Styles the sidebar and footer.

What it controls:
- Sidebar column layout
- Link spacing and hover effect
- Footer text and border
- Hiding the sidebar on smaller screens

Why it matters:
- It gives the sidebar its structure and responsive behavior.

## `src/components/Cards`

### `src/components/Cards/BalanceCard.tsx`

Purpose:
- Renders the service section.

What it does:
- Imports `serviceItems` from `mockData.ts`.
- Imports icons used in the search field, dropdown, and service links.
- Builds the top service controls.
- Maps through `serviceItems` to create service tiles.
- Shows the service note at the bottom.

How it connects:
- Used by `Dashboard.tsx`.

Why it matters:
- It displays one of the main dashboard content sections.

### `src/components/Cards/TransactionCard.tsx`

Purpose:
- Renders the latest transfers section.

What it does:
- Imports `transferItems` from `mockData.ts`.
- Imports filter and plus icons.
- Renders the section header and action buttons.
- Maps through `transferItems` to show each transfer row.

How it connects:
- Used by `Dashboard.tsx`.

Why it matters:
- It displays the transaction history section of the dashboard.

### `src/components/Cards/Cards.css`

Purpose:
- Styles both `BalanceCard` and `TransactionCard`.

What it controls:
- Service section layout
- Search field and dropdown styling
- Tile grid and tile colors
- Transfer section layout
- Transfer row spacing and responsive behavior

Why it matters:
- It contains the styling for the main content area on the left.

## `src/components/Charts`

### `src/components/Charts/ExpenseChart.tsx`

Purpose:
- Renders the right-side payment panel.

What it does:
- Imports `paymentCards` from `mockData.ts`.
- Imports arrow and settings icons.
- Defines inline `MastercardLogo` and `VisaLogo` components.
- Renders payment method buttons.
- Maps through `paymentCards` to render each card/payment row.
- Renders the FAQ input section.
- Renders the footer action buttons.

How it connects:
- Used by `Dashboard.tsx`.

Why it matters:
- It powers the right column of the dashboard.

Note:
- Even though the file is named `ExpenseChart.tsx`, it currently renders the payment panel, not a chart. If you want, this file can be renamed later to match the UI more directly.

### `src/components/Charts/Charts.css`

Purpose:
- Styles the right payment panel.

What it controls:
- Payment section spacing
- Card button appearance
- Payment list layout
- FAQ row styling
- Save and settings button styling

Why it matters:
- It controls the appearance of the right-hand dashboard column.

## Styles Folder

### `src/styles/global.css`

Purpose:
- Holds global styles shared across the app.

What it does:
- Imports the main Google font.
- Defines CSS variables like colors.
- Resets box sizing.
- Styles `html`, `body`, and `#root`.
- Sets the overall app shell width and background.
- Defines shared utility styles like:
- `.app`
- `.app-body`
- `.dashboard-layout`
- `.icon-button`
- `.flat-button`
- focus states

How it connects:
- Imported once in `main.tsx`.
- Affects the entire app.

Why it matters:
- It creates the base layout and shared style system the rest of the CSS depends on.

## How The Files Work Together

1. `index.html` provides the `#root` element.
2. `main.tsx` mounts the React app into `#root`.
3. `App.tsx` loads the dashboard page inside the shared layout.
4. `MainLayout.tsx` places `Navbar` and `Sidebar` around the page content.
5. `Dashboard.tsx` organizes the page sections into columns.
6. Each component renders a specific section of the UI.
7. Most component content comes from arrays in `mockData.ts`.
8. The data arrays follow the shapes defined in `types/index.ts`.
9. CSS files style the layout globally and per component.

## Simple Mental Model

Think of the project like this:

- `main.tsx` starts the app
- `App.tsx` chooses the main screen
- `MainLayout.tsx` builds the frame
- `Dashboard.tsx` fills the frame
- `components/` draws each visible section
- `data/` feeds those sections
- `types/` describes the data
- `styles/` controls how it looks

## Good Next Steps

If you continue building this project, the next clean improvements would be:

- Rename `ExpenseChart.tsx` to something like `PaymentPanel.tsx`
- Add real interactivity to the buttons and search fields
- Replace mock data with API data later
- Add routing if you want more pages
