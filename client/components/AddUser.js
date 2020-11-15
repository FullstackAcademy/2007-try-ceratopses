import React from "react"
import { connect } from "react-redux"
import { addUser } from "../store/users"
import Form from "./Form"

const AddUser = ({ addUser }) => {
	return (
		<Form
			id="addUserPanel"
			title="Add New User"
			buttonLabel="Add User"
			submit={addUser}
			state={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				admin: false,
			}}
		>
			{onChange => (
				<>
					<label htmlFor="email">E-Mail:</label>
					<input name="email" onChange={onChange}></input>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" onChange={onChange}></input>
					<label htmlFor="firstName">First Name:</label>
					<input name="firstName" onChange={onChange}></input>
					<label htmlFor="lastName">Last Name:</label>
					<input name="lastName" onChange={onChange}></input>
					<label htmlFor="admin">Grant Admin Rights?</label>
					<select name="admin" onChange={onChange}>
						<option name="true">Yes</option>
						<option name="false">No</option>
					</select>
				</>
			)}
		</Form>
	)
}

const mapDispatch = dispatch => ({ addUser: user => dispatch(addUser(user)) })

export default connect(null, mapDispatch)(AddUser)
