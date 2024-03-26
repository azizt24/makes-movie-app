# Movies App

## Table of Contents

- [Movies App](#react-movies-app)
  - [Table of Contents](#table-of-contents)
  - [Acknowledgments](#acknowledgments)
  - [Overview](#overview)
  - [Live Demo](#live-demo)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Screenshots](#screenshots)
    - [Home Screen](#home-screen)
    - [Movies Screen](#movies-screen)
    - [Movie Details Screen](#movie-Details-screen)
    - [Advanced Search Screen](#advanced-search-screen)
    - [Popular Actors Screen](#popular-actors-screen)
    - [Spinners and Themes Page Screen](#spinners-and-themes-page-screen)
    - [Error Toast](#error-toast)
  - [Getting Started](#getting-started)
  - [API Integration](#api-integration)
    - [Environment Variable Protection](#environment-variable-protection)
    - [Request Management](#request-management)
  - [Custom Hooks](#custom-hooks)
    - [`useDynamicApiMutation`](#useDynamicApiMutation)
    - [`useFetch`](#useFetch)
  - [Technical Architecture](#technical-architecture)
    - [`State Management`](#statemanagement)
  - [User Experience](#user-experience)
    - [Reusable Components](#reusable-components)
    - [Movie Display Components](#movie-display-components)
  - [Authentication Flow](#authentication-flow)  
  - [Data Fetching and State Management](#data-fetching-and-state-management)
  - [Error Management](#error-management)
  


## Acknowledgments
Providing movie data.
[The Movie DB](https://www.themoviedb.org/)  
[The Movie DB](http://www.omdbapi.com/)


## Overview

This project is based on the [React Movie App](https://github.com/obrm/makes-movie-app.git) Welcome to the Movie Finder Project! This is a dynamic web application that allows users to explore, discover, and learn more about the latest and most popular movies. Whether you're looking for details on the newest blockbusters or just browsing through high-rated films, Movie Finder makes it easy and fun.

## Live Demo

Visit the [live demo](https://dev-makes-movie-app.netlify.app/).

## Features

- Latest Movies: Get information about the most recent movies released.
- Highest Rated: Discover which movies are topping the charts with the highest ratings.
- Movie Details: Dive deep into each movie's synopsis, cast, and more!
- Advanced Search:Explore our Advanced Search to finely-tune your movie discoveries by filtering through actors, directors,    writers, ratings, and more, ensuring you find exactly what you're looking for.
- Popular actors:
On this page, users can browse a curated selection of popular actors, offering a visual directory to explore profiles and learn more about the most recognized talents in the industry.
- LogIn:The website features convenient Google sign-in integration, allowing users to quickly register or log in using their existing Google accounts for a streamlined and secure authentication process.

## Tech Stack

- React.js
- React Router
- Axios
- react Redux
- React-toastify
- React Query
- Styled-components 
- React-responsive-carousel
- React-slick
- Slick-carousel

## Screenshots

---
### Home Screen
![Home Screen](src/assets/home.png)

---
### Movies Screen
![Login Screen](src/assets/movies.png)

---
### Movie Details Screen
![Movie Details Screen](src/assets/movie.png)

---

### Advanced Search Screen
![Advanced Search Screen](src/assets/)

---
### Popular Actors
![Popular Actors Screen](src/assets/)
---

### Spinners and Themes Page
![ Spinners and Themes Page Screen](src/assets/SpinenerAndThemes.png)

---

### Error Toast 
![Error Toast](src/assets/error.png)

---
## Getting Started

1. Clone the repository from `https://github.com/obrm/makes-movie-app.git`.
2. Install dependencies with `npm install`.
3. Add the `config.env` in the backend folder and `.env` in the frontend folder.
4. Run the application using `npm run dev`.



## API Integration

All the API calls are available in the `constant.js` file in the `config` folder.

### Environment Variable Protection

- The API URL is secured in an `.env` file, which is omitted from the repository for security reasons.

### Request Management

- A generic request function is available for making API calls. This function is utilized in other utility functions designed for specific request types (GET, POST, PUT, DELETE).



## Custom Hooks

### `useDynamicApiMutation`

- This hook provides a way to perform dynamic API requests using React Query's useMutation, with automatic cache invalidation and toast notifications for success or error feedback.

### `useFetch`

- This custom React hook utilizes react-query to fetch data from a given URL, handling loading states and errors with integrated notifications.


## Technical Architecture

### State Management

Our Movies App utilizes the Redux Toolkit for efficient global state management, ensuring a responsive and interactive user experience. With `uiSlice`, we manage the application's dynamic UI features, such as theme changes and loading animations, demonstrating our commitment to a seamless user interface.

- Theme Management: The `uiSlice` allows users to switch between themes, enhancing the visual experience across the application.
- Loading Indicators: Through the `spinner` state, we provide immediate feedback for any background operations, keeping the user informed.

This structured approach to state management with Redux Toolkit not only simplifies state logic but also significantly improves the maintainability and scalability of our application.

## User Experience

### Reusable Components

- Custom Input Components: To reduce code repetition and enhance maintainability, reusable input components are implemented for consistent form elements across the application.

### Movie Display Components

- MovieCard Component: A MovieCard component abstracts the display logic, enabling a concise iteration over movie data arrays for rendering within various views such as Home, Search Results, and Recommendations.


## Authentication Flow

- Streamlined Sign-In Process: Leveraging Google's authentication API, the app offers users a seamless sign-in experience, allowing them to access their personalized movie lists and preferences with minimal effort.


## Data Fetching and State Management
- Optimized Data Queries: Utilizing react-query, the app efficiently manages server state with hooks that handle data fetching, caching, and state synchronization, providing a responsive and up-to-date user interface.

## Error Management

- User-friendly error notifications are shown using the [`react-toastify`](https://www.npmjs.com/package/react-toastify) package. It's centralized in the App component to handle errors application-wide.


