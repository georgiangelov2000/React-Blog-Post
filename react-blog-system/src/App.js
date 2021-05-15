import './App.css';
import CreatePost from './components/CreatePost/CreatePost'
import Posts from './components/Posts/Posts';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <CreatePost />
      <Switch>
        <Route to="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
