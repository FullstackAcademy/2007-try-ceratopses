import React from 'react'

const EditProduct = ({title, photoUrl, price, category, tags, lightRequirement, description, inventory, updateProduct, deleteProduct, change}) =>{

  const lightRequirements = ["full sun" , "bright light", "partial shade", "shade", "na"]

    return (
      <div id="editProductPanel" className="flexColumn">
          <h2>Edit Product {title}</h2>
          <form className="flexColumn scrollable">
            <label htmlFor="title">Title:</label>
            <input name="title" value={title} onChange={change}></input>
            <label htmlFor="photoUrl">Photo URL:</label>
            <input name="photoUrl" value={photoUrl} onChange={change}></input>
            <label htmlFor="price">Price:</label>
            <input name="price" value={price} onChange={change}></input>
            <label htmlFor="category">Category:</label>
            <input name="category" value={category} onChange={change}></input>
            <label htmlFor="tags">Tags:</label>
            <input name="tags" value={tags} onChange={change}></input>
            <label htmlFor="lightRequirement">Light Requirement:</label>
            <select name="lightRequirement" onChange={change}>
            {lightRequirements.map(lightOption => <option key={lightOption} name={lightOption} selected ={ lightRequirement===lightOption ? "selected" : ""}>{lightOption}</option>)}
            </select>
            <label htmlFor="description">Description:</label>
            <textarea name="description" value={description} onChange={change}></textarea>
            <label htmlFor="inventory">Inventory:</label>
            <input name="inventory" value={inventory} onChange={change}></input>
          </form>
          <button type='submit' onClick={updateProduct}>Save Changes</button>
          <button onClick={deleteProduct}>Delete Product</button>
      </div>
    )
  }


export default EditProduct
