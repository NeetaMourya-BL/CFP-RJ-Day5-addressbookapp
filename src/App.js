import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import AddContact from './components/add-contact/addcontact';
import NotFound from './components/home/notfound';
function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AddContact} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
