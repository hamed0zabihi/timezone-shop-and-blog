import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../Redux/Actions/Products/Cart";
import Favorite from "./Favorite";
import Image from "../Utils/Image";

const CardProduct = ({
  title = "Thermo Ball Etip Gloves",
  image = "/images/gallery/popular1.png",
  id = "1",
  price = "45743",
  product,
  toggle,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="single-popular-items mb-50 text-center">
        <div className="popular-img">
          <Link to={`/product/${id}`}>
            <Suspense>
              <Image src={image} alt={title} />
            </Suspense>
            {/* <img src={image} alt={title} /> */}
          </Link>
          <div
            className="img-cap"
            onClick={() => dispatch(addProductToCart(product))}
          >
            <span>Add to cart</span>
          </div>

          <Favorite product={product} toggle={toggle} />
        </div>
        <div className="popular-caption">
          <h3>
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
          <span>$ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
