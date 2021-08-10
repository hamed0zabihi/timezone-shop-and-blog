import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paginate } from "../../Utils/Paginate";
import CardBlog from "./CardBlog/CardBlog";
import Pagination from "../../Utils/Pagination";
import { orderBy } from "lodash";

const Archive = () => {
  const AllArticles = useSelector((state) => state.articles);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery(searchQuery);
    setFilteredArticles(
      orderBy(
        AllArticles.filter((el) => el.title.includes(searchQuery)),
        "createdAt",
        "desc"
      )
    );
  }, [AllArticles, searchQuery]);

  //initial for paginate
  const [CurrentPage, setCurrentPage] = useState(1);
  const PerPage = 4;

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
        {/* <CardBlog articles={ArticlesPaginated} /> */}

        <div className="row justify-content-center  mt-70">
          <Pagination
            items={filteredArticles}
            PerPage={PerPage}
            CurrentPage={CurrentPage}
            handlePagination={handleCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
