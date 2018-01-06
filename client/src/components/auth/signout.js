import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        Sorry to see you go...
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  signoutUser: actions.signoutUser
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Signout);
