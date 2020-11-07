import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({ product }) => {
  return (
    <Link to={`/admin/products/${product.id}`}>
      <div className="card">
        <h4>{product.title}</h4>
        <p>
          Categories: {product.category.join(",")}
        </p>
        <p>Price: ${product.price}</p>
        <p>Inventory: {product.inventory}</p>
      </div>
    </Link>
  );
};

export default ProductRow;
