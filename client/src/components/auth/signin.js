import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderInput = field => (
  <div>
    <input {...field.input} type={field.type}/>
    {
      field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>
    }
  </div>);

  class Signin extends Component {
    handleFormSubmit({ email, password}) {
      this.props.signinUser({ email, password});
    }

    renderAlert(){
      if(this.props.errorMessage) {
        return (
          <div className="alert alert-danger">
            <strong>Oops!</strong> {this.props.errorMessage}
          </div>
        );
      }
    }

    render() {
      const { handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label> Email:</label>
            <Field
              name="email"
              component={renderInput}
              type="email"
            />
          </fieldset>
          <fieldset className="form-group">
            <label> Password:</label>
            <Field
              name="password"
              component={renderInput}
              type="password"
            />
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      errorMessage: state.auth.error
    }
  }

  export default reduxForm(
    {
      form: 'signin',
      fields: ['email', 'password'],
    })(
      connect(mapStateToProps, actions)(Signin)
    );
