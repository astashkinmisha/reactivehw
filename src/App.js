import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./componets/Users/Users";
import Posts from "./componets/Posts/Posts";
import Comments from "./componets/Comments/Comments";


function App() {
  return (
      <Router>
    <div>
        <Link to={'/users-page'}> Users </Link>
        <Link to={'/posts-page'}> Posts </Link>
      <Link to={'/comments-page'}> Comments </Link>
    </div>
          <Route path={'/users-page'} component={Users}/>
          <Route path={'/posts-page'} component={Posts}/>
          <Route path={'/comments-page'} component={Comments}/>
      </Router>
  );
}

export default App;
