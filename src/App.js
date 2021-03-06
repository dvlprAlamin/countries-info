import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Region from './components/Region/Region';
import RegionalBloc from './components/RegionalBloc/RegionalBloc';
import Countries from './components/Countries/Countries';
function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/regions">
            <Region />
          </Route>
          <Route path="/regionalblocs">
            <RegionalBloc />
          </Route>
          <Route path="/:info/:value/countries">
            <Countries />
          </Route>
          <Route path="/country/:name">
            <CountryInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
