import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import connect from 'react-redux';
import * as actions from '../actions';

import Header from './Header'

const Landing = () => <h2> Landing </h2>
const Dashboard = () => <h2> Dashboard </h2>
const KanbanNew = () => <h2> KanbanNew </h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container" >
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/boards' component={Dashboard} />
            <Route path='/boards/new' component={KanbanNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const test = connect(null, actions)(App)

export { test };