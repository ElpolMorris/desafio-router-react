import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/home/Home'
import Menu from './components/menu/Menu'
import ContextLoginManager from './contexts/ContextLoginManager'
import ContextProductManager from './contexts/ContextProductManager'
import NotFound from './containers/not-found/NotFound';
import Login from './containers/login/Login';
import PrivateRoute from './components/private-router/PrivateRouter';
import Create from './containers/create/Create';
import Remove from './containers/remove/Remove';
import Detail from './containers/detail/Detail';
import Edit from './containers/edit/Edit';

function App() {
  return (
    <ContextLoginManager>
      <ContextProductManager>
        <div>
          <Router>
            <Menu />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route exact path="/list">
                  <Home />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/remove/:id" exact>
                  <PrivateRoute path="/remove/:id" component={Remove} />
                </Route>
                <Route path="/edit/:id" exact>
                  <PrivateRoute path="/edit/:id" component={Edit} />
                </Route>
                <Route path="/detail/:id" exact>
                  <Detail />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </ContextProductManager>
    </ContextLoginManager>
  );
}

export default App
