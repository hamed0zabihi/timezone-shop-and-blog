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
          <div
            className="page-link"
            onClick={() => handlePagination(CurrentPage - 1)}
          >
            <i className="ti-angle-left"></i>
          </div>
        </li>
        {PageCounter.map((el) => (
          <li
            key={el}
            onClick={() => handlePagination(el)}
            className={el === CurrentPage ? "page-item active" : "page-item"}
          >
            <div
              className="page-link"
              onClick={() => {
                handlePagination(el);
              }}
            >
              {el}
            </div>
          </li>
        ))}
        <li
          className={
            CurrentPage < countNumber
              ? "page-item "
              : "page-item disabled no-drop"
          }
        >
          <div
            className="page-link"
            onClick={() => handlePagination(CurrentPage + 1)}
          >
            <i className="ti-angle-right"></i>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
