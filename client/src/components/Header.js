import React, { Component } from 'react';

const style = {
  marginLeft: '10px'
}

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper  light-blue lighten-3">
          <a className="left brand-logo" style={style}>KanbanIT</a>
          <ul className="right">
            <li>
              <a className="waves-effect waves-light btn">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav >
    )
  }
}

export default Header;