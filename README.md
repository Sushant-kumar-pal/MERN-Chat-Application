# WhatsApp Clone using MERN Stack

![WhatsApp Clone](whatsapp-clone.png)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## 1. Introduction

This WhatsApp Clone is a full-stack web application developed using the MERN (MongoDB, Express, React, Node.js) stack. It replicates the core functionality of WhatsApp, allowing users to create accounts, send and receive messages, create and join chat groups, and share multimedia content in real-time.

## 2. Features

- User registration and authentication.
- Real-time one-on-one and group messaging.
- Multimedia support for sending images, videos, and files.
- Message encryption for security.
- Notification alerts for new messages.
- User profile customization.
- Search for and add new contacts.
- View and manage chat history.

## 3. Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB (or a cloud-based MongoDB service)
- React development environment

## 4. Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/yourusername/whatsapp-clone.git
   ```

2. Navigate to the project folder:

   ```bash
   cd whatsapp-clone
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

5. Set up the MongoDB connection by creating a `.env` file in the server directory with the following content:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   ```

6. Start the server:

   ```bash
   cd server
   npm start
   ```

7. Start the client:

   ```bash
   cd client
   npm start
   ```

The application should now be running locally.

## 5. Usage

1. Register a new account or log in.
2. Create or join chat groups.
3. Start conversations and send messages.
4. Share images and files with your contacts.
5. Customize your user profile.
6. Enjoy real-time messaging and notifications.

## 6. Technologies Used

- **MongoDB:** Database for storing user data and chat history.
- **Express:** Server framework for building the backend.
- **React:** Frontend library for building the user interface.
- **Node.js:** Runtime environment for running the server.
- **Socket.io:** Real-time communication between clients and the server.
- **JWT (JSON Web Tokens):** Authentication and authorization.
- **Material-UI:** UI components and styling.

## 7. Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes, ensuring that code style and tests are in order.
5. Create a pull request to the main repository, describing your changes and the problem they solve.

We welcome contributions to enhance and improve this WhatsApp Clone.

## 8. License

This project is open-source and released under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in accordance with the terms and conditions specified in the license.
