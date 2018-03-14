import React from "react";
import { connect } from "react-redux";
import { addGod } from "../actions";

class GodForm extends React.Component {
  state = {
    name: "",
    power: "",
    redux: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("submitting god,", this.state);
    e.preventDefault();
    this.props.addGod(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div>
          <label>Power</label>
          <input type="text" name="power" onChange={this.handleChange} />
        </div>
        <div>
          <label>Redux Analogy</label>
          <input type="text" name="redux" onChange={this.handleChange} />
        </div>
        <input type="submit" />
      </form>
    );
  }
}
export default connect(null, { addGod })(GodForm);
