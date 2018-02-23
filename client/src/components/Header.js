import React, { Component } from 'react';
import { connect } from 'react-redux';

const styleLogo = {
  marginLeft: '10px'
}

class Header extends Component {
  renderOptions() {
    switch (this.props.authReducer) {
      case null:
        return;
      case false:
        return <a className="waves-effect light-blue btn">Login</a>
      default:
        return <a className="waves-effect light-blue btn">Logout</a>
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue lighten-1">
          <a className="left brand-logo" style={styleLogo}>KanbanIT</a>
          <ul className="right">
            <li>
              {this.renderOptions()}
            </li>
          </ul>
        </div>
      </nav >
    )
  }
}

function mapStateToProps({ authReducer }) {
  return { authReducer };
}

export default connect(mapStateToProps)(Header);