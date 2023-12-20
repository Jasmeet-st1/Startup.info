# Startup.info

Welcome to the MERN Stack Startup.info App repository! This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app is designed to provide information about various startups, allowing users to explore and discover new and exciting ventures.

## Introduction

This project is a demonstration of a MERN stack application, showcasing the integration of MongoDB as the database, Express.js for the backend, React for the frontend, and Node.js as the runtime environment. The app features a user-friendly interface to explore information about startups, including details such as name, industry, and description.

## Features 

- Startup Information: View details about various startups.
- Search Functionality: Easily search for startups based on different criteria.
- Responsive Design: The app is designed to work seamlessly across different devices.

# Getting Started

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Jasmeet-st1/Startup.info.git
```

2. Navigate to the project directory:

```bash
cd Startup.info
```

3. Install server dependencies:

```bash
cd server
npm install
```

4. Install client dependencies

```bash
cd ../client
npm install
```

5. Make an .env file for both client and server
    - For client, put a variable
    ```bash
    REACT_APP_BASE_URL = "http://localhost:8000"
    ```

   - For server, make these two variables
   ```bash
   DB_URI
   PORT
   ```
      


## Usage

1. Start server
   ```bash
   cd ../server
   npm start
   ```
2. Start client
   ```bash
   cd ../client
   npm start
   ```
3. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the MERN Stack Startup.info App.


