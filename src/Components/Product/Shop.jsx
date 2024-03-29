import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShopMethodContainer from "../Home/ShopMethodContainer";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import { Paginate } from "../Utils/Paginate";
import Pagination from "../Utils/Pagination";
import CardProduct from "./CardProduct";
import FavoriteModalForLogin from "./FavoriteModalForLogin";
import { orderBy } from "lodash";

const Shop = () => {
  const AllProducts = useSelector((state) => state.productsLocal);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(AllProducts);
  }, [AllProducts]);

  const [CurrentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(6);
  const [sortingMode, setSortingMode] = useState("");
  //set currentpage
  const handleCurrentPage = (id) => {
    return [
      document.getElementById("nav-tab").scrollIntoView({ behavior: "smooth" }),
      setCurrentPage(id),
    ];
  };
  //set perpage
  const handlePerPageg = (id) => {
    setPerPage(id);
    setCurrentPage(1);
  };
  //filter base popular newest high-price
  const handleSorting = (fieldName) => {
    console.log("filedname,", filterProducts);
    setFilterProducts(orderBy(filterProducts, fieldName, "desc"));
    setSortingMode(fieldName);
    setCurrentPage(1);
  };
  const ProductsPaginated = Paginate(filterProducts, PerPage, CurrentPage);
  //modal if user not logged in and clicked for favorite product
  const [modalForLogin, setmodalForLogin] = useState(false);
  const toggle = () => {
    setmodalForLogin(!modalForLogin);
  };

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
                  <button
                    className={
                      sortingMode === "createAt"
                        ? "nav-link active"
                        : "nav-item nav-link genric-btn default-border"
                    }
                    onClick={() => handleSorting("createAt")}
                  >
                    NewestArrivals
                  </button>
                  <button
                    className={
                      sortingMode === "price"
                        ? "nav-link active"
                        : "nav-item nav-link genric-btn default-border"
                    }
                    onClick={() => handleSorting("price")}
                  >
                    Price high to low
                  </button>
                  <button
                    className={
                      sortingMode === "sellNumber"
                        ? "nav-link active"
                        : "nav-item nav-link genric-btn default-border"
                    }
                    onClick={() => handleSorting("sellNumber")}
                  >
                    {" "}
                    Most populer{" "}
                  </button>
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
                  <select
                    name="select"
                    className="nice-select"
                    id="select1"
                    onChange={(e) => handlePerPageg(e.target.value)}
                  >
                    <option className="option" value="6">
                      6 per page
                    </option>
                    <option className="option" value="12">
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
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  price={el.price}
                  product={el}
                  toggle={toggle}
                />
              ))}
            </div>
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
      <FavoriteModalForLogin modal={modalForLogin} toggle={toggle} />
    </main>
  );
};

export default Shop;
