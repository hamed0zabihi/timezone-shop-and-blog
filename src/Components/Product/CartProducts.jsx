import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductToCart,
  clearCart,
  removeProductFromCart,
} from "../../Redux/Actions/Products/Cart";

const CartProducts = () => {
  const allProductsCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = (product, checkQuantity, checkInventory) => {
    if (checkQuantity < checkInventory) dispatch(addProductToCart(product, 1));
  };
  const handleRemoveFromToCart = (id) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <div className="cart_inner">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {allProductsCart.map((el) => (
              <tr key={el.id}>
                <td>
                  <div className="media">
                    <div className="d-flex">
                      <img src={el.image} alt={el.title} />
                    </div>
                    <div className="media-body">
                      <Link to={`/product/${el.id}`}>
                        <p>{el.title}</p>
                      </Link>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>${el.price}</h5>
                </td>
                <td>
                  <div className="product_count">
                    <div onClick={() => handleRemoveFromToCart(el.id)}>
                      <span className="input-number-decrement">
                        {el.quantity !== 1 ? (
                          <i className="ti-minus"></i>
                        ) : (
                          <i className="ti-trash"></i>
                        )}
                      </span>
                    </div>
                    <input
                      className="input-number"
                      type="text"
                      value={el.quantity}
                      min="0"
                      max={el.inventory}
                    />
                    <div>
                      <span
                        className={
                          el.quantity !== el.inventory
                            ? "input-number-increment"
                            : "input-number-increment no-drop"
                        }
                      >
                        <i
                          className="ti-plus"
                          onClick={() =>
                            handleAddToCart(el, el.quantity, el.inventory)
                          }
                        ></i>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>${el.quantity * el.price}</h5>
                </td>
              </tr>
            ))}

            <tr className="bottom_button">
              <td>
                <button className="btn_1" onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </button>
              </td>
              <td></td>
              <td></td>
              <td>
                <div className="cupon_text float-right">
                  <button className="btn_1">
                    <Link to="/shop">Countiue</Link>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <h5>Subtotal</h5>
              </td>
              <td>
                <h5>
                  {allProductsCart.reduce(
                    (x, items) => x + items.price * items.quantity,
                    0
                  )}
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="checkout_btn_inner float-right">
          {/* <a className="btn_1" href="/#">
        Continue Shopping
      </a> */}
          <a className="btn_1 checkout_btn_1" href="/#">
            Proceed to checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
