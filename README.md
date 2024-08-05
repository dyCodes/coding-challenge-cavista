# Frontend Coding Challenge

## Overview

This project is a React application that displays a list of movies and series using data fetched from a JSON feed. The app allows users to search and sort the list based on different criteria.

## Features

- Fetch and display movie and series data
- Filter entries based on title search
- Sort entries by title or year
- Responsive design
- Loading and error handling states
- Pagination with a "View More" button

## Screenshots

**Known Issues:** Some images from the JSON feed are not displaying. This may be due to broken URLs in the provided JSON data.

### Desktop View

![desktop view](https://github.com/user-attachments/assets/63921481-993d-4c11-94b7-f8bfa61c4148)

### Mobile View

<img src="https://github.com/user-attachments/assets/ccb793e0-ef02-400a-af6e-0fe847a5a9b9" alt="mobile view" style="max-width: 420px;">

## Technologies Used

- React
- TypeScript
- React Query
- Axios
- Jest
- React Testing Library
- CSS (BEM methodology)

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- npm (or yarn)

### Clone the Repository

```bash
git clone https://github.com/dyCodes/coding-challenge-cavista.git
cd coding-challenge-cavista
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Start the Development Server

```bash
npm start
# or
yarn start
```

Navigate to `http://localhost:3000` in your browser to view the application.

### Run Tests

```bash
npm test
# or
yarn test
```

## Application Structure

### Pages

- **Home Page**: Displays two tiles linking to Series and Movies pages.
- **Series Page**: Fetches and displays series data with search and sorting options.
- **Movies Page**: Fetches and displays movie data with search and sorting options.

### Data Fetching

- **Axios**: Used for HTTP requests to fetch JSON feed.
- **React Query**: Manages and caches fetched data.

### State Management

- **Search and Sorting**: Managed using React state and handlers.

## Design and Styling

- **BEM Methodology**: Utilized BEM (Block, Element, Modifier) methodology for structured and maintainable CSS. This approach was combined with utility classes to handle common styles efficiently.
- **Responsive Design**: Ensures compatibility with mobile devices.

## TypeScript

TypeScript is used to provide type safety across the application, including for props, state, and API data.
