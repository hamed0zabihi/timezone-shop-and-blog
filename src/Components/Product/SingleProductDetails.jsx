import { useState } from "react";

const SingleProductDetails = () => {
  const price = 5;
  const [quantity, setquantity] = useState(1);
  const [totalprice, settotalprice] = useState(0);
  const handleIncDicrease = (type) => {
    if (quantity >= 1 && type === "inc") {
      return setquantity(quantity + 1), settotalprice((quantity + 1) * price);
    } else if (quantity > 1 && type === "dic") {
      return setquantity(quantity - 1), settotalprice((quantity - 1) * price);
    }
  };
  const subtotal = () => {
    const constsub = quantity * price;
    return settotalprice(constsub);
  };
  console.log("total:", totalprice);
  console.log("quantity:", quantity);
  return (
    <>
      <div className="col-lg-8">
        <div className="single_product_text text-center">
          <h3>
            Foam filling cotton slow <br></br>
            rebound pillows
          </h3>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources. Credibly innovate
            granular internal or “organic” sources whereas high standards in
            web-readiness. Credibly innovate granular internal or organic
            sources whereas high standards in web-readiness. Energistically
            scale future-proof core competencies vis-a-vis impactful
            experiences. Dramatically synthesize integrated schemas. with
            optimal networks.
          </p>
          <div className="card_area">
            <div className="product_count_area">
              <p>Quantity</p>
              <div className="product_count d-inline-block">
                <span className="product_count_item inumber-decrement" disabled>
                  <i
                    className="ti-minus"
                    onClick={(e) => handleIncDicrease("dic")}
                  ></i>
                </span>
                <input
                  className="product_count_item input-number"
                  type="text"
                  min="0"
                  max="10"
                  value={quantity}
                />
                <span className="product_count_item number-increment">
                  <i
                    className="ti-plus"
                    onClick={(e) => handleIncDicrease("inc")}
                  ></i>
                </span>
              </div>
              <p>${totalprice}</p>
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
