import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styleLogo = {
  marginLeft: '10px'
};

class Header extends Component {
  renderOptions() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" className="waves-effect light-blue btn">
              Login
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout" className="waves-effect light-blue btn">
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue lighten-1">
          <Link
            to={this.props.auth ? '/boards' : '/'}
            className="left brand-logo"
            style={styleLogo}
          >
            KanbanIT
          </Link>
          <ul className="right">{this.renderOptions()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
