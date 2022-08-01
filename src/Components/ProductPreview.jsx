import {
  faAngleLeft,
  faAngleRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef, useState } from "react";
import "../Styles/ProductPreview.css";
function ProductPreview() {
  const [index, setIndex] = useState(1);
  const imageRef = useRef();
  const popUpPreviewRef = useRef();
  const slideRight = () => {
    if (index === 4) {
      return setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };
  const slideLeft = () => {
    if (index === 1) {
      return setIndex(4);
    } else {
      setIndex(index - 1);
    }
  };
  const displayPopUp = (index) => {
    popUpPreviewRef.current.style.display = "flex";
    setIndex(index);
  };
  return (
    <div className="product-preview">
      <div
        className="product-preview-image"
        ref={imageRef}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "./Images/image-product-" + index + ".jpg"
          })`,
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} onClick={slideLeft} />
        <FontAwesomeIcon icon={faAngleRight} onClick={slideRight} />
      </div>
      <div className="product-thumbnails">
        <div
          className={index === 1 ? "thumbnail active-thumbnail" : "thumbnail"}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "./Images/image-product-" + 1 + ".jpg"
            })`,
          }}
          onClick={() => {
            displayPopUp(1);
          }}
        ></div>
        <div
          className={index === 2 ? "thumbnail active-thumbnail" : "thumbnail"}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "./Images/image-product-" + 2 + ".jpg"
            })`,
          }}
          onClick={() => {
            displayPopUp(2);
          }}
        ></div>
        <div
          className={index === 3 ? "thumbnail active-thumbnail" : "thumbnail"}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "./Images/image-product-" + 3 + ".jpg"
            })`,
          }}
          onClick={() => {
            displayPopUp(3);
          }}
        ></div>
        <div
          className={index === 4 ? "thumbnail active-thumbnail" : "thumbnail"}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "./Images/image-product-" + 4 + ".jpg"
            })`,
          }}
          onClick={() => {
            displayPopUp(4);
          }}
        ></div>
      </div>
      <div
        className="pop-up-preview"
        style={{ display: "none" }}
        ref={popUpPreviewRef}
      >
        <div
          className="product-preview-image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "./Images/image-product-" +
              index +
              ".jpg"
            })`,
          }}
        >
          <div className="close-icon">
            <FontAwesomeIcon
              icon={faX}
              onClick={() => {
                popUpPreviewRef.current.style.display = "none";
              }}
            />
          </div>
          <FontAwesomeIcon icon={faAngleLeft} onClick={slideLeft} />
          <FontAwesomeIcon icon={faAngleRight} onClick={slideRight} />
        </div>
        <div className="product-thumbnails">
          <div
            className={index === 1 ? "thumbnail active-thumbnail" : "thumbnail"}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./Images/image-product-" + 1 + ".jpg"
              })`,
            }}
            onClick={() => {
              displayPopUp(1);
            }}
          ></div>
          <div
            className={index === 2 ? "thumbnail active-thumbnail" : "thumbnail"}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./Images/image-product-" + 2 + ".jpg"
              })`,
            }}
            onClick={() => {
              displayPopUp(2);
            }}
          ></div>
          <div
            className={index === 3 ? "thumbnail active-thumbnail" : "thumbnail"}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./Images/image-product-" + 3 + ".jpg"
              })`,
            }}
            onClick={() => {
              displayPopUp(3);
            }}
          ></div>
          <div
            className={index === 4 ? "thumbnail active-thumbnail" : "thumbnail"}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./Images/image-product-" + 4 + ".jpg"
              })`,
            }}
            onClick={() => {
              displayPopUp(4);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
