
import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  username = React.createRef();
  state = { account: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
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
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const err = this.validate();
    console.log("errors", JSON.stringify(err));
    this.setState({ errors: err || {} });
    console.log(this.state);
    //const username = this.username.current.value;
    if (err) return;
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };
    const msg = this.validateProperty(input);
    if (msg) errors[input.name] = msg;
    else delete errors[input.name];
    account[input.name] = input.value;
    this.setState({ errors, account });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            onChange={this.handleChange}
            value={account.username}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={account.password}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm