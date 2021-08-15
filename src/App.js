import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


function App() {
  return (
    <div>
        <div className={'Users'}>
            <Users/>
        </div>

        <div className={'Posts'}>
            <Posts/>
        </div>

        <div className={'Comments'}>
            <Comments/>
        </div>
    </div>
  );
}

export default App;
