import React from "react";
import { connect } from "react-redux";
import { deleteGod } from "../actions";

class GodsList extends React.Component {
  handleDelete = god => {
    console.log("beef", god);
    this.props.deleteGod(god);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        God List!
        {this.props.greekGods.map(god =>
          <div>
            {god.name}
            <button onClick={() => this.handleDelete(god)}>Delete Me</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    greekGods: state.gods.greekGods
  };
};
// Not necessary when you pass { addGod } in place of mapDispatchToProps:
// const mapDispatchToProps = dispatch => {
//   return {
//     addGod: (god) => dispatch(addGod(god))
//   }
// }

export default connect(mapStateToProps, { deleteGod })(GodsList);
