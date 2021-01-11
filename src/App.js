import './assets/scss/global.scss';
import { MainNavbar } from './cmps/mainNavbar/mainNavbar';
import Routes from './routes'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Socials } from './cmps/socials/socials';
import { Circle } from './cmps/circle/circle';
function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Circle />
        <Switch>
          {Routes.map((route, key) => <Route exact path={route.path} component={route.component} key={key} />)}
        </Switch>
        <Socials></Socials>
      </Router>
    </div>
  );
}

export default App;
