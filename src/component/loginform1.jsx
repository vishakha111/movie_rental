import React, { Component } from "react";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  handleChange = e => {
    //console.log(e.currentTarget);
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();
    const error = this.validate();
    console.log(error);
    this.setState({ errors: error || {} });
    //console.log(JSON.stringify(this.state));
    if (error) return;
    //yet to be done
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.account.username}
              id="username"
              onChange={this.handleChange}
              className="form-control"
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={this.state.account.password}
              id="password"
              onChange={this.handleChange}
              className="form-control"
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
