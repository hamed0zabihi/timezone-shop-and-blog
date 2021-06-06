import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
const NewArrival = () => {
  const AllProducts = useSelector((state) => state.ProductsLocal);
  const ThreeProducts = _(AllProducts)
    .orderBy("createAt", "desc")
    .take(3)
    .value();
  return (
    <>
      <section className="new-product-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-tittle mb-70">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {ThreeProducts.map((el) => (
              <div key={el.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="single-new-pro mb-30 text-center">
                  <div className="product-img">
                    <img src={el.image} alt={el.title} />
                  </div>
                  <div className="product-caption">
                    <h3>
                      <Link to={`/product/${el.id}`}>{el.title}</Link>
                    </h3>
                    <span>$ {el.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
