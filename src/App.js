import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import addcontact from './components/addcontact/addcontact';
import editcontact from './components/addcontact/editcontact';
import Home from './components/home/home';
import NotFound from './components/home/notfound';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addcontact/add" component={addcontact} />
          <Route exact path="/addcontact/edit/:id" component={editcontact} />
          <Route component={NotFound} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;