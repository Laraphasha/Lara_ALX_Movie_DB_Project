# LARA-PHASHA_ALX-MOVIE-DB-PROJECT

## Description
This is a Capstone Project for ALX Front End Development programme.

## Technologies used

### React
* __React Project Setup:__
  - Open your terminal and set up a new React application using Create React App:
  ```bash
  npm create vite@latest github-user-search -- --template react
  cd github-user-search
  ```
* __Dependencies Installation:__
  - Install [React Router](https://reactrouter.com/start/declarative/installation) to use for routing in our app:
  ```bash
  npm i react-router
  ```
  - Install [Tailwind CSS](https://v3.tailwindcss.com/docs/guides/vite) for styling.
  ```bash
  npm install -D tailwindcss@3 postcss autoprefixer
  ```

## Run project
  ```bash
  npm run dev
  ```

## Project Structure
* Lara_ALX_Movie_DB_Project/
  - src/
    - components/
      - SearchBar.jsx
      - MovieCard.jsx
      - MovieList.jsx
    - pages/
      - Home.jsx
      - MovieList.jsx
    - api/
      - TheMovieDB.js
    - App.jsx
    - index.css
    - main.jsx
  - eslint.config.js
  - index.html
  - package.json
  - postcss.config.js
  - README.md
  - tailwind.config.js
  - vite.config.js
