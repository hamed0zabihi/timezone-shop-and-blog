import { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

const OrderBox = ({ user }) => {
  const [terms, setterms] = useState(false);
  const { cart } = useSelector((state) => state);
  const [shoppingprice, setshoppingprice] = useState(500);
  return (
    <div className="order_box">
      <h2>Your Order</h2>
      <ul className="list">
        <li>
          <a href="/#">
            Product
            <span>Total</span>
          </a>
        </li>
        {cart.map((el) => (
          <>
            <li key={el.id}>
              <a href="/#">
                {el.title}
                <span className="middle">x {el.quantity}</span>
                <span className="last">{el.price}</span>
              </a>
            </li>
          </>
        ))}
      </ul>
      <ul className="list list_2">
        <li>
          <a href="/#">
            Subtotal
            <span>
              ${cart.reduce((x, el) => x + el.price * el.quantity, 0)}
            </span>
          </a>
        </li>
        <li>
          <a href="/#">
            Shipping
            <span>Flat rate: ${shoppingprice}</span>
          </a>
        </li>
        <li>
          <a href="/#">
            Total
            <span>
              $
              {cart.reduce(
                (x, el) => x + el.price * el.quantity,
                shoppingprice
              )}
            </span>
          </a>
        </li>
      </ul>
      <div className="payment_item">
        <div className="radion_btn">
          <input type="radio" id="f-option5" name="selector" />
          <label htmlFor="f-option5">Check payments</label>
          <div className="check"></div>
        </div>
        <p>
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode.
        </p>
      </div>
      <div className="payment_item active">
        <div className="radion_btn">
          <input type="radio" id="f-option6" name="selector" />
          <label htmlFor="f-option6">Paypal </label>
          <img src="/images/product/single-product/card.jpg" alt="" />
          <div className="check"></div>
        </div>
        <p>
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode.
        </p>
      </div>
      <div className="creat_account">
        <input
          type="checkbox"
          id="f-option4"
          name="selector"
          onChange={(e) => {
            setterms(e.currentTarget.checked);
          }}
        />
        <label htmlFor="f-option4">I’ve read and accept the </label>
        <a href="/#">terms & conditions*</a>
      </div>
      {!isEmpty(user) ? (
        <a className="btn_3" href="/#">
          Proceed to Paypal
        </a>
      ) : (
        "first register or login"
      )}
    </div>
  );
};

export default OrderBox;
