import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paginate } from "../../Utils/Paginate";
import CardBlog from "../Archive/CardBlog/CardBlog";
import Pagination from "../../Utils/Pagination";
import { orderBy } from "lodash";
import { useParams } from "react-router";

const SearchBlog = () => {
  const AllArticles = useSelector((state) => state.articles);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { query } = useParams();
  //   const querySearch = query;

  useEffect(() => {
    setSearchQuery(query);
    setFilteredArticles(
      orderBy(
        AllArticles.filter((el) => el.title.includes(query)),
        "createdAt",
        "desc"
      )
    );
  }, [AllArticles, query, searchQuery]);

  //paginate
  const [CurrentPage, setCurrentPage] = useState(1);
  const PerPage = 5;

  //change current page
  const handleCurrentPage = (id) => {
    return [
      window.scrollTo({ top: 0, behavior: "smooth" }),
      setCurrentPage(id),
    ];
  };

  const ArticlesPaginated = Paginate(filteredArticles, PerPage, CurrentPage);

  return (
    <div className="col-lg-8 mb-5 mb-lg-0">
      <div className="blog_left_sidebar">
        {ArticlesPaginated.map((el, i) => (
          <div key={i}>
            <CardBlog {...el} />
          </div>
        ))}
        <div className="row justify-content-center  mt-70">
          <Pagination
            items={filteredArticles}
            PerPage={PerPage}
            CurrentPage={CurrentPage}
            handlePagination={handleCurrentPage}
          />
        </div>
        {/* <nav className="blog-pagination justify-content-center d-flex">
          <ul className="pagination">
            <li className="page-item">
              <a href="/#" className="page-link" aria-label="Previous">
                <i className="ti-angle-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a href="/#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item active">
              <a href="/#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="/#" className="page-link" aria-label="Next">
                <i className="ti-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
};

export default SearchBlog;
