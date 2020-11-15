import React from "react"

export default class AddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = this.props.state
	}

	changeState = ev => {
		this.setState({ [ev.target.name]: ev.target.value })
	}

	submit = ev => {
		ev.preventDefault()
		this.props.submit(this.state)
	}

	render() {
		return (
			<div id={this.props.id} className="flexColumn">
				<h2>{this.props.title}</h2>
				<form className="flexColumn scrollable">
					{this.props.children(this.changeState)}
				</form>
				<button type="submit" onClick={ev => this.submit(ev)}>
					{this.props.buttonLabel}
				</button>
			</div>
		)
	}
}
