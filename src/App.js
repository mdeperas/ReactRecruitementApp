import React, { Component } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  firstNameChange = e => {
    this.setState({ ...this.state, firstName: e.target.value });
  };

  lastNameChange = e => {
    this.setState({ ...this.state, lastName: e.target.lastName });
  };

  onSubmit = () => {
    alert("Alert");
  };

  render() {
    const { firstName, lastName } = this.state;

    return React.createElement(
      "div",
      {},
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={this.firstNameChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={this.lastNameChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Register</Button>
      </Form>
    );
  }
}

export default App;
