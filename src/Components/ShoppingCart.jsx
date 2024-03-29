import React, { useState } from "react";

const ShoppingCart = ({
  value,
  setValue,
  item,
  price,
  original,
  stock,
  index,
  id,
  options,
  ratings,
  Details,
  Image,
}) => {
  const [status, setStatus] = useState(true);
  const addToCart = () => {
    setValue((value = value + 1));
    setStatus(false);
  };
  const removeFromCart = () => {
    setValue((value = value - 1));
    setStatus(true);
  };
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5" key={index}>
      <div className="card h-100">
        {stock ? (
          <div
            className="badge bg-dark text-white position-absolute text-black d-flex justify-content-end "
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item}</h5>
            <div>{ratings ? "⭐⭐⭐⭐⭐" : ""}</div>
            <span className="text-muted text-decoration-line-through">
              {original}
            </span>{" "}
            {price}
            <h5 className="fw-bolder">{stock}</h5>
            <p>{Details}</p>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {options ? (
              status ? (
                <a
                  className="btn btn-outline-dark mt-auto"
                  onClick={addToCart}
                  type="submit"
                >
                  Add To Cart
                </a>
              ) : (
                <a
                  className="removeCart btn btn-outline-dark mt-auto"
                  onClick={removeFromCart}
                  type="submit"
                >
                  Remove From Cart
                </a>
              )
            ) : (
              <a className="btn btn-outline-dark mt-auto" type="submit">
                View Options
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ShoppingCart;   