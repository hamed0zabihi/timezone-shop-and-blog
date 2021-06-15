import { range } from "lodash";
const Pagination = ({ items, PerPage, CurrentPage, handlePagination }) => {
  const countNumber = Math.ceil(items.length / PerPage);
  if (countNumber === 1) return null;
  const PageCounter = range(1, countNumber + 1);
  return (
    <nav aria-label="blog-pagination justify-content-center d-flex ">
      {/* Page navigation example */}
      <ul className="pagination ">
        <li
          className={
            CurrentPage > 1 ? "page-item " : "page-item disabled no-drop"
          }
        >
          <a
            className="page-link"
            onClick={() => handlePagination(CurrentPage - 1)}
          >
            <i className="ti-angle-left"></i>
          </a>
        </li>
        {PageCounter.map((el) => (
          <li
            key={el}
            onClick={() => handlePagination(el)}
            className={el === CurrentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => {
                handlePagination(el);
              }}
            >
              {el}
            </a>
          </li>
        ))}
        <li
          className={
            CurrentPage < countNumber
              ? "page-item "
              : "page-item disabled no-drop"
          }
        >
          <a
            className="page-link"
            onClick={() => handlePagination(CurrentPage + 1)}
          >
            <i className="ti-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
