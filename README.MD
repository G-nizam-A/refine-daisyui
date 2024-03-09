# Project README

This repository contains a web application built with React that provides a dashboard displaying daily revenue, daily orders, and new customer data. The application utilizes various components and functionalities to present data in an interactive and user-friendly manner.

## Screenshots

**Dashboard:**

[Insert Dashboard Screenshot Here]

## Features

- Display of daily revenue, daily orders, and new customer data in charts.
- Interactive tabs for easy navigation between different data sets.
- Hover tooltips for additional information on data points.
- User-friendly interface with clean design.

## Implementation Details

The project is structured as follows:

- **Components:** Contains reusable UI components such as charts, tabs, and tooltips.
- **Hooks:** Custom React hooks for fetching data from an API and handling state.
- **Pages:** React components representing different pages of the application.
- **Utils:** Utility functions and constants used throughout the application.

## Assumptions Made

- The application assumes that the data fetched from the API follows a specific format compatible with the chart components used.
- It assumes a continuous deployment pipeline with Vercel, so instructions for deployment are tailored accordingly.



## Installation and Usage

1. **Clone the repository:**

    ```bash
    git clone [repository-url]
    ```

2. **Navigate to the project directory:**

    ```bash
    cd [project-directory]
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

5. **Access the application in your browser at [http://localhost:3000](http://localhost:3000).**

## Deployment

The application is deployed on Vercel. To deploy the application:

1. **Install the Vercel CLI:**

    ```bash
    npm install -g vercel
    ```

2. **Log in to your Vercel account:**

    ```bash
    vercel login
    ```

3. **Deploy the application:**

    ```bash
    vercel
    ```

Follow the prompts to configure deployment settings.

## Quality of Code

The codebase emphasizes readability, maintainability, and efficiency through:

- Consistent coding style following best practices.
- Clear separation of concerns between components, hooks, and utility functions.
- Descriptive variable names and comments where necessary.
- Efficient data fetching and state management using React hooks.

## Functionality and Usability

The integrated components provide an intuitive user experience by:

- Presenting data in visually appealing charts with meaningful labels and colors.
- Offering interactive tabs for seamless navigation between different data sets.
- Providing hover tooltips for additional context and information.
- Ensuring responsiveness for optimal viewing across devices.

## Feedback and Contributions

Feedback and contributions to this project are welcome! Please feel free to submit issues or pull requests with any suggestions, bug fixes, or enhancements.
