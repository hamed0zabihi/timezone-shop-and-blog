import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../Redux/Actions/Products/Cart";

const SingleProductDetails = ({
  id,
  title,
  price,
  inventory,
  description,
  image,
  product,
}) => {
  const [numberOfProduct, setnumberOfProduct] = useState(1);
  const handleIncDecProduct = (type) => {
    if (type === "inc" && numberOfProduct < inventory) {
      return setnumberOfProduct(numberOfProduct + 1);
    } else if (type === "dec" && numberOfProduct > 1) {
      return setnumberOfProduct(numberOfProduct - 1);
    }
  };
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product, numberOfProduct));
  };
  const cart = useSelector((state) => state.cart);
  const isExistProductToCart = cart.find((el) => el.id === id);
  if (isExistProductToCart) console.log("isExistProductToCart", true);
  return (
    <>
      <div className="col-lg-8">
        <div className="single_product_text text-center">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card_area">
            <div className="product_count_area">
              <p>Quantity</p>
              <div className="product_count d-inline-block">
                <span className="product_count_item inumber-decrement">
                  <i
                    className="ti-minus"
                    onClick={() => handleIncDecProduct("dec")}
                  ></i>
                </span>
                <input
                  className="product_count_item input-number"
                  type="text"
                  min="0"
                  max="10"
                  defaultValue="1"
                  value={numberOfProduct}
                />
                <span className="product_count_item number-increment">
                  <i
                    className="ti-plus"
                    onClick={() => handleIncDecProduct("inc")}
                  ></i>
                </span>
              </div>
              <p>${price * numberOfProduct}</p>
            </div>
            <div className="add_to_cart">
              {isExistProductToCart ? (
                <Link to="/cart" className="btn_3">
                  check in cart
                </Link>
              ) : (
                <button className="btn_3" onClick={handleAddToCart}>
                  add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
