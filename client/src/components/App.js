import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header'

const Landing = () => <h2> Landing </h2>
const Dashboard = () => <h2> Dashboard </h2>
const KanbanNew = () => <h2> KanbanNew </h2>

const App = () => {
  return (
    <div>
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

export default App