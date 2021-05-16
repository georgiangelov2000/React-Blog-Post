import './App.css';
import CreatePost from './components/CreatePost/CreatePost'
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={CreatePost} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={PostDetails} />
      </Switch>
    </div>
  );
}

export default App;
