import { range } from "lodash";
const Pagination = ({ items, PerPage, CurrentPage, handlePagination }) => {
  const countNumber = Math.ceil(items.length / PerPage);
  const PageCounter = range(1, countNumber + 1);
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination pg-blue justify-content-center">
        <li className={CurrentPage > 1 ? "page-item " : "page-item disabled"}>
          <a
            className="page-link"
            tabindex="-1"
            onClick={() => handlePagination(CurrentPage - 1)}
          >
            Previous
          </a>
        </li>
        {PageCounter.map((el) => (
          <li
            key={el}
            onClick={() => handlePagination(el)}
            className={el === CurrentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link">{el}</a>
          </li>
        ))}
        <li
          className={
            CurrentPage < countNumber ? "page-item " : "page-item disabled"
          }
        >
          <a
            className="page-link"
            onClick={() => handlePagination(CurrentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
