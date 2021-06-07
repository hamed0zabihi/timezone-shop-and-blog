import { Link } from "react-router-dom";

const CardProduct = ({
  title = "Thermo Ball Etip Gloves",
  image = "/images/gallery/popular1.png",
  id = "1",
  price = "45743",
}) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="single-popular-items mb-50 text-center">
        <div className="popular-img">
          <img src={image} alt={title} />
          <div className="img-cap">
            <span>Add to cart</span>
          </div>
          <div className="favorit-items">
            <span className="flaticon-heart"></span>
          </div>
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
