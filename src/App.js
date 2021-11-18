import React, { Component, Suspense } from 'react';
import {
  Redirect,
  // HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  LoginComponent,
  DasboardComponent,
  GroupsComponent,
  WebsiteComponent,
  AddWebsiteComponent,
  EditWebsite,
  Content,
  AddContent,
  EditContent,
  Users,
  AddUsers,
  EditUsers,
  ChangePassword,
  DomainStatus,
  DomainItem,
  NoMatch,
} from './pages';

import routes from './routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('auth') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.getItem('auth') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
class App extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      // isAuthenticated: false,
    };
  }

  render() {
    return (
      <Suspense fallback={loading}>
        <Router>
          <Switch>
            <LoginRoute
              exact
              path="/"
              name="Login"
              component={LoginComponent}
            />
            {/* {
              routes.map((route, idx) => {
                return route.component && (
                  // <PrivateRoute
                  //   key={idx}
                  //   path={route.path}
                  //   exact={route.exact}
                  //   name={route.name}
                  //   render={props => (
                  //     <Component {...props} />
                  //   )} />
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) =>
                      localStorage.getItem('auth') ? (
                        <Component {...props} />
                      ) : (
                        <Redirect
                          to={{ pathname: '/', state: { from: props.location } }}
                        />
                      )
                    }
                  />
                )
              })
            } */}
            <PrivateRoute
              exact
              path="/dashboard"
              name="Dashboard"
              component={DasboardComponent}
            />
            <PrivateRoute
              exact
              path="/groups"
              name="Groups"
              component={GroupsComponent}
            />
            <PrivateRoute
              exact
              path="/website"
              name="Website"
              component={WebsiteComponent}
            />
            <PrivateRoute
              exact
              path="/website/add"
              name="Add Website"
              component={AddWebsiteComponent}
            />
            <PrivateRoute
              exact
              path="/website/:slug"
              name="Edit Website"
              component={EditWebsite}
            />
            <PrivateRoute
              exact
              path="/content"
              name="Content"
              component={Content}
            />
            <PrivateRoute
              exact
              path="/content/add"
              name="Add Content"
              component={AddContent}
            />
            <PrivateRoute
              exact
              path="/content/:slug"
              name="Edit Content"
              component={EditContent}
            />
            <PrivateRoute
              exact
              path="/users"
              name="Users"
              component={Users}
            />
            <PrivateRoute
              exact
              path="/users/add"
              name="Add Users"
              component={AddUsers}
            />
            <PrivateRoute
              exact
              path="/users/:slug"
              name="Edit Users"
              component={EditUsers}
            />
            <PrivateRoute
              exact
              path="/change-password"
              name="Change Password"
              component={ChangePassword}
            />
            <PrivateRoute
              exact
              path="/domain"
              name="Domain Status"
              component={DomainStatus}
            />
            <PrivateRoute
            exact
            path="/domainitem/:slug"
            name="Domain Item"
            component={DomainItem}
          />
            <Route path="*" name="No Match" component={NoMatch} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default App;
