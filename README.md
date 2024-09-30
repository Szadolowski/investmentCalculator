Code: https://investmentcalculatorproject.netlify.app

# Investment Calculator Application

The **Investment Calculator** is a web-based application built using **React**. It allows users to input various financial parameters, such as the initial investment, annual contributions, expected return rate, and investment duration. The app then calculates the projected growth of the investment over time, providing detailed year-by-year information.

## Features

- **Dynamic User Input Handling**: The application accepts user inputs for initial investment, annual investment, expected return rate, and duration. These inputs are dynamically updated in the state using React's `useState` hook, ensuring the results are recalculated in real-time.
- **Investment Projection**: Using the user's input, the app calculates the projected investment value year by year, including key metrics such as:
  - Investment Value at the end of each year.
  - Annual interest generated.
  - Total interest accrued over time.
  - Invested capital (without interest).
- **User Interface**:
  - **Header**: The application header features a logo and a clear title, providing a simple and intuitive design.
  - **Results Table**: The results are presented in a structured table format, allowing users to track their investment performance over time.
- **Validation**: Input fields for financial data use the `min` attribute to ensure that users cannot input negative values.

## Components Overview

### 1. App.jsx

The main application component that controls the overall logic and state management. It uses the `useState` hook to track user inputs (`initialInvestment`, `annualInvestment`, `expectedReturn`, `duration`) and updates the state via the `handlerChanger` function, which processes form input events. The `App` component also renders the **Header**, **UserInput**, and **Results** components, passing the necessary data and handlers as props.

### 2. Header.jsx

A simple presentational component that displays the application’s title and logo, which is imported from the `assets` directory.

### 3. UserInput.jsx

This component is responsible for rendering the form that collects the user's input. It receives the current input values and the change handler function as props. Each input field corresponds to a specific financial parameter (initial investment, annual investment, expected return, and duration), and all inputs have a `min={0}` restriction to prevent negative values.

### 4. Results.jsx

This component calculates the investment projection based on user input. It imports the `calculateInvestmentResults` function from the `investment.js` utility file, which handles the core logic of calculating yearly investment growth, including the interest and capital breakdown. The results are rendered in a table, where each row represents the state of the investment at the end of a given year.

## Utility Functions

### investment.js

Located in the `util` directory, this file contains helper functions used by the **Results** component to compute the investment's performance:

- `calculateInvestmentResults(data)`: Calculates the projected investment value for each year, including the interest generated and total capital invested.
- `formatter`: A utility function for formatting numbers into currency strings, ensuring that financial figures are displayed in a user-friendly format.

## Folder Structure

The project is organized as follows:

````bash
src
├── App.jsx                        # Main application component
├── assets
│   └── investment-calculator-logo.png  # Application logo
├── components
│   ├── Header.jsx                 # Header component
│   ├── Results.jsx                # Component for displaying the results table
│   └── UserInput.jsx              # Form component for collecting user input
├── index.css                      # Global stylesheet
├── index.jsx                      # Entry point of the React application
└── util
    └── investment.js              # Utility functions for calculations```
````
