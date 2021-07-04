import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";

const CheckOutConfirmation = () => {
  const order = useSelector((state) => state.order);
  return (
    <main>
      <BigHeroTitle name="confirmation" />
      <section className="confirmation_part section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="confirmation_tittle">
                <span>Thank you. Your order has been received.</span>
              </div>
            </div>
            <div className="col-lg-6 col-lx-4">
              <div className="single_confirmation_details">
                <h4>order info</h4>
                <ul>
                  <li>
                    <p>order number</p>
                    <span>: {order.orderNumber}</span>
                  </li>
                  <li>
                    <p>data</p>
                    <span>:{order.createdAt.split("T")[0]}</span>
                  </li>
                  <li>
                    <p>total</p>
                    <span>: USD {order.total}</span>
                  </li>
                  <li>
                    <p>mayment methord</p>
                    <span>: {order.paymentMethod}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-lx-4">
              <div className="single_confirmation_details">
                <h4>Billing Address</h4>
                <ul>
                  <li>
                    <p>address one</p>
                    <span>:{order.address[0].addressone}</span>
                  </li>
                  <li>
                    <p>address two</p>
                    <span>: {order.address[0].addresstwo}</span>
                  </li>
                  <li>
                    <p>city</p>
                    <span>:{order.address[0].city}</span>
                  </li>
                  <li>
                    <p>country</p>
                    <span>: {order.address[0].country}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="order_details_iner">
                <h3>Order Details</h3>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" colSpan="2">
                        Product
                      </th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orderDetails.map((el) => (
                      <tr key={el.id}>
                        <th colSpan="2">
                          <Link to={`/product/${el.id}`}>
                            <span>{el.title}</span>
                          </Link>
                        </th>
                        <th>x{el.quantity}</th>
                        <th>
                          <span>{el.quantity * el.price}</span>
                        </th>
                      </tr>
                    ))}

                    <tr>
                      <th colSpan="3">Subtotal</th>
                      <th>
                        <span>
                          $
                          {order.orderDetails.reduce(
                            (x, el) => x + el.price * el.quantity,
                            0
                          )}
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan="3">shipping</th>
                      <th>
                        <span>flat rate: ${order.shipping}</span>
                      </th>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="col" colSpan="3">
                        Quantity
                      </th>
                      <th scope="col">{order.total}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckOutConfirmation;
