import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

export class Signup extends Component {

  render() {
    const { handleSubmit, fields: {
      email,
      password,
      passwordConfirm,
    },
    meta,
  } = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field className="form-control" component={renderField} name="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field type="password" className="form-control" component={renderField} name="password" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password Confirmation</label>
          <Field name="passwordConfirm" type="password" className="form-control" component={renderField} {...passwordConfirm} />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    )
  }
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);


const validate = (formProps) => {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}


const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default reduxForm({
  form: 'signup',
  fields: [
    'email',
    'password',
    'passwordConfirm',
  ],
  validate,
})(
  connect(mapStateToProps, mapDispatchToProps)(Signup)
);
