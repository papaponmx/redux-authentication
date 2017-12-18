import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="na navbar-nav">
          <li className="nav-item">
            Sign in
          </li>
        </ul>
      </nav>
    )
  }
}

// const mapStateToProps = (state) => ({
//
// });
//
// const mapDispatchToProps = {
//
// }

export default Header;
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
