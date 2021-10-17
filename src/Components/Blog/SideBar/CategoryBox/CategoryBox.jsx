import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryBox = () => {
  const AllArticles1 = useSelector((state) => state.articles);
  const AllCategoryInOneArray = AllArticles1.map((el) => el.category).flat(1);
  //toLowerCase every category
  const AllCategoryInOneArrayLowerCase = AllCategoryInOneArray.map((el) =>
    el.toLowerCase()
  );
  //uniqe category
  let uniqueCategories = [...new Set(AllCategoryInOneArrayLowerCase)];
  const p = uniqueCategories.reduce((acc, category) => {
    return [
      ...acc,
      {
        category,
        productdat: AllArticles1.filter((product) =>
          product.category.find((cat) => cat.toLowerCase() === category)
        ),
      },
    ];
  }, []);
  // console.log("AllCategoryInOneArray", AllCategoryInOneArrayLowerCase);
  return (
    <aside className="single_sidebar_widget post_category_widget">
      <h4 className="widget_title">Category</h4>
      <ul className="list cat-list">
        {p.map((el, index) => (
          <li key={index}>
            <Link
              to={`/blog/search/category/${el.category}`}
              className="d-flex"
            >
              <p>{el.category}</p>
              <p>({el.productdat.length})</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryBox;
