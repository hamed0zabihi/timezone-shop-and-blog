import { useState } from "react";

const SingleProductDetails = ({
  id,
  title,
  price,
  quantity,
  description,
  image,
}) => {
  const [numberOfProduct, setnumberOfProduct] = useState(1);
  const handleIncDecProduct = (type) => {
    if (type === "inc" && numberOfProduct < quantity) {
      return setnumberOfProduct(numberOfProduct + 1);
    } else if (type === "dec" && numberOfProduct > 1) {
      return setnumberOfProduct(numberOfProduct - 1);
    }
  };
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
              <a href="/#" className="btn_3">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
