import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import "../Styles/NavBar.css";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import { cartActions } from "../Features/cart";
const reducer = (state, action) => {
  state = action.payload;
  return state;
};
function NavBar() {
  const cart = useSelector((state) => state.cart.value);
  const dispatchCart = useDispatch();
  const displayCart = [
    ...cart
      .reduce((map, item) => map.set(item.title, item), new Map())
      .values(),
  ];
  const cartRef = useRef();
  const listRef = useRef();
  const overlayRef = useRef();
  const [activeLink, dispatch] = useReducer(reducer, "");
  const toggleCart = () => {
    if (cartRef.current.style.display === "none") {
      cartRef.current.style.display = "block";
    } else {
      cartRef.current.style.display = "none";
    }
  };
  const hideNavList = () => {
    listRef.current.style.transform = "translate(-100%)";
    overlayRef.current.style.display = "none";
  };
  return (
    <div className="container">
      <nav>
        <div className="logo-container">
          <div className="bars-icons">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                listRef.current.style.transform = "translate(0)";
                overlayRef.current.style.display = "block";
              }}
            />
          </div>
          <div className="logo">
            <h1>
              <Link to="/" onClick={() => dispatch({ payload: "" })}>
                <div className="logo-svg"></div>
              </Link>
            </h1>
          </div>
          <div className="nav-list">
            <div
              className="overlay"
              ref={overlayRef}
              onClick={hideNavList}
            ></div>
            <ul ref={listRef}>
              <li>
                <FontAwesomeIcon icon={faX} onClick={hideNavList} />
              </li>
              <li>
                <Link
                  to="/collections"
                  className={activeLink === "collections" ? "active" : ""}
                  onClick={() => {
                    dispatch({ payload: "collections" });
                  }}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className={activeLink === "men" ? "active" : ""}
                  onClick={() => {
                    dispatch({ payload: "men" });
                  }}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className={activeLink === "women" ? "active" : ""}
                  onClick={() => {
                    dispatch({ payload: "women" });
                  }}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={activeLink === "about" ? "active" : ""}
                  onClick={() => {
                    dispatch({ payload: "about" });
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={activeLink === "contact" ? "active" : ""}
                  onClick={() => {
                    dispatch({ payload: "contact" });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-profile">
          <div className="cart-container">
            <FontAwesomeIcon icon={faCartShopping} onClick={toggleCart} />
            <div className="items-badge" onClick={toggleCart}>
              {cart.length === 0 ? "" : cart.length}
            </div>
            <div className="cart" ref={cartRef} style={{ display: "none" }}>
              <h2>Cart</h2>
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <div>
                  {displayCart.map((product) => (
                    <Product
                      key={Math.floor(Math.random() * 10000)}
                      product={product}
                    />
                  ))}
                  <button onClick={() => dispatchCart(cartActions.clearCart())}>Checkout</button>
                </div>
              )}
            </div>
          </div>
          <div className="profile-avatar"></div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
