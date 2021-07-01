import { useSelector } from "react-redux";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import CheckOutLogin from "./CheckOutLogin";
import OrderBox from "./CheckOutOrderBox";
import CheckOutRegister from "./CheckOutRegister";
import CheckOutBillingDetails from "./CheckOutBillingDetails";
import { isEmpty } from "lodash";

const CheckOut = () => {
  const isUserExist = useSelector((state) => state.user);
  const isCartExist = useSelector((state) => state.cart);

  return (
    <main>
      <BigHeroTitle name="Check Out" />
      <section className="checkout_area section_padding">
        <div className="container">
          {!isEmpty(isCartExist) ? (
            <>
              <div className="returning_customer">
                {isEmpty(isUserExist) ? (
                  <>
                    <div className="check_title">
                      <h2>
                        Returning Customer?
                        <a href="/login">Click here to login</a>
                      </h2>
                    </div>
                    <p>
                      If you have shopped with us before, please enter your
                      details in the boxes below. If you are a new customer,
                      please proceed to the Billing & Shipping section.
                    </p>
                    <CheckOutLogin />
                  </>
                ) : (
                  ` user logined: ${isUserExist.name}`
                )}
              </div>
              <div className="cupon_area">
                <div className="check_title">
                  <h2>
                    Have a coupon?
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      Click here to enter your code
                    </a>
                  </h2>
                </div>
                <input type="text" placeholder="Enter coupon code" />
                <a
                  className="tp_btn"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Apply Coupon
                </a>
              </div>
              <div className="billing_details">
                <div className="row">
                  <div className="col-lg-8">
                    <h3>Billing Details</h3>
                    {isEmpty(isUserExist) ? (
                      <CheckOutRegister />
                    ) : (
                      <CheckOutBillingDetails user={isUserExist} />
                    )}
                  </div>
                  <div className="col-lg-4">
                    <OrderBox user={isUserExist} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="mx-auto text-center bg-success">the cart is empty</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default CheckOut;
