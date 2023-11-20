# React + Vite
Vercel Link for this project:-
https://terribly-tiny-tales-three.vercel.app/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Vite React App
This repository contains a Vite-powered React application that showcases a user profile with various components like Navbar, Profile, Post, and Toggle.

Components
App
File: App.jsx
Description: The main App component coordinates the rendering of the Navbar and Profile components. It manages state for user data, total posts, and the dark mode toggle.
Navbar
File: Navbar.jsx
Description: The Navbar component displays a navigation bar containing a logo, a dark mode toggle using the Toggle component, and a button for accessing courses.
Profile
File: Profile.jsx
Description: The Profile component renders a user's profile information, including their profile picture, details, statistics, about section, and user posts.
Post
File: Post.jsx
Description: The Post component displays a user's post content. It allows for expansion and contraction of lengthy posts.
Toggle
File: Toggle.jsx
Description: The Toggle component is a checkbox used for toggling between dark and light themes in the app.
Apologies for the confusion earlier. Here's the additional point for the README file regarding the structure and usage of the data.json file:

User Data Source - data.json
Local Data Storage: The application's user-related data is stored within the data.json file located in public folder, which contains details such as full name, follower and following counts, a brief bio, social URL, verification status, premium status, statistics data, and posts authored by the user.
The data.json file structure:

{
  "fullName": "Anuj Gosalia",
  "followersCount": 6482,
  "followingCount": 245,
  "about": "Co-founder & CEO at Terribly Tiny Tales.",
  "url": "https://instagram.com/anujgosalia",
  "isVerified": true,
  "isPremium": true,
  "statsData": [
    {
      "icon": "AiFillStar",
      "color": "#1DA1F2",
      "count": 125
    },
    // ... (Other statistical data)
  ],
  "posts": [
    {
      "heading": "A Changing World Order",
      "body": "The world is changing at a feverish pace...",
      // ... (Other post details)
    },
    // ... (Other posts)
  ]
}
This file serves as the local source of user data, allowing the application to fetch and display user-specific information dynamically.

Please include this information in your README file to provide clarity on how the data.json file is structured and utilized within the application to populate user-related content.

Libraries and Plugins Used
React: A JavaScript library for building user interfaces.
React Icons (AiFillStar, AiTwotoneLike, AiFillEye, AiFillHeart, MdVerified, RiCopperDiamondFill): Icon components used for various UI elements.
Vite: A fast, opinionated web dev build tool that serves your code via native ES Module imports.
CSS: Styling is implemented using CSS with specific styles defined in App.css.
Getting Started
Clone the Repository

git clone https://github.com/imasifakhtar/Terribly-Tiny-Tales-Assignment.git
Install Dependencies

npm install
Run the Development Server

npm run dev
Access the Application Open your browser and go to http://localhost:3000 to see the application.

Styling Details
The application uses CSS for styling, managing themes, and defining specific UI components' appearances. It leverages CSS variables for color schemes and media queries for responsiveness.
