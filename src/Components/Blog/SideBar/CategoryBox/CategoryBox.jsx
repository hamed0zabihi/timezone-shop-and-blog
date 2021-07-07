import { useSelector } from "react-redux";

const CategoryBox = () => {
  const AllArticles1 = useSelector((state) => state.articles);
  const AllCategoryInOneArray = AllArticles1.map((el) => el.category).flat(1);
  let uniqueCategories = [...new Set(AllCategoryInOneArray)];
  const p = uniqueCategories.reduce((acc, category) => {
    return [
      ...acc,
      {
        category,
        productdat: AllArticles1.filter((product) =>
          product.category.find((cat) => cat === category)
        ),
      },
    ];
  }, []);
  console.log("p", p);
  return (
    <aside className="single_sidebar_widget post_category_widget">
      <h4 className="widget_title">Category</h4>
      <ul className="list cat-list">
        {p.map((elb, index) => (
          <li key={index}>
            <a href="/#" className="d-flex">
              <p>{elb.category}</p>
              <p>({elb.productdat.length})</p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryBox;
