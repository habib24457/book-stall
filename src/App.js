import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import AddBook from './Components/AddBook/AddBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>

        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/addBook'>
          <AddBook></AddBook>
        </Route>

        <Route path='/login'>
          <Login></Login>
        </Route>
        
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
