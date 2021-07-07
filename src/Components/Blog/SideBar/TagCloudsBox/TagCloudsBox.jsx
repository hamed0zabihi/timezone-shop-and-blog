import { useSelector } from "react-redux";

const TagCloudsBox = () => {
  const AllArticles1 = useSelector((state) => state.articles);
  const AllCategoryInOneArray = AllArticles1.map((el) => el.tag).flat(1);
  let uniqueCategories = [...new Set(AllCategoryInOneArray)];
  const tagUniquePerArticle = uniqueCategories.reduce((acc, tag) => {
    return [
      ...acc,
      {
        tag,
        productdat: AllArticles1.filter((product) =>
          product.category.find((cat) => cat === tag)
        ),
      },
    ];
  }, []);
  console.log("tag unique", tagUniquePerArticle);

  return (
    <aside className="single_sidebar_widget tag_cloud_widget">
      <h4 className="widget_title">Tag Clouds</h4>
      <ul className="list">
        {tagUniquePerArticle.map((el, index) => (
          <li key={index}>
            <a href="/#">{el.tag}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagCloudsBox;
