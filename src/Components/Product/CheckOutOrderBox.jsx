import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { Redirect, useHistory } from "react-router";
import { createOrder } from "../../Apis/Product";
import { toast } from "react-toastify";
import { OrderCreate } from "../../Redux/Actions/Products/Order";
import { clearCart } from "../../Redux/Actions/Products/Cart";
import { Link } from "react-router-dom";
const OrderBox = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [terms, setterms] = useState(false);
  const [onceSubmited, setonceSubmited] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("Paypal");
  const { cart } = useSelector((state) => state);
  const [shoppingprice, setshoppingprice] = useState(500);
  const handleOrder = async (event) => {
    event.preventDefault();
    setonceSubmited(true);
    const today = new Date();
    console.log("todey", today.toISOString());
    const order = {
      total: cart.reduce((x, el) => x + el.price * el.quantity, shoppingprice),
      createdAt: today.toISOString(),
      paymentMethod: paymentMethod,
      address: [...user.address],
      orderDetails: [...cart],
      status: "in process",
      shipping: shoppingprice,
    };
    try {
      if (user && cart.length && terms) {
        const { status, data } = await createOrder(order, user.id);

        if (status === 201 && !isEmpty(data)) {
          toast.success("order submit successful", {
            position: "top-right",
            onClose: true,
          });
          dispatch(OrderCreate(data));
          dispatch(clearCart());
          history.push("/confirmation/" + data.orderNumber);
        }
      }
    } catch (exp) {
      toast.error("order submit error", {
        position: "top-right",
        onClose: true,
      });
      console.log(exp);
    }
  };
  return (
    <div className="order_box">
      <h2>Your Order</h2>
      <ul className="list">
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            Product
            <span>Total</span>
          </a>
        </li>
        {cart.map((el, index) => (
          <li key={index}>
            <Link to={`/product/${el.id}`}>
              {el.title}
              <span className="middle">x {el.quantity}</span>
              <span className="last">{el.price}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="list list_2">
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            Subtotal
            <span>
              ${cart.reduce((x, el) => x + el.price * el.quantity, 0)}
            </span>
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            Shipping
            <span>Flat rate: ${shoppingprice}</span>
          </a>
        </li>
        <li>
          <a href="/#" onClick={(e) => e.preventDefault()}>
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
          <input
            type="radio"
            id="f-option5"
            name="selector"
            value="googlePayment"
            checked={paymentMethod === "googlePayment"}
            onChange={(e) => setpaymentMethod(e.target.value)}
          />
          <label htmlFor="f-option5">Check payments</label>
          <div className="check"></div>
        </div>
      </div>
      <div className="payment_item active">
        <div className="radion_btn">
          <input
            type="radio"
            id="f-option6"
            name="selector"
            value="Paypal"
            checked={paymentMethod === "Paypal"}
            onChange={(e) => setpaymentMethod(e.target.value)}
          />
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
          className={!terms && !onceSubmited ? "" : "check-box-outline-color"}
          name="selector"
          onChange={(e) => {
            setterms(e.currentTarget.checked);
          }}
        />
        <label htmlFor="f-option4">I’ve read and accept the </label>
        <a href="/#"> terms & conditions*</a>
        {!terms && !onceSubmited ? (
          ""
        ) : (
          <p className="text-danger">you must accept terms and conditions</p>
        )}
      </div>
      {!isEmpty(user) ? (
        <button className="btn_3 mx-auto" onClick={handleOrder}>
          Proceed to Paypal
        </button>
      ) : (
        <p className="text-danger text-center">
          first,you should login or register
        </p>
      )}
    </div>
  );
};

export default OrderBox;
