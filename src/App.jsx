import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Posts />
    </React.Fragment>
  );
}

export default App;
