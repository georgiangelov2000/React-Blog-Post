import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import UpdatePost from "./components/UpdatePost/UpdatePost";
import { Router } from "@reach/router";
import 'antd/dist/antd.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Posts path="posts" />
        <PostDetails path="post/:id" />
        <CreatePost path="create_post" />
        <UpdatePost path="update_post/:id" />
      </Router>
    </div>
  );
}

export default App;
