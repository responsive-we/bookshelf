# Personal Bookshelf

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Search for books in real-time using the Open Library API.
- Add books to a personal bookshelf.
- Persist bookshelf data using localStorage.
- Responsive design for mobile and desktop views.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn (version 1.22 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/responsive-we/bookshelf
   cd bookshelf
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

## Running the Project

To run the project locally, use the following command:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

This will start the development server and you can view the application by navigating to `http://localhost:5173` in your web browser.

## Building for Production

To create a production build of the project, use the following command:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The production-ready files will be generated in the `dist` directory.

## Project Structure

```
personal-bookshelf/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── BookSearch.js
│   │   ├── Bookshelf.js
│   ├── index.css             # Global styles
│   ├── App.js              # Main application component
│   ├── main.js             # Entry point for the application
├── .gitignore              # Git ignore rules
├── .eslintrc.cjs           # ESLint configuration
├── components.json         # Component metadata
├── jsconfig.json           # JavaScript configuration
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Lockfile for npm
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.