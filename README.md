# Notez

A Note Making Web Application

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Description

This is a basic note-making web application built with the MERN stack (MongoDB, Express, React, Node.js). The application includes authentication using JWT tokens and supports the following functionalities:

- **Create Notes**: Users can add new notes.
- **View Notes**: Users can view a list of their notes.
- **Update Notes**: Users can edit their existing notes.
- **Delete Notes**: Users can remove notes.
- **Search Notes**: Users can search for specific notes.

## Features

- **User Authentication**: Secure JWT-based authentication.
- **CRUD Operations**: Create, Read, Update, and Delete notes.
- **Search Functionality**: Search notes by keywords.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. **Prerequisites:**

- Node.js (version 14 or higher)
- MongoDB (local installation or cloud service)

2. **Clone the Repository:**

```bash
git clone https://github.com/satyanandshreyash/Notez.git
cd Notez
```

### Backend Setup

1. **Navigat to Backend directory:**

```bash
cd Backed
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a .env file in the Backend directory and add your environment variables. Example:**

```makefile
CONNECTION_STRING=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_jwt_secret
PORT=8000
FRONTEND_URL=http://localhost:5173
```

4. **Start the server:**

```bash
npm Start
```

### Frontend Setup

1. **Navigate to Frontend directory:**

```bash
cd ../Frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a .env file in the Frontend directory and add your environment varialbles. Example:**

```makefile
VITE_BACKEND_URL=http://localhost:8000
```
**Note:** PORT(8000) should be same as mentioned in .env file present in Backed directory

4. **Start the React App:**
```bash
npm run dev
```

## Usage

1. Open the application in your browser (http://localhost:5173)
2. Register a new user or log in with existing credentials.
3. Use the interface to create, view, update, and delete notes.
4. Utilize the search function to find specific notes.

## Contributing

Feel free to open issues or submit pull requests to contribute to this project. Please ensure to follow the coding standards and provide descriptive commit messages.
