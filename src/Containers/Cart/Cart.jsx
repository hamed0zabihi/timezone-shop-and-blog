import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import CartProducts from "../../Components/Product/CartProducts";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <main>
      <BigHeroTitle name="Cart List" />
      {/* <!--================Cart Area =================--> */}
      <section className="cart_area section_padding">
        <div className="container">
          {!isEmpty(cart) ? (
            <CartProducts />
          ) : (
            <p className="text-center"> The cart is empty </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
