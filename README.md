# VoyageCraft – Craft your perfect journey with ease.

## Introduction

VoyageCraft is a user-friendly web application designed to simplify travel planning. It allows users to create, customize, and manage their travel itineraries efficiently. By leveraging React for a dynamic frontend and Firebase for backend services, VoyageCraft provides a seamless experience for planning trips, including adding destinations, activities, and notes. This application aims to eliminate the stress of travel planning by consolidating all necessary information in one place.

## Project Type

Frontend

## Deployed App

Frontend: [https://voyagecraft-planner.web.app](https://voyagecraft-planner.web.app)
Database: Firebase Firestore (No direct URL, managed through Firebase Console)

## Video Walkthrough of the project

[Insert Link to a 1-3 minute video walkthrough of the application features here]

## Video Walkthrough of the codebase

[Insert Link to a 1-5 minute video walkthrough of the codebase here]

## Features

- **User Authentication:** Secure signup and login functionality using Firebase Authentication.
- **Itinerary Creation:** Easily add new itineraries with destination, start and end dates.
- **Itinerary Listing:** View and manage all created itineraries.
- **Detailed Itinerary View:** Access detailed information about each itinerary.
- **Real-time Data:** Data persistence and real-time updates using Firebase Firestore.
- **Responsive Design:** Ensures the application is usable across different devices.

## Design Decisions or Assumptions

-      Used React for the frontend to create a reactive and component-based user interface.
-      Leveraged Firebase for its authentication and Firestore database capabilities, simplifying backend management.
-      Assumed that users would prefer a clean and intuitive interface for ease of use.
- Assumed that users would want to have their data saved and accessible across multiple devices.
- Assumed that data security is paramount, hence the use of Firebase's secure authentication and database rules.

## Installation & Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/programm3d/VoyageCraft.git]
    cd VoyageCraft
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Firebase:**

    - Create a Firebase project on the Firebase Console.
    - Enable Authentication and Firestore in your project.
    - Copy your Firebase configuration object from the Firebase Console and replace the placeholder in `src/firebase.js`.

4.  **Run the application:**

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173/`).

## Usage

1.  **Sign Up or Log In:** Create an account or log in to access the application.
2.  **Create an Itinerary:** Click the "Add Itinerary" button to create a new itinerary.
3.  **View Itineraries:** View all your created itineraries on the main page.
4.  **View Details:** Click on an itinerary to view its details.
5.  **Modify Itinerary:** Modify or delete itinerary details as needed.

Include screenshots as necessary.

## Credentials

For testing purposes, you can create a test account using the signup page.

## APIs Used

- **Firebase Authentication:** Used for user authentication and management.
- **Firebase Firestore:** Used for storing and retrieving itinerary data in real-time.

## API Endpoints

(Since this is a front-end only application, there are no direct API endpoints beyond those provided by Firebase.)

## Technology Stack

- **React:** For building the user interface.
- **Vite:** For fast development and build tooling.
- **Firebase Authentication:** For user authentication.
- **Firebase Firestore:** For real-time database functionality.
- **JavaScript (ES6+):** For application logic.
- **npm:** For package management.
