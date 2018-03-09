import React from "react"
import { connect } from "react-redux"
import { addGod } from "../actions"

class GodsList extends React.Component{
  state = {
    name: "",
    power: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // addGod2 = (god) => {
  //   dispatch(addGod(god))
  // }

  handleSubmit = (e) => {
    console.log("submitting god,", this.state)
    e.preventDefault()
    this.props.addGod(this.state)
  }

  render(){
    console.log(this.props)
    return(
      <div>
        God List!
        <form onSubmit={this.handleSubmit} >
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange}/>
          </div>
          <div>
            <label>Power</label>
            <input type="text" name="power" onChange={this.handleChange}/>
          </div>
          <div>
            <label>Redux</label>
            <input type="text" name="redux" onChange={this.handleChange}/>
          </div>
          <input type="submit"/>
        </form>
        {this.props.greekGods.map( god => <div>{god.name}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    greekGods: state.greekGods
  }
}
// Not necessary when you pass { addGod } in place of mapDispatchToProps:
// const mapDispatchToProps = dispatch => {
//   return {
//     addGod: (god) => dispatch(addGod(god))
//   }
// }

export default connect(mapStateToProps, {addGod})(GodsList)
