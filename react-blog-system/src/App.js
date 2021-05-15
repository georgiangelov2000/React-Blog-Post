import './App.css';
import CreatePost from './components/CreatePost/CreatePost'
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <CreatePost />
      <Switch>
        <Route to="/posts" component={Posts} />
        <Route to="/post/:id" component={PostDetails} />
      </Switch>
    </div>
  );
}

export default App;
