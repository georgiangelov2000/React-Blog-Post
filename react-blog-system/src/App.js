import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CreatePost from "./components/CreatePost/CreatePost";
import UpdatePost from "./components/UpdatePost/UpdatePost";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { Router } from "@reach/router";
import { auth } from "./firebase";
import {navigate} from "@reach/router";
import "antd/dist/antd.css";

function App() {
  const [user, setUser] = useState(false);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      setUser(user);
    } else {
      console.log("no user is signed in ");
    }
  });

  const onSignOut = () => {
    auth
      .signOut()
      .then(function () {
        console.log("user signed out");
        setUser(false);
      })
      .catch(function (error) {
      });
      navigate("sign_in")
  };

  return (
    <div className="app_container">
      <Header user={user} onSignOut={onSignOut} />

      <Router>
        <SignUp path="sign_up" />
        <SignIn path="sign_in" default />
        <Posts path="blogs/:uid/posts" user={user} />
        <PostDetails path="blogs/:uid/post/:id" user={user} />
        <CreatePost path="create_post" user={user} />
        <UpdatePost path="update_post/:id" user={user} />
      </Router>
    </div>
  );
}

export default App;
