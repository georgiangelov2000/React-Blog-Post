import "./App.css";
import Header from "./components/Header/Header";
import CreatePost from "./components/CreatePost/CreatePost";
import UpdatePost from "./components/UpdatePost/UpdatePost";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { Router } from "@reach/router";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app_container">
      <Header />
      <Router>
        <Posts default path="posts" />
        <PostDetails path="post/:id" />
        <CreatePost path="create_post" />
        <UpdatePost path="update_post/:id" />
        <SignUp path="sign_up" />
        <SignIn path="sign_in" />
      </Router>
    </div>
  );
}

export default App;
