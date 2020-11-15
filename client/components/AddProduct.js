import React from "react"
import { connect } from "react-redux"
import { addProduct } from "../store/products"
import Form from "./Form"

const AddProduct = ({ addProduct }) => {
	const { lightRequirement } = this.state
	const lightRequirements = [
		"full sun",
		"bright light",
		"partial shade",
		"shade",
		"na",
	]

	return (
		<Form
			id="addProductPanel"
			title="Add New Product"
			buttonLabel="Add Product"
			submit={addProduct}
			state={{
				title: "",
				photoUrl: "",
				price: 0,
				category: [],
				tags: "",
				lightRequirement: "na",
				description: "",
				inventory: 0,
			}}
		>
			{onChange => (
				<>
					<label htmlFor="title">Title:</label>
					<input name="title" onChange={onChange}></input>
					<label htmlFor="photoUrl">Photo URL:</label>
					<input name="photoUrl" onChange={onChange}></input>
					<label htmlFor="price">Price:</label>
					<input name="price" onChange={onChange}></input>
					<label htmlFor="category">Category:</label>
					<input name="category" onChange={onChange}></input>
					<label htmlFor="tags">Tags:</label>
					<input name="tags" onChange={onChange}></input>
					<label htmlFor="lightRequirement">Light Requirement:</label>
					<select name="lightRequirement" onChange={onChange}>
						{lightRequirements.map(lightOption => (
							<option
								key={lightOption}
								name={lightOption}
								selected={lightRequirement === lightOption ? "selected" : ""}
							>
								{lightOption}
							</option>
						))}
					</select>
					<label htmlFor="description">Description:</label>
					<textarea name="description" onChange={onChange}></textarea>
					<label htmlFor="inventory">Inventory:</label>
					<input name="inventory" onChange={onChange}></input>
				</>
			)}
		</Form>
	)
}

const mapDispatch = dispatch => ({
	addProduct: product => dispatch(addProduct(product)),
})

export default connect(null, mapDispatch)(AddProduct)
