import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import history from './History';
import axios from 'axios';
import TaskDescription from './utils/TaskDescription/TaskDescription';
import Header from './utils/Header/Header';
require('@babel/polyfill');

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePath: '/',
    };

    this.history = history;

    this.routes = [
      {
        path: '/',
        name: 'Task Description',
        Component: TaskDescription,
      },
    ];
  }

  render() {
    const { activePath } = this.state;

    return (
      <>
        <Router history={history}>
          <Header activePath={activePath} routes={this.routes} />
          <Switch>
            {this.routes.map(({ path, name, Component }) => {
              return (
                <Route key={path} path={path}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
