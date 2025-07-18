import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function addToCart() {
    setInCart(incart => !incart)
  }
  const liClass = inCart ? "in-cart" : "";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart ? "Add To Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
