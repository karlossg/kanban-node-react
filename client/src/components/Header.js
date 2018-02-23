import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper  light-blue lighten-3">
          <a class="left brand-logo">KanbanIT</a>
          <ul class="right">
            <li>
              <a class="waves-effect waves-light btn">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;