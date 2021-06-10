import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import CheckOutLogin from "./CheckOutLogin";
import OrderBox from "./CheckOutOrderBox";

const CheckOut = () => {
  return (
    <main>
      <BigHeroTitle name="Check Out" />
      <section className="checkout_area section_padding">
        <div className="container">
          <div className="returning_customer">
            <div className="check_title">
              <h2>
                Returning Customer?
                <a href="/login">Click here to login</a>
              </h2>
            </div>
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            {/* {checkoutlogin} */}
            <CheckOutLogin />
          </div>
          <div className="cupon_area">
            <div className="check_title">
              <h2>
                Have a coupon?
                <a href="/#">Click here to enter your code</a>
              </h2>
            </div>
            <input type="text" placeholder="Enter coupon code" />
            <a className="tp_btn" href="/#">
              Apply Coupon
            </a>
          </div>
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
              </div>
              <div className="col-lg-4">
                <OrderBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckOut;
