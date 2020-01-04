import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TypicodeDataProvider from '../../../domain/provider/mock/index';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    TypicodeDataProvider.getAllPosts().then(data =>
      this.setState({ posts: data })
    );
  }

  render() {
    return (
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="display-4" style={{ textAlign: 'left' }}>
              Posts list
            </h1>
            {this.state.posts.map(post => {
              return (
                <div className="card">
                  <div className="card-header">{post.title}</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{post.body}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(Home);
