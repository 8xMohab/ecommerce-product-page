import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Product.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Features/cart";
function Product({ product }) {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const price = product.price - product.price * product.discount;
  const amount = cart.filter((item) => item.title === product.title);
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="product">
      <div
        className="image"
        style={{ backgroundImage: `url("${product.image}")` }}
      ></div>
      <div className="text-box">
        <div>{product.title}</div>
        <span>{formatter.format(price)}</span>
        <span> x {amount.length} </span>
        <span>{formatter.format(price * amount.length)}</span>
      </div>
      <div className="trash-can">
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => {
            dispatch(
              cartActions.removeProduct(
                cart.filter((item) => item.title !== product.title)
              )
            );
          }}
        />
      </div>
    </div>
  );
}

export default Product;
