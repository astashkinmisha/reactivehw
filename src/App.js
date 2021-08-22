
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function App() {
  return (
      <Router>
    <div>

      <Link to={'/users'}> To Users</Link>
      <Link to={'/posts'}>To Posts </Link>

    </div>
        <Route path={'/users'} component={Users}/>
        <Route path={'/posts'} component={Posts}/>
      </Router>

  );
}

export default App;
