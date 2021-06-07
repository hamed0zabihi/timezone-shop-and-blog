import { useState } from "react";
import { useSelector } from "react-redux";
import ShopMethodContainer from "../Home/ShopMethodContainer";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import { Paginate } from "../Utils/Paginate";
import Pagination from "../Utils/Pagination";
import CardProduct from "./CardProduct";
const Shop = () => {
  const AllProducts = useSelector((state) => state.ProductsLocal);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(6);
  //set currentpage
  const handleCurrentPage = (id) => {
    return setCurrentPage(id);
  };
  const ProductsPaginated = Paginate(AllProducts, PerPage, CurrentPage);
  return (
    <main>
      {/* <!-- Hero Area Start--> */}
      <BigHeroTitle name="Watch Shop" />
      {/* <!-- Hero Area End--> */}
      {/* <!-- Latest Products Start --> */}
      <section className="popular-items latest-padding">
        <div className="container">
          <div className="row product-btn justify-content-between mb-40">
            <div className="properties__button">
              {/* <!--Nav Button  --> */}
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    NewestArrivals
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    {" "}
                    Price high to low
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    {" "}
                    Most populer{" "}
                  </a>
                </div>
              </nav>
              {/* <!--End Nav Button  --> */}
            </div>
            {/* <!-- Grid and List view --> */}
            <div className="grid-list-view"></div>
            {/* <!-- Select items --> */}
            <div className="select-this">
              <form action="#">
                <div className="select-itms">
                  <select name="select" className="nice-select" id="select1">
                    <option className="option" value="">
                      6 per page
                    </option>
                    <option className="option" value="">
                      12 per page
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Nav Card --> */}
          <div className="tab-content" id="nav-tabContent">
            {/* <!-- card one --> */}

            <div className="row">
              {ProductsPaginated.map((el) => (
                <CardProduct
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  price={el.price}
                />
              ))}
            </div>

            {/* <!-- Card two --> */}

            {/* <!-- Card three --> */}
          </div>
          {/* <!-- pagination --> */}
          <div className="row justify-content-center  mt-70">
            <Pagination
              items={AllProducts}
              PerPage={PerPage}
              CurrentPage={CurrentPage}
              handlePagination={handleCurrentPage}
            />
          </div>
        </div>
      </section>
      {/* <!-- Latest Products End --> */}
      {/* <!--? Shop Method Start--> */}
      <ShopMethodContainer />
      {/* <!-- Shop Method End--> */}
    </main>
  );
};

export default Shop;
