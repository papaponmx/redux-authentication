import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      )
    } else {
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="na navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {

}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
