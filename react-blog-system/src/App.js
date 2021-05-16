import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import UpdatePost from "./components/UpdatePost/UpdatePost";
import { Router } from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
        <Posts path="posts " />
        <PostDetails path="post/:id" />
        <CreatePost path="create_post" />
        <UpdatePost path="update_post/:id" />
      </Router>
    </div>
  );
}

export default App;
