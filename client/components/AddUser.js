import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../store/users'

class AddUser extends React.Component{
constructor(){
  super();
  this.state = {firstName:"", lastName:"", email:"",password:"",admin:false}
  this.changeState=this.changeState.bind(this)
  this.submit=this.submit.bind(this)
}

changeState(ev){
 this.setState({[ev.target.name]: ev.target.value})
 console.log(this.state)
}

submit(ev){
  ev.preventDefault()
  console.log(this.state)
  this.props.addUser(this.state)
}

render(){
  return (

<div id="addUserPanel">
          <h2>Add New User</h2>
          <form>
          <label htmlFor="email">E-Mail:</label>
            <input name="email" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" onChange={(ev) =>this.changeState(ev)}></input>
            <label htmlFor="admin">Grant Admin Rights?</label>
            <select name="admin" onChange={(ev) =>this.changeState(ev)}>
              <option name="true">Yes</option>
              <option name="false">No</option>
            </select>
          </form>
        <button type='submit' onClick={(ev)=>this.submit(ev)}>Add User</button>
      </div>

)
  }
}

const mapDispatch = (dispatch) => ({addUser: (user) => dispatch(addUser(user))})

export default connect(null,mapDispatch)(AddUser)
