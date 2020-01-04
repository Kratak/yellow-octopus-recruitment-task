import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './History';
import TaskDescription from './utils/TaskDescription/TaskDescription';
import Header from './utils/Header/Header';
import Post from './utils/Home/Post';
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
        component: TaskDescription,
      },
      {
        path: '/post',
        name: 'Post',
        component: Post,
      },
    ];
  }

  render() {
    const { activePath } = this.state;

    return (
      <>
        <Router>
          <Header activePath={activePath} routes={this.routes} />
          <Switch>
            {this.routes.map(({ path, name, component }) => {
              return (
                <Route exact key={path} path={path} component={component} />
              );
            })}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
