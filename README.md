# Date Checker

A React application that allows users to check whether a date is valid.

The user enters a date in the `DD.MM.YYYY` format. The application validates the input and displays the result.

For example:

* `01.01.2026` → `January 1, 2026 - exists`
* Invalid input → `Invalid date`

## Live Demo

[Date Checker](https://date-checker-eight.vercel.app/)

## Features

* Date validation in `DD.MM.YYYY` format
* Validation of user input
* Visual feedback for valid and invalid input
* Different input border colors for validation states
* Result displayed after validation
* Result and validation state reset when the input is cleared
* Responsive interface

## Technologies

* React
* JavaScript
* Context API
* CSS Modules
* Vite
* Vercel

## Project Structure

```text
src/
├── assets/
│   └── hero.png
│
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   │
│   ├── Form/
│   │   ├── Form.jsx
│   │   └── Form.module.css
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   │
│   ├── Main/
│   │   ├── Main.jsx
│   │   └── Main.module.css
│   │
│   └── Result/
│       ├── Result.jsx
│       └── Result.module.css
│
├── context/
│   ├── AppContext.jsx
│   └── AppProvider.jsx
│
├── hooks/
│   └── useAppContext.jsx
│
├── utils/
│   ├── formattedDate.js
│   └── validateData.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## Folder Responsibilities

* **components/** — React components and their corresponding CSS Modules.
* **context/** — application state managed with React Context API.
* **hooks/** — custom hooks for accessing application state.
* **utils/** — reusable functions for date validation and formatting.
* **assets/** — static assets used by the application.
* **App.jsx** — main application component.
* **main.jsx** — application entry point.
* **index.css** — global styles.

## How It Works

1. The user enters a date in `DD.MM.YYYY` format.
2. The application validates the input.
3. The input receives a visual validation state.
4. The result is displayed to the user.
5. If the input is invalid, the application displays an invalid-date message.
6. When the input is cleared, the validation state and result are reset.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/kvdevelop26/date_checker.git
```

Navigate to the project directory:

```bash
cd date_checker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be
