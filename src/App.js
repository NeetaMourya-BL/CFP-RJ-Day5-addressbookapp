import logo from './logo.svg';
import './App.css';
import payrollform from './components/payroll-form/payrollform';
import home from './components/home/home';
import notfound from './components/home/notfound';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/payroll-form/add" component={payrollform} />
          <Route component={notfound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
