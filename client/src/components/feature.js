import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    debugger;
    return (
      <div>
        Feature: {this.props.message || 'Loading...'}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  message: state.auth.message,
});


export default connect(mapStateToProps, actions)(Feature);
