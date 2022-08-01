import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Features/cart";
import "../Styles/ProductDescription.css";
function ProductDescription() {
  const product = useSelector((state) => state.product.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="product-description">
      <div className="text-box">
        <h2>{product.company}</h2>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="price">
        <div className="price-discount">
          <p>
            {formatter.format(product.price - product.price * product.discount)}
          </p>
          <p>{product.discount * 100}%</p>
        </div>
        <p>{formatter.format(product.price)}</p>
      </div>
      <div className="buying">
        <div className="number-of-items">
          <p
            onClick={() => {
              setAmount(amount === 0 ? amount : amount - 1);
            }}
          >
            −
          </p>
          <p>{amount}</p>
          <p
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            +
          </p>
        </div>
        <button
          onClick={() => {
            for (let i = amount; i > 0; i--) {
              dispatch(cartActions.addProduct(product));
            }
            setAmount(0);
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
