import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShopMethodContainer from "../Home/ShopMethodContainer";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import { Paginate } from "../Utils/Paginate";
import Pagination from "../Utils/Pagination";
import CardProduct from "./CardProduct";
import { orderBy, isEmpty } from "lodash";

const SearchProduct = ({ match }) => {
  const AllProducts = useSelector((state) => state.productsLocal);
  const [filterProducts, setfilterProducts] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const querySearch = match.params.query;

  useEffect(() => {
    setsearchQuery(querySearch);
    setfilterProducts(
      AllProducts.filter((el) => el.title.includes(querySearch))
    );
  }, [AllProducts, querySearch]);

  console.log("AllProducts,", AllProducts);
  console.log("searchQuery", searchQuery);
  console.log("params", querySearch);
  console.log("filterProducts,", filterProducts);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(6);
  const [sortingMode, setsortingMode] = useState("");
  //set currentpage
  const handleCurrentPage = (id) => {
    return setCurrentPage(id);
  };
  //set perpage
  const handlePerPageg = (id) => {
    setPerPage(id);
    setCurrentPage(1);
  };
  //filter base popular newest high-price
  const handleSorting = (fieldName) => {
    console.log("filedname,", filterProducts);
    setfilterProducts(orderBy(filterProducts, fieldName, "desc"));
    setsortingMode(fieldName);
    setCurrentPage(1);
  };
  const ProductsPaginated = Paginate(filterProducts, PerPage, CurrentPage);

  return (
    <main>
      <>
        {/* <!-- Hero Area Start--> */}
        <BigHeroTitle name="Search" />
        <section className="popular-items latest-padding">
          {!isEmpty(filterProducts) && !isEmpty(searchQuery) ? (
            <>
              {/* <!-- Hero Area End--> */}
              {/* <!-- Latest Products Start --> */}

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
                      />
                    ))}
                  </div>
                </div>
                {/* <!-- pagination --> */}
                <div className="row justify-content-center  mt-70">
                  <Pagination
                    items={filterProducts}
                    PerPage={PerPage}
                    CurrentPage={CurrentPage}
                    handlePagination={handleCurrentPage}
                  />
                </div>
              </div>

              {/* <!-- Latest Products End --> */}
              {/* <!--? Shop Method Start--> */}
              <ShopMethodContainer />
              {/* <!-- Shop Method End--> */}
            </>
          ) : (
            <p className="mx-auto text-center text-danger">
              not found any products
            </p>
          )}
        </section>
      </>
    </main>
  );
};

export default SearchProduct;
