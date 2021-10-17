import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paginate } from "../../Utils/Paginate";
import CardBlog from "./CardBlog/CardBlog";
import Pagination from "../../Utils/Pagination";
import { orderBy } from "lodash";
import { useHistory } from "react-router-dom";
import { params } from "../../Utils/Params";
import PreLoadings from "../../Utils/PreLoadings";

const Archive = () => {
  const AllArticles = useSelector((state) => state.articles);
  const history = useHistory();

  const [state, setState] = useState({
    searchQuery: "",
    currentPage: 1,
    perPage: 4,
    filteredArticles: [],
  });
  // const [filteredArticles, setFilteredArticles] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  //initial for paginate
  // const [currentPage, setCurrentPage] = useState(1);
  // const [perPage] = useState(4);
  // const PerPage = 4;

  useEffect(() => {
    let queryString = params();
    let url = {
      page: Number(queryString?.page ?? 1) ?? state?.currentPage,
    };

    history.push({
      search: `page=${url?.page}`,
    });

    setState((prevState) => ({
      ...prevState,
      currentPage: url?.page,
    }));
  }, [params]);

  useEffect(() => {
    let resultSort = orderBy(
      AllArticles.filter((el) => el.title.includes(state?.searchQuery)),
      "createdAt",
      "desc"
    );

    setState((prevState) => ({
      ...prevState,
      searchQuery: state.searchQuery,
      filteredArticles: resultSort,
    }));
  }, [AllArticles]);

  //change current page
  const handleCurrentPage = (currentPage) => {
    history.push({
      search: `page=${currentPage}`,
    });

    return [
      window.scrollTo({ top: 0, behavior: "smooth" }),
      setState((prevState) => ({
        ...prevState,
        currentPage,
      })),
    ];
  };

  const ArticlesPaginated = Paginate(
    state?.filteredArticles,
    state?.perPage,
    state?.currentPage
  );

  return (
    <div className="col-lg-8 mb-5 mb-lg-0">
      <div className="blog_left_sidebar">
        {/* TODO: Read this */}
        {/* This loading logic is wrong but necessary for re-rendering */}
        {ArticlesPaginated?.length ? (
          ArticlesPaginated.map((el, i) => (
            <div key={i}>
              <CardBlog {...el} />
            </div>
          ))
        ) : (
          <PreLoadings />
        )}
        {/* <CardBlog articles={ArticlesPaginated} /> */}

        <div className="row justify-content-center  mt-70">
          <Pagination
            items={state?.filteredArticles}
            PerPage={state?.perPage}
            CurrentPage={state?.currentPage}
            handlePagination={handleCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
