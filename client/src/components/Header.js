import React, { Component } from 'react';

const styleLogo = {
  marginLeft: '10px'
}

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper  light-blue lighten-1">
          <a className="left brand-logo" style={styleLogo}>KanbanIT</a>
          <ul className="right">
            <li>
              <a className="waves-effect waves-light btn">Login</a>
            </li>
          </ul>
        </div>
      </nav >
    )
  }
}

export default Header;