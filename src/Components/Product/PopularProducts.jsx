import React, { Suspense } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../Redux/Actions/Products/Cart";
import { useState } from "react";
import FavoriteModalForLogin from "./FavoriteModalForLogin";
import Favorite from "./Favorite";
import Image from "../Utils/Image";

const PopularProducts = () => {
  const AllProducts = useSelector((state) => state.productsLocal);
  const PopularProducts = _(AllProducts)
    .orderBy("sellNumber", "desc")
    .take(6)
    .value();
  const dispatch = useDispatch();

  //modal if user not logged in and clicked for favorite product
  const [modalForLogin, setModalForLogin] = useState(false);
  const toggle = () => {
    setModalForLogin(!modalForLogin);
  };

  return (
    //   Popular Items Start
    <>
      <div className="popular-items section-padding30">
        <div className="container">
          {/* <!-- Section tittle --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70 text-center">
                <h2>Popular Items</h2>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {PopularProducts.map((el) => (
              <div key={el.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <Link to={`/product/${el.id}`}>
                      <Suspense>
                        <Image src={el.image} alt={el.title} />
                      </Suspense>
                    </Link>
                    <div
                      className="img-cap"
                      onClick={() => dispatch(addProductToCart(el))}
                    >
                      <span>Add to cart</span>
                    </div>
                    <Favorite product={el} toggle={toggle} />
                  </div>
                  <div className="popular-caption">
                    <h3>
                      <Link to={`/product/${el.id}`}>{el.title}</Link>
                      <span>$ {el.price}</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Button --> */}
          <div className="row justify-content-center">
            <div className="room-btn pt-70">
              <Link to="/shop" className="btn view-btn1">
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FavoriteModalForLogin modal={modalForLogin} toggle={toggle} />
    </>
  );
};

export default PopularProducts;
