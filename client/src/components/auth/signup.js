import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

export class Signup extends Component {

  render() {
    return (
      <div>
        Signup
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
